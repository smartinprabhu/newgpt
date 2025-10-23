"""
Langraph Workflow Orchestrator
Dynamically creates and executes agent workflows based on user requests
"""
from langgraph.graph import StateGraph, END
from typing import Dict, Any, List, Optional, TypedDict, Annotated
from typing_extensions import TypedDict
import operator
import logging
import time
import asyncio
from datetime import datetime

from agents import AgentFactory
from redis_manager import RedisContextManager, generate_session_id

logger = logging.getLogger(__name__)


# Define State for the workflow
class WorkflowState(TypedDict):
    """State that flows through the workflow"""
    session_id: str
    agent_type: str
    business_unit: Dict[str, Any]
    line_of_business: Optional[Dict[str, Any]]
    user_prompt: str
    context: str
    agent_responses: Annotated[List[str], operator.add]
    current_step: str
    completed_steps: Annotated[List[str], operator.add]
    final_response: str
    metadata: Dict[str, Any]


class WorkflowOrchestrator:
    """Orchestrates dynamic agent workflows using Langraph"""

    def __init__(self, redis_manager: RedisContextManager):
        """Initialize orchestrator with Redis manager and agent factory"""
        self.redis_manager = redis_manager
        self.agent_factory = AgentFactory()
        logger.info("WorkflowOrchestrator initialized")

    def _create_context_prompt(
        self,
        business_unit: Dict[str, Any],
        line_of_business: Optional[Dict[str, Any]],
        user_prompt: str
    ) -> str:
        """Create context-aware prompt for agents"""
        bu_name = business_unit.get('display_name', 'Unknown BU')
        lob_name = line_of_business.get('name') if line_of_business else None

        context = f"""
**Business Context:**
- Business Unit: {bu_name}
{f"- Line of Business: {lob_name}" if lob_name else "- No specific LOB selected (analyzing entire BU)"}

**User Request:**
{user_prompt}

**Important Guidelines:**
1. Always reference the specific Business Unit{f" and LOB ({lob_name})" if lob_name else ""} in your response
2. Provide specific, actionable insights - not generic advice
3. If you need data to provide accurate analysis, clearly state what data you need
4. Be concise but comprehensive
"""
        return context

    async def _execute_agent_node(
        self,
        state: WorkflowState,
        agent_type: str,
        step_name: str
    ) -> WorkflowState:
        """Execute a single agent node in the workflow"""
        try:
            logger.info(f"Executing agent node: {step_name} (Agent: {agent_type})")

            # Get the appropriate agent
            agent = self.agent_factory.get_agent(agent_type)

            # Create context-aware prompt
            context_prompt = self._create_context_prompt(
                state['business_unit'],
                state['line_of_business'],
                state['user_prompt']
            )

            # Run agent synchronously (phidata agents are sync)
            response = await asyncio.to_thread(
                agent.run,
                context_prompt
            )

            # Extract response content
            if hasattr(response, 'content'):
                response_text = response.content
            else:
                response_text = str(response)

            logger.info(f"Agent {agent_type} completed. Response length: {len(response_text)}")

            # Update state
            state['agent_responses'].append(response_text)
            state['completed_steps'].append(step_name)
            state['current_step'] = step_name
            state['metadata'][step_name] = {
                'agent_type': agent_type,
                'timestamp': datetime.utcnow().isoformat(),
                'response_length': len(response_text)
            }

            # Update Redis context
            await self.redis_manager.update_workflow_state(
                session_id=state['session_id'],
                current_step=step_name,
                completed_steps=state['completed_steps'],
                pending_steps=[]
            )

            await self.redis_manager.append_conversation(
                session_id=state['session_id'],
                role='assistant',
                content=f"[{agent_type}] {response_text}"
            )

            return state

        except Exception as e:
            logger.error(f"Error executing agent node {step_name}: {str(e)}")
            error_response = f"Error in {step_name}: {str(e)}"
            state['agent_responses'].append(error_response)
            return state

    def _create_simple_workflow(self, agent_type: str) -> StateGraph:
        """
        Create a simple workflow with a single agent
        For initial testing and simple requests
        """
        workflow = StateGraph(WorkflowState)

        # Define single agent node
        async def main_agent_node(state: WorkflowState) -> WorkflowState:
            return await self._execute_agent_node(state, agent_type, f"{agent_type}_main")

        # Add node and edge
        workflow.add_node("main_agent", main_agent_node)
        workflow.set_entry_point("main_agent")
        workflow.add_edge("main_agent", END)

        return workflow

    def _create_forecasting_workflow(self, agent_type: str) -> StateGraph:
        """
        Create forecasting workflow
        Flow: Onboarding → Data Analysis → Forecasting → Final Response
        """
        workflow = StateGraph(WorkflowState)

        # Node 1: Onboarding/Context Understanding
        async def onboarding_node(state: WorkflowState) -> WorkflowState:
            return await self._execute_agent_node(state, "Onboarding", "onboarding")

        # Node 2: Data Analysis
        async def analysis_node(state: WorkflowState) -> WorkflowState:
            return await self._execute_agent_node(state, "Data Analysis", "data_analysis")

        # Node 3: Forecasting
        async def forecasting_node(state: WorkflowState) -> WorkflowState:
            return await self._execute_agent_node(state, agent_type, "forecasting")

        # Node 4: Synthesize Final Response
        async def synthesis_node(state: WorkflowState) -> WorkflowState:
            # Combine all agent responses into coherent final response
            final_response = "\n\n---\n\n".join([
                "# Multi-Agent Forecasting Analysis",
                f"**Business Unit:** {state['business_unit']['display_name']}",
                f"**LOB:** {state['line_of_business']['name'] if state['line_of_business'] else 'All LOBs'}",
                "",
                "## Analysis Results:",
                *state['agent_responses']
            ])

            state['final_response'] = final_response
            return state

        # Build workflow graph
        workflow.add_node("onboarding", onboarding_node)
        workflow.add_node("analysis", analysis_node)
        workflow.add_node("forecasting", forecasting_node)
        workflow.add_node("synthesis", synthesis_node)

        # Define edges (sequential flow)
        workflow.set_entry_point("onboarding")
        workflow.add_edge("onboarding", "analysis")
        workflow.add_edge("analysis", "forecasting")
        workflow.add_edge("forecasting", "synthesis")
        workflow.add_edge("synthesis", END)

        return workflow

    async def execute_workflow(
        self,
        agent_type: str,
        business_unit: Dict[str, Any],
        line_of_business: Optional[Dict[str, Any]],
        prompt: str
    ) -> Dict[str, Any]:
        """
        Main method to execute agent workflow

        Args:
            agent_type: Type of agent to execute
            business_unit: Business unit context
            line_of_business: LOB context (optional)
            prompt: User's prompt

        Returns:
            Dictionary with response and metadata
        """
        start_time = time.time()
        session_id = generate_session_id()

        try:
            logger.info(f"Starting workflow execution - Session: {session_id}, Agent: {agent_type}")

            # Store initial context in Redis
            await self.redis_manager.store_context(
                session_id=session_id,
                business_unit=business_unit,
                line_of_business=line_of_business,
                prompt=prompt,
                agent_type=agent_type
            )

            # Initialize workflow state
            initial_state: WorkflowState = {
                "session_id": session_id,
                "agent_type": agent_type,
                "business_unit": business_unit,
                "line_of_business": line_of_business,
                "user_prompt": prompt,
                "context": "",
                "agent_responses": [],
                "current_step": "init",
                "completed_steps": [],
                "final_response": "",
                "metadata": {}
            }

            # Determine which workflow to use
            if agent_type in ["Forecasting", "Short Term Forecasting", "Long Term Forecasting"]:
                # Use comprehensive forecasting workflow
                workflow = self._create_forecasting_workflow(agent_type)
                logger.info("Using comprehensive forecasting workflow")
            else:
                # Use simple single-agent workflow
                workflow = self._create_simple_workflow(agent_type)
                logger.info("Using simple single-agent workflow")

            # Compile and run workflow
            app = workflow.compile()
            final_state = await app.ainvoke(initial_state)

            execution_time = time.time() - start_time

            # Extract final response
            if final_state.get('final_response'):
                response = final_state['final_response']
            elif final_state.get('agent_responses'):
                response = final_state['agent_responses'][-1]
            else:
                response = "No response generated"

            logger.info(f"Workflow completed in {execution_time:.2f}s")

            return {
                "success": True,
                "response": response,
                "session_id": session_id,
                "workflow_steps": final_state.get('completed_steps', []),
                "execution_time": execution_time,
                "metadata": final_state.get('metadata', {})
            }

        except Exception as e:
            logger.error(f"Workflow execution failed: {str(e)}", exc_info=True)
            execution_time = time.time() - start_time

            return {
                "success": False,
                "response": f"Workflow execution failed: {str(e)}",
                "session_id": session_id,
                "workflow_steps": [],
                "execution_time": execution_time,
                "metadata": {"error": str(e)}
            }

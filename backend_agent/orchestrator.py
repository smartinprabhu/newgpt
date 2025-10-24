"""
Langraph Workflow Orchestrator
Dynamically creates and executes agent workflows based on user requests
Supports agent selection, progress tracking, and conversation context
"""
from langgraph.graph import StateGraph, END
from typing import Dict, Any, List, Optional, TypedDict, Annotated, Callable
from typing_extensions import TypedDict
import operator
import logging
import time
import asyncio
from datetime import datetime
import re

from agents import AgentFactory
from redis_manager import RedisContextManager, generate_session_id
from vector_search import get_vector_search

logger = logging.getLogger(__name__)


# Define State for the workflow
class WorkflowState(TypedDict):
    """State that flows through the workflow"""
    session_id: str
    agent_type: str
    business_unit: str
    line_of_business: str
    user_prompt: str
    context: str
    conversation_context: Dict[str, Any]
    agent_responses: Annotated[List[str], operator.add]
    current_step: str
    completed_steps: Annotated[List[Dict[str, Any]], operator.add]
    final_response: str
    metadata: Dict[str, Any]


class WorkflowOrchestrator:
    """Orchestrates dynamic agent workflows using Langraph"""

    def __init__(self, redis_manager: RedisContextManager):
        """Initialize orchestrator with Redis manager and agent factory"""
        self.redis_manager = redis_manager
        self.agent_factory = AgentFactory()
        self.vector_search = get_vector_search()
        logger.info("WorkflowOrchestrator initialized")

    def analyze_and_select_agent(
        self,
        user_query: str,
        suggested_agent: Optional[str] = None
    ) -> str:
        """
        Analyze query and select appropriate agent type
        
        Args:
            user_query: User's query text
            suggested_agent: Frontend suggested agent type (optional)
        
        Returns:
            Selected agent type
        """
        query_lower = user_query.lower()
        
        # Agent keyword mapping
        agent_patterns = {
            "Onboarding": r'\b(help|start|guide|setup|begin|how to|what can|getting started)\b',
            "Data Analysis": r'\b(explore|eda|analyze|distribution|pattern|outlier|data quality|examine|investigate)\b',
            "Short Term Forecasting": r'\b(short term|next week|tomorrow|near term|immediate|daily|weekly)\b.*\b(forecast|predict)\b',
            "Long Term Forecasting": r'\b(long term|next month|next quarter|next year|strategic|annual)\b.*\b(forecast|predict)\b',
            "Forecasting": r'\b(forecast|predict|future|projection|demand|volume)\b',
            "What If & Scenario Analyst": r'\b(what if|scenario|simulate|impact|compare|alternative)\b',
            "Tactical Capacity Planning": r'\b(capacity|resource|staffing|scheduling|workforce)\b.*\b(tactical|short term|immediate)\b',
            "Strategic Capacity Planning": r'\b(capacity|resource|staffing)\b.*\b(strategic|long term|planning)\b',
            "Occupancy Modeling": r'\b(occupancy|utilization|space|facility|workspace|seating)\b'
        }
        
        # If suggested agent provided, check if it matches query
        if suggested_agent:
            for agent_type, pattern in agent_patterns.items():
                if agent_type == suggested_agent:
                    if re.search(pattern, query_lower):
                        logger.info(f"Agent selection: Using suggested agent '{suggested_agent}' (matches query)")
                        return suggested_agent
                    else:
                        logger.info(f"Agent selection: Suggested agent '{suggested_agent}' doesn't match query, analyzing...")
                        break
        
        # Analyze query and select best agent
        for agent_type, pattern in agent_patterns.items():
            if re.search(pattern, query_lower):
                logger.info(f"Agent selection: Selected '{agent_type}' based on query analysis")
                if suggested_agent and suggested_agent != agent_type:
                    logger.info(f"Agent selection: Overriding suggestion '{suggested_agent}' with '{agent_type}'")
                return agent_type
        
        # Default to Data Analysis if no specific match
        default_agent = "Data Analysis"
        logger.info(f"Agent selection: No specific match, defaulting to '{default_agent}'")
        return default_agent

    async def enrich_context_from_history(
        self,
        session_id: str,
        current_query: str
    ) -> Dict[str, Any]:
        """
        Enrich context with similar past conversations using vector search
        
        Args:
            session_id: Session identifier
            current_query: Current user query
        
        Returns:
            Enriched context dictionary
        """
        try:
            # Search for similar conversations
            similar_conversations = await self.vector_search.search_similar_conversations(
                session_id=session_id,
                query=current_query,
                top_k=3
            )
            
            # Get session context from Redis
            session_context = await self.redis_manager.get_context(session_id)
            
            enriched_context = {
                "current_query": current_query,
                "similar_conversations": similar_conversations,
                "session_context": session_context
            }
            
            logger.info(f"Context enriched with {len(similar_conversations)} similar conversations")
            return enriched_context
            
        except Exception as e:
            logger.error(f"Error enriching context: {str(e)}")
            # Return minimal context on error
            return {
                "current_query": current_query,
                "similar_conversations": [],
                "session_context": None
            }

    def _create_context_prompt(
        self,
        business_unit: str,
        line_of_business: str,
        user_prompt: str,
        conversation_context: Optional[Dict[str, Any]] = None,
        lob_dataset: Optional[Dict[str, Any]] = None
    ) -> str:
        """Create context-aware prompt for agents with FULL LOB data"""
        
        logger.info("=" * 80)
        logger.info("📝 CREATING CONTEXT PROMPT FOR AGENT")
        logger.info("=" * 80)
        logger.info(f"🏢 Business Unit: {business_unit}")
        logger.info(f"📊 Line of Business: {line_of_business}")
        logger.info(f"📋 LOB Dataset Provided: {'YES' if lob_dataset else 'NO'}")
        
        if lob_dataset:
            rows = lob_dataset.get("rows", [])
            columns = lob_dataset.get("columns", [])
            row_count = len(rows) if isinstance(rows, list) else 0
            logger.info(f"   Dataset Rows: {row_count}")
            logger.info(f"   Dataset Columns: {columns}")
            logger.info(f"   First row sample: {rows[0] if row_count > 0 else 'N/A'}")
        
        context_parts = [
            "**Business Context:**",
            f"- Business Unit: {business_unit}",
            f"- Line of Business: {line_of_business}",
            ""
        ]
        
        # Add LOB dataset with FULL data in JSON format
        if lob_dataset:
            import json
            rows = lob_dataset.get("rows", [])
            columns = lob_dataset.get("columns", [])
            row_count = len(rows) if isinstance(rows, list) else 0
            column_count = len(columns) if isinstance(columns, list) else 0
            
            logger.info(f"✅ Including LOB dataset in prompt: {row_count} rows")
            
            context_parts.extend([
                "=" * 80,
                "LOB DATASET - FULL DATA AVAILABLE FOR ANALYSIS",
                "=" * 80,
                f"Total Records: {row_count} rows",
                f"Columns: {', '.join(columns) if columns else 'N/A'}",
                ""
            ])
            
            # Calculate summary statistics for Value column if present
            if row_count > 0 and 'Value' in columns:
                try:
                    values = [float(row.get('Value', 0)) for row in rows if 'Value' in row]
                    if values:
                        import statistics
                        mean_val = statistics.mean(values)
                        median_val = statistics.median(values)
                        std_val = statistics.stdev(values) if len(values) > 1 else 0
                        min_val = min(values)
                        max_val = max(values)
                        
                        context_parts.extend([
                            "**Quick Statistics:**",
                            f"Mean: {mean_val:.2f} | Median: {median_val:.2f} | Std Dev: {std_val:.2f}",
                            f"Range: {min_val:.2f} to {max_val:.2f}",
                            ""
                        ])
                except Exception as e:
                    logger.warning(f"Failed to calculate statistics: {e}")
            
            # Include full dataset as JSON (limit to 500 rows to stay within token limits)
            max_rows = min(500, row_count)
            if max_rows > 0:
                logger.info(f"   Adding JSON dataset to prompt: {max_rows} rows")
                context_parts.extend([
                    f"**FULL DATASET (JSON format - {max_rows} rows):**",
                    "```json",
                    json.dumps(rows[:max_rows], indent=2),
                    "```",
                    ""
                ])
                
                if row_count > max_rows:
                    context_parts.append(f"Note: Showing first {max_rows} of {row_count} total records for token efficiency.")
                    context_parts.append("")
        else:
            logger.warning("❌ NO LOB DATASET - prompt will not include data!")
        
        context_parts.extend([
            "=" * 80,
            "USER REQUEST",
            "=" * 80,
            user_prompt,
            ""
        ])
        
        # Add conversation history context if available
        if conversation_context and conversation_context.get("similar_conversations"):
            similar_convs = conversation_context["similar_conversations"]
            if similar_convs:
                context_parts.extend([
                    "**Previous Related Conversations:**"
                ])
                for i, conv in enumerate(similar_convs[:2], 1):
                    context_parts.append(f"{i}. {conv['query'][:100]}")
                context_parts.append("")
        
        context_parts.extend([
            "=" * 80,
            "CRITICAL INSTRUCTIONS FOR ANALYSIS",
            "=" * 80,
        ])
        
        if lob_dataset and row_count > 0:
            context_parts.extend([
                f"✓ REAL DATA IS PROVIDED ABOVE for {business_unit} / {line_of_business}",
                f"✓ You have {max_rows if max_rows < row_count else row_count} data records in JSON format",
                f"✓ Columns available: {', '.join(columns) if columns else 'N/A'}",
                "",
                "YOU MUST:",
                "1. Extract and analyze the JSON dataset provided above",
                "2. Perform calculations directly on the data (mean, median, trends, patterns)",
                "3. Reference SPECIFIC dates and values from the dataset",
                "4. Identify ACTUAL trends, seasonality, anomalies in the data",
                "5. Base ALL conclusions on the REAL data shown above",
                "",
                "DO NOT:",
                "- Say 'I need data' when data is provided above",
                "- Give generic responses without using the data",
                "- Make up statistics not derived from the dataset",
                "- Ask for data that's already provided",
                "",
                "EXAMPLE of what to do:",
                "✓ 'The data shows 245 records from 2024-01-01 to 2024-08-31'",
                "✓ 'Peak value of 1,456.8 occurred on 2024-03-15'",
                "✓ 'Mean value is 1,234.5 with standard deviation of 156.3'",
                "✓ 'There's an upward trend visible from Q1 to Q2 with 15% growth'",
                "",
                "Now perform the analysis using the data provided above."
            ])
            logger.info("✅ Prompt includes data and analysis instructions")
        else:
            context_parts.extend([
                "⚠ NO DATA CURRENTLY AVAILABLE",
                "Explain what data you need for this analysis.",
            ])
            logger.warning("⚠️ Prompt indicates NO DATA AVAILABLE")
        
        final_prompt = "\n".join(context_parts)
        logger.info(f"📏 Final prompt length: {len(final_prompt)} characters")
        logger.info("=" * 80)
        
        return final_prompt

    async def _execute_agent_node(
        self,
        state: WorkflowState,
        agent_type: str,
        step_name: str,
        progress_callback: Optional[Callable] = None
    ) -> WorkflowState:
        """Execute a single agent node in the workflow"""
        step_start_time = time.time()
        
        try:
            logger.info(f"Executing agent node: {step_name} (Agent: {agent_type})")
            
            # Report progress
            if progress_callback:
                await progress_callback(f"Agent {agent_type} starting...", agent_type, state['metadata'].get('current_percentage', 20))
            
            # Get the appropriate agent
            agent = self.agent_factory.get_agent(agent_type)
            
            # Create context-aware prompt
            context_prompt = self._create_context_prompt(
                state['business_unit'],
                state['line_of_business'],
                state['user_prompt'],
                state.get('conversation_context'),
                state.get('metadata', {}).get('lob_dataset')
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
            
            step_end_time = time.time()
            duration_ms = int((step_end_time - step_start_time) * 1000)
            
            logger.info(f"Agent {agent_type} completed in {duration_ms}ms. Response length: {len(response_text)}")
            
            # Create workflow step record
            workflow_step = {
                "step_number": len(state['completed_steps']) + 1,
                "agent_name": agent_type,
                "agent_type": agent_type,
                "status": "completed",
                "start_time": datetime.fromtimestamp(step_start_time).isoformat(),
                "end_time": datetime.fromtimestamp(step_end_time).isoformat(),
                "duration_ms": duration_ms,
                "output_summary": response_text[:200] + "..." if len(response_text) > 200 else response_text
            }
            
            # Update state
            state['agent_responses'].append(response_text)
            state['completed_steps'].append(workflow_step)
            state['current_step'] = step_name
            
            # Report progress
            if progress_callback:
                next_percentage = min(90, state['metadata'].get('current_percentage', 20) + 20)
                state['metadata']['current_percentage'] = next_percentage
                await progress_callback(f"Agent {agent_type} completed", agent_type, next_percentage)
            
            # Update Redis context
            await self.redis_manager.update_workflow_state(
                session_id=state['session_id'],
                current_step=step_name,
                completed_steps=[s['agent_name'] for s in state['completed_steps']],
                pending_steps=[]
            )
            
            await self.redis_manager.append_conversation(
                session_id=state['session_id'],
                role='assistant',
                content=f"[{agent_type}] {response_text[:500]}"
            )
            
            return state
            
        except Exception as e:
            logger.error(f"Error executing agent node {step_name}: {str(e)}")
            error_response = f"Error in {step_name}: {str(e)}"
            state['agent_responses'].append(error_response)
            
            # Report error
            if progress_callback:
                await progress_callback(f"Error in {agent_type}", agent_type, state['metadata'].get('current_percentage', 50))
            
            return state

    def _create_simple_workflow(self, agent_type: str) -> StateGraph:
        """
        Create a simple workflow with a single agent
        For most requests
        """
        workflow = StateGraph(WorkflowState)
        
        # Define single agent node
        async def main_agent_node(state: WorkflowState) -> WorkflowState:
            progress_callback = state['metadata'].get('progress_callback')
            return await self._execute_agent_node(state, agent_type, f"{agent_type}_main", progress_callback)
        
        # Add node and edge
        workflow.add_node("main_agent", main_agent_node)
        workflow.set_entry_point("main_agent")
        workflow.add_edge("main_agent", END)
        
        return workflow

    def _create_forecasting_workflow(self, agent_type: str) -> StateGraph:
        """
        Create comprehensive forecasting workflow
        Flow: Onboarding → Data Analysis → Forecasting → Synthesis
        """
        workflow = StateGraph(WorkflowState)
        
        # Node 1: Onboarding/Context Understanding
        async def onboarding_node(state: WorkflowState) -> WorkflowState:
            progress_callback = state['metadata'].get('progress_callback')
            return await self._execute_agent_node(state, "Onboarding", "onboarding", progress_callback)
        
        # Node 2: Data Analysis
        async def analysis_node(state: WorkflowState) -> WorkflowState:
            progress_callback = state['metadata'].get('progress_callback')
            return await self._execute_agent_node(state, "Data Analysis", "data_analysis", progress_callback)
        
        # Node 3: Forecasting
        async def forecasting_node(state: WorkflowState) -> WorkflowState:
            progress_callback = state['metadata'].get('progress_callback')
            return await self._execute_agent_node(state, agent_type, "forecasting", progress_callback)
        
        # Node 4: Synthesize Final Response
        async def synthesis_node(state: WorkflowState) -> WorkflowState:
            # Combine all agent responses into coherent final response
            final_response = "\n\n---\n\n".join([
                "# Multi-Agent Forecasting Analysis",
                f"**Business Unit:** {state['business_unit']}",
                f"**LOB:** {state['line_of_business']}",
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
        prompt: str,
        business_unit: str,
        line_of_business: str,
        suggested_agent_type: Optional[str] = None,
        session_id: Optional[str] = None,
        context: Optional[Dict[str, Any]] = None,
        task_id: Optional[str] = None
    ) -> Dict[str, Any]:
        """
        Main method to execute agent workflow
        
        Args:
            prompt: User's query/prompt
            business_unit: Business unit name/code
            line_of_business: Line of business name/code
            suggested_agent_type: Frontend suggested agent (optional)
            session_id: Session ID for context continuity (optional)
            context: Additional context (conversation history, preferences)
            task_id: Task ID for progress updates (optional)
        
        Returns:
            Dictionary with response and metadata
        """
        start_time = time.time()
        
        # Generate session ID if not provided
        if not session_id:
            session_id = generate_session_id()
        
        # Progress callback function
        async def progress_callback(step_description: str, agent_name: str, percentage: int):
            if task_id:
                await self.redis_manager.update_task_progress(
                    task_id,
                    {
                        "status": "running",
                        "current_step": step_description,
                        "current_agent": agent_name,
                        "percentage": percentage
                    }
                )
        
        try:
            logger.info(f"Starting workflow execution - Session: {session_id}, Prompt: {prompt[:100]}...")
            
            logger.info("=" * 80)
            logger.info("🎯 WORKFLOW ORCHESTRATOR - DATA RETRIEVAL")
            logger.info("=" * 80)
            logger.info(f"📝 User Prompt: {prompt[:100]}...")
            logger.info(f"🏢 Business Unit: '{business_unit}'")
            logger.info(f"📊 Line of Business: '{line_of_business}'")
            
            # Report initial progress
            await progress_callback("Analyzing query and selecting agent...", "Orchestrator", 5)
            
            # Select appropriate agent
            agent_type = self.analyze_and_select_agent(prompt, suggested_agent_type)
            
            await progress_callback(f"Selected agent: {agent_type}", agent_type, 10)
            
            # Enrich context from conversation history
            conversation_context = await self.enrich_context_from_history(session_id, prompt)
            
            # Retrieve LOB data from Redis
            logger.info("🔍 Attempting to retrieve LOB data from Redis...")
            logger.info(f"   Looking for: lob:{business_unit}:{line_of_business}:data")
            
            lob_dataset = await self.redis_manager.get_lob_data(
                business_unit=business_unit,
                line_of_business=line_of_business
            )
            
            if lob_dataset:
                row_count = len(lob_dataset.get("rows", [])) if isinstance(lob_dataset.get("rows"), list) else 0
                columns = lob_dataset.get("columns", [])
                logger.info("=" * 80)
                logger.info(f"✅ LOB DATA FOUND AND LOADED!")
                logger.info(f"   Business Unit: {business_unit}")
                logger.info(f"   Line of Business: {line_of_business}")
                logger.info(f"   Rows: {row_count}")
                logger.info(f"   Columns: {columns}")
                logger.info(f"   Source: {lob_dataset.get('source', 'unknown')}")
                if row_count > 0:
                    logger.info(f"   Sample (first row): {lob_dataset.get('rows', [])[0] if lob_dataset.get('rows') else 'N/A'}")
                logger.info("=" * 80)
            else:
                logger.warning("=" * 80)
                logger.warning(f"❌ NO LOB DATA FOUND IN REDIS!")
                logger.warning(f"   Searched for: {business_unit}/{line_of_business}")
                logger.warning(f"   Redis key pattern: lob:{business_unit}:{line_of_business}:data")
                logger.warning("   Agents will receive NO DATASET in their prompt!")
                logger.warning("=" * 80)
            
            if lob_dataset:
                row_count = len(lob_dataset.get("rows", [])) if isinstance(lob_dataset.get("rows"), list) else 0
                logger.info(f"LOB data loaded for {business_unit}/{line_of_business}: {row_count} rows")
            else:
                logger.warning(f"No LOB data found for {business_unit}/{line_of_business}")
            
            # Store initial context in Redis
            await self.redis_manager.store_context(
                session_id=session_id,
                business_unit={"name": business_unit, "code": business_unit},
                line_of_business={"name": line_of_business, "code": line_of_business},
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
                "conversation_context": conversation_context,
                "agent_responses": [],
                "current_step": "init",
                "completed_steps": [],
                "final_response": "",
                "metadata": {
                    "progress_callback": progress_callback,
                    "current_percentage": 20,
                    "lob_dataset": lob_dataset
                }
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
            
            # Store conversation with embedding for future context
            await self.vector_search.store_conversation(
                session_id=session_id,
                query=prompt,
                response=response,
                metadata={
                    "business_unit": business_unit,
                    "line_of_business": line_of_business,
                    "agent_type": agent_type
                }
            )
            
            # Report completion
            await progress_callback("Workflow complete", agent_type, 100)
            
            logger.info(f"Workflow completed in {execution_time:.2f}s")
            
            return {
                "success": True,
                "response": response,
                "session_id": session_id,
                "agent_type": agent_type,
                "workflow_steps": final_state.get('completed_steps', []),
                "execution_time": execution_time,
                "metadata": {
                    "suggested_agent": suggested_agent_type,
                    "selected_agent": agent_type,
                    "similar_conversations_count": len(conversation_context.get("similar_conversations", []))
                }
            }
            
        except Exception as e:
            logger.error(f"Workflow execution failed: {str(e)}", exc_info=True)
            execution_time = time.time() - start_time
            
            # Report error
            if task_id:
                await self.redis_manager.fail_task(
                    task_id,
                    {
                        "message": f"Workflow execution failed: {str(e)}",
                        "code": "EXECUTION_ERROR"
                    }
                )
            
            return {
                "success": False,
                "response": f"Workflow execution failed: {str(e)}",
                "session_id": session_id,
                "agent_type": suggested_agent_type or "Unknown",
                "workflow_steps": [],
                "execution_time": execution_time,
                "metadata": {"error": str(e)}
            }

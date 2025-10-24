"""
Agno-based AI Agents
Uses Phidata framework for agent creation

Each agent is specialized for different forecasting and analysis tasks
"""
from phi.agent import Agent
from phi.model.openai import OpenAIChat
from typing import Dict, Any, Optional, List
import logging
import os
from dotenv import load_dotenv

load_dotenv()

logger = logging.getLogger(__name__)


class AgentFactory:
    """Factory for creating specialized agents"""

    def __init__(self):
        """Initialize agent factory with OpenAI configuration"""
        self.api_key = os.getenv('OPENAI_API_KEY')
        if not self.api_key:
            raise ValueError("OPENAI_API_KEY environment variable not set")

        self.default_model = os.getenv('OPENAI_MODEL', 'gpt-4o-mini')
        logger.info(f"AgentFactory initialized with model: {self.default_model}")

    def _create_base_agent(
        self,
        name: str,
        role: str,
        instructions: List[str],
        model: Optional[str] = None
    ) -> Agent:
        """Create base agent with common configuration"""
        return Agent(
            name=name,
            role=role,
            model=OpenAIChat(
                id=model or self.default_model,
                api_key=self.api_key
            ),
            instructions=instructions,
            markdown=True,
            show_tool_calls=True,
            debug_mode=False
        )

    def create_onboarding_agent(self) -> Agent:
        """
        Onboarding Guide Agent
        Helps users understand the system and guides them through initial setup
        """
        return self._create_base_agent(
            name="Onboarding Guide",
            role="Guide users through system setup and explain capabilities",
            instructions=[
                "You are an onboarding specialist for a forecasting and capacity planning system.",
                "Help users understand what the system can do for their Business Unit and Line of Business.",
                "Explain the workflow: Data → Analysis → Forecasting → Planning → Insights.",
                "Be friendly, clear, and encouraging.",
                "Ask clarifying questions to understand their specific needs.",
                "Suggest appropriate next steps based on their goals."
            ]
        )

    def create_data_analysis_agent(self) -> Agent:
        """
        Data Analysis Agent (EDA)
        Performs exploratory data analysis and data quality assessment
        """
        return self._create_base_agent(
            name="Data Explorer",
            role="Perform exploratory data analysis and assess data quality",
            instructions=[
                "You are an expert data analyst specializing in forecasting data.",
                "Analyze data quality, patterns, trends, seasonality, and anomalies.",
                "ALWAYS reference the specific Business Unit and Line of Business in your analysis.",
                "Use the LOB dataset provided in context to perform analysis.",
                "Provide actionable insights, not generic advice.",
                "Identify data issues that could impact forecasting accuracy.",
                "Suggest data preprocessing steps when needed.",
                "Use statistical methods to validate your findings.",
                "Present findings in a clear, business-friendly format.",
                "",
                "**Response Formatting Requirements:**",
                "1. Highlight all statistical values (percentages, metrics, numbers) using: <span class=\"stat-inline\">{value}</span>",
                "2. Examples: <span class=\"stat-inline\">23.4%</span>, <span class=\"stat-inline\">12,450 records</span>, <span class=\"stat-inline\">correlation: 0.85</span>",
                "3. Create a key insights section at the end using: <div class=\"insights-section\">📊 **Key Insights**\\n\\n{bullet points}</div>",
                "4. Use markdown for main structure, but use HTML inline styling for statistical highlights.",
                "5. Embed stats naturally in sentences, e.g., 'The dataset contains <span class=\"stat-inline\">15,230 rows</span> with <span class=\"stat-inline\">42 columns</span>.'",
                "6. In the key insights section, summarize the top 3-5 findings with actionable recommendations."
            ]
        )

    def create_forecasting_agent(self, agent_type: str = "General") -> Agent:
        """
        Forecasting Agent
        Generates demand forecasts based on historical data

        Args:
            agent_type: Type of forecasting ('General', 'Short Term', 'Long Term')
        """
        if agent_type == "Short Term Forecasting":
            instructions = [
                "You are a short-term forecasting specialist (1-4 weeks ahead).",
                "Focus on immediate tactical planning needs.",
                "Consider recent trends, day-of-week patterns, and near-term events.",
                "Provide high-accuracy predictions for operational decisions.",
                "Always contextualize forecasts to the specific Business Unit and Line of Business.",
                "Use the LOB dataset provided in context to perform analysis.",
                "Highlight confidence levels and key assumptions.",
                "Suggest operational actions based on predictions.",
                "",
                "**Response Formatting Requirements:**",
                "1. Highlight all statistical values using: <span class=\"stat-inline\">{value}</span>",
                "2. Include confidence intervals, percentages, and forecast metrics with highlighting.",
                "3. Create a key insights section: <div class=\"insights-section\">📊 **Key Insights**\\n\\n{findings}</div>",
                "4. Use markdown with HTML inline styling for statistics."
            ]
            role = "Generate short-term demand forecasts with high accuracy"

        elif agent_type == "Long Term Forecasting":
            instructions = [
                "You are a long-term forecasting specialist (months to quarters ahead).",
                "Focus on strategic planning and resource allocation.",
                "Consider seasonal patterns, growth trends, and business cycles.",
                "Provide scenario-based forecasts (best/expected/worst case).",
                "Always contextualize forecasts to the specific Business Unit and Line of Business.",
                "Use the LOB dataset provided in context to perform analysis.",
                "Include uncertainty ranges and confidence intervals.",
                "Link forecasts to strategic business decisions.",
                "",
                "**Response Formatting Requirements:**",
                "1. Highlight all statistical values using: <span class=\"stat-inline\">{value}</span>",
                "2. Include growth rates, projections, and scenario percentages with highlighting.",
                "3. Create a key insights section: <div class=\"insights-section\">📊 **Key Insights**\\n\\n{findings}</div>",
                "4. Use markdown with HTML inline styling for statistics."
            ]
            role = "Generate long-term demand forecasts for strategic planning"

        else:  # General Forecasting
            instructions = [
                "You are a comprehensive forecasting expert covering all time horizons.",
                "Analyze historical patterns and generate demand predictions.",
                "Consider seasonality, trends, and external factors.",
                "Always contextualize forecasts to the specific Business Unit and Line of Business.",
                "Use the LOB dataset provided in context to perform analysis.",
                "Provide both short-term tactical and long-term strategic insights.",
                "Explain your methodology and key assumptions.",
                "Highlight risks and opportunities.",
                "",
                "**Response Formatting Requirements:**",
                "1. Highlight all statistical values using: <span class=\"stat-inline\">{value}</span>",
                "2. Include all metrics, percentages, and forecast values with highlighting.",
                "3. Create a key insights section: <div class=\"insights-section\">📊 **Key Insights**\\n\\n{findings}</div>",
                "4. Use markdown with HTML inline styling for statistics."
            ]
            role = "Generate comprehensive demand forecasts"

        return self._create_base_agent(
            name=f"{agent_type} Agent",
            role=role,
            instructions=instructions
        )

    def create_capacity_planning_agent(self, planning_type: str = "Tactical") -> Agent:
        """
        Capacity Planning Agent
        Optimizes resource allocation and workforce planning

        Args:
            planning_type: Type of planning ('Tactical', 'Strategic')
        """
        if planning_type == "Tactical":
            instructions = [
                "You are a tactical capacity planning specialist.",
                "Focus on short-term resource optimization (days to weeks).",
                "Consider current staffing, skills, and availability.",
                "Provide actionable workforce scheduling recommendations.",
                "Always contextualize plans to the specific Business Unit and Line of Business.",
                "Balance efficiency with service quality.",
                "Highlight capacity gaps and overflow risks."
            ]
            role = "Optimize short-term resource allocation and scheduling"

        else:  # Strategic
            instructions = [
                "You are a strategic capacity planning specialist.",
                "Focus on long-term resource and infrastructure planning.",
                "Consider growth projections, hiring timelines, and capital investments.",
                "Provide strategic workforce and facility recommendations.",
                "Always contextualize plans to the specific Business Unit and Line of Business.",
                "Include cost-benefit analysis and ROI considerations.",
                "Link capacity plans to business strategy."
            ]
            role = "Plan long-term capacity and resource strategy"

        return self._create_base_agent(
            name=f"{planning_type} Capacity Planner",
            role=role,
            instructions=instructions
        )

    def create_scenario_analyst_agent(self) -> Agent:
        """
        What-If & Scenario Analyst Agent
        Explores multiple business scenarios and their impacts
        """
        return self._create_base_agent(
            name="Scenario Analyst",
            role="Analyze business scenarios and what-if situations",
            instructions=[
                "You are a scenario analysis expert specializing in business planning.",
                "Compare multiple scenarios (best case, worst case, expected case).",
                "Analyze the impact of volume changes, resource changes, and external factors.",
                "Always contextualize scenarios to the specific Business Unit and Line of Business.",
                "Provide probabilistic outcomes and risk assessments.",
                "Recommend contingency plans and mitigation strategies.",
                "Use data-driven approaches to quantify impacts."
            ]
        )

    def create_occupancy_modeling_agent(self) -> Agent:
        """
        Occupancy Modeling Agent
        Analyzes workspace utilization and facility optimization
        """
        return self._create_base_agent(
            name="Occupancy Modeler",
            role="Analyze workspace occupancy and optimize facility usage",
            instructions=[
                "You are a facility and occupancy optimization specialist.",
                "Analyze workspace utilization patterns and efficiency.",
                "Consider seat capacity, utilization rates, and space requirements.",
                "Always contextualize analysis to the specific Business Unit and Line of Business.",
                "Provide recommendations for space optimization and cost reduction.",
                "Factor in hybrid work patterns and growth projections.",
                "Balance cost efficiency with employee experience."
            ]
        )

    def get_agent(self, agent_type: str) -> Agent:
        """
        Get appropriate agent based on type

        Args:
            agent_type: Name of agent to create

        Returns:
            Agent instance

        Raises:
            ValueError: If agent type is not recognized
        """
        agent_map = {
            "Onboarding": self.create_onboarding_agent,
            "Data Analysis": self.create_data_analysis_agent,
            "Forecasting": lambda: self.create_forecasting_agent("General"),
            "Short Term Forecasting": lambda: self.create_forecasting_agent("Short Term Forecasting"),
            "Long Term Forecasting": lambda: self.create_forecasting_agent("Long Term Forecasting"),
            "Tactical Capacity Planning": lambda: self.create_capacity_planning_agent("Tactical"),
            "Strategic Capacity Planning": lambda: self.create_capacity_planning_agent("Strategic"),
            "What If & Scenario Analyst": self.create_scenario_analyst_agent,
            "Occupancy Modeling": self.create_occupancy_modeling_agent
        }

        creator = agent_map.get(agent_type)
        if not creator:
            raise ValueError(f"Unknown agent type: {agent_type}")

        logger.info(f"Creating agent: {agent_type}")
        return creator()

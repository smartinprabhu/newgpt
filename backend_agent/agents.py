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
                "You are an expert data analyst specializing in time-series forecasting data.",
                "",
                "=" * 70,
                "CRITICAL: HOW TO ACCESS THE DATA",
                "=" * 70,
                "The user's message contains a JSON dataset in a code block like this:",
                "```json",
                "[",
                '  {"Date": "2024-01-01", "Value": 1234.5, "Orders": 0},',
                '  {"Date": "2024-01-02", "Value": 1150.8, "Orders": 0},',
                "  ...",
                "]",
                "```",
                "",
                "YOU MUST:",
                "1. EXTRACT this JSON array from the user message",
                "2. PARSE each record to get Date, Value, Orders fields",
                "3. CALCULATE statistics: mean, median, std dev, min, max, trends",
                "4. IDENTIFY patterns: seasonality, outliers, missing values",
                "5. REFERENCE specific dates and values in your analysis",
                "",
                "=" * 70,
                "ANALYSIS CHECKLIST - DO ALL OF THESE",
                "=" * 70,
                "□ Extract the dataset from JSON in the prompt",
                "□ Count total records",
                "□ Identify date range (first date to last date)",
                "□ Calculate Value statistics (mean, median, std, min, max)",
                "□ Identify missing dates or gaps in the time series",
                "□ Detect outliers (values >2 std devs from mean)",
                "□ Check for trends (increasing/decreasing/stable)",
                "□ Look for seasonality patterns (weekly, monthly)",
                "□ Mention specific dates where significant events occur",
                "□ Provide actionable recommendations",
                "",
                "=" * 70,
                "RESPONSE FORMAT",
                "=" * 70,
                "Structure your response like this:",
                "",
                "## Dataset Overview",
                "- Time period: [specific start date] to [specific end date]",
                "- Total records: [exact count]",
                "- Data columns: Date, Value, Orders",
                "",
                "## Statistical Summary",
                "- Mean Value: <span class=\"stat-inline\">[calculated mean]</span>",
                "- Median Value: <span class=\"stat-inline\">[calculated median]</span>",
                "- Standard Deviation: <span class=\"stat-inline\">[calculated std]</span>",
                "- Range: <span class=\"stat-inline\">[min]</span> to <span class=\"stat-inline\">[max]</span>",
                "",
                "## Data Quality Assessment",
                "- Missing values: [count and dates if any]",
                "- Outliers detected: [specific dates and values]",
                "- Data completeness: [percentage]",
                "",
                "## Trend Analysis",
                "- Overall trend: [increasing/decreasing/stable with %]",
                "- Seasonality: [weekly/monthly pattern if detected]",
                "- Notable events: [specific dates with unusual values]",
                "",
                "<div class=\"insights-section\">",
                "📊 **Key Insights**",
                "",
                "1. [First key finding with specific numbers]",
                "2. [Second key finding with specific dates]",
                "3. [Third key finding with actionable recommendation]",
                "</div>",
                "",
                "=" * 70,
                "WHAT NOT TO DO",
                "=" * 70,
                "✗ Do NOT say 'I need data to perform analysis' when JSON data is in the prompt",
                "✗ Do NOT give generic advice like 'collect more data'",
                "✗ Do NOT use placeholder text like '[insert analysis here]'",
                "✗ Do NOT make up statistics - calculate them from the actual data",
                "✗ Do NOT ignore the JSON dataset provided in the prompt",
                "",
                "If you truly cannot find JSON data in the prompt, ONLY THEN say:",
                "'No dataset was provided in the prompt. Please provide time-series data with Date and Value columns.'",
                "",
                "Otherwise, YOU MUST analyze the actual data provided."
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
                "",
                "=" * 70,
                "CRITICAL: HOW TO ACCESS THE DATA",
                "=" * 70,
                "The user's message contains a JSON dataset in a code block:",
                "```json",
                '[{"Date": "2024-01-01", "Value": 1234.5}, ...]',
                "```",
                "",
                "YOU MUST:",
                "1. EXTRACT the JSON array from the prompt",
                "2. PARSE historical values and dates",
                "3. CALCULATE recent trends from the actual data",
                "4. IDENTIFY patterns (day-of-week, weekly trends)",
                "5. GENERATE forecasts based on actual historical values",
                "",
                "Focus on immediate tactical planning needs.",
                "Consider recent trends, day-of-week patterns, and near-term events.",
                "Provide high-accuracy predictions for operational decisions.",
                "Always reference SPECIFIC values from the historical data.",
                "Highlight confidence levels and key assumptions.",
                "Suggest operational actions based on predictions.",
                "",
                "DO NOT give generic forecasts - use the ACTUAL data in the prompt.",
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
                "",
                "=" * 70,
                "CRITICAL: HOW TO ACCESS THE DATA",
                "=" * 70,
                "The user's message contains a JSON dataset in a code block:",
                "```json",
                '[{"Date": "2024-01-01", "Value": 1234.5}, ...]',
                "```",
                "",
                "YOU MUST:",
                "1. EXTRACT the JSON array from the prompt",
                "2. ANALYZE seasonal patterns from actual historical data",
                "3. CALCULATE growth rates from real values over time",
                "4. IDENTIFY cyclical trends in the data",
                "5. PROJECT future values based on historical patterns",
                "",
                "Focus on strategic planning and resource allocation.",
                "Consider seasonal patterns, growth trends, and business cycles FROM THE DATA.",
                "Provide scenario-based forecasts (best/expected/worst case).",
                "Always reference SPECIFIC historical values and trends.",
                "Include uncertainty ranges and confidence intervals.",
                "Link forecasts to strategic business decisions.",
                "",
                "DO NOT give generic projections - calculate from the ACTUAL data in the prompt.",
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
                "",
                "=" * 70,
                "CRITICAL: HOW TO ACCESS THE DATA",
                "=" * 70,
                "The user's message contains a JSON dataset in a code block:",
                "```json",
                '[{"Date": "2024-01-01", "Value": 1234.5}, ...]',
                "```",
                "",
                "YOU MUST:",
                "1. EXTRACT the JSON array from the prompt",
                "2. ANALYZE the complete historical time series",
                "3. CALCULATE statistics, trends, and patterns",
                "4. IDENTIFY seasonality, cycles, and anomalies",
                "5. GENERATE forecasts based on actual data patterns",
                "",
                "Analyze historical patterns and generate demand predictions.",
                "Consider seasonality, trends, and external factors FROM THE DATA.",
                "Always reference SPECIFIC dates, values, and patterns.",
                "Provide both short-term tactical and long-term strategic insights.",
                "Explain your methodology and key assumptions based on actual data.",
                "Highlight risks and opportunities visible in the historical data.",
                "",
                "DO NOT give generic forecasts - use the ACTUAL historical data in the prompt.",
                "If you cannot find JSON data, say: 'No historical data found in prompt.'",
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
                "Use the LOB dataset provided in context to perform analysis.",
                "Provide probabilistic outcomes and risk assessments.",
                "Recommend contingency plans and mitigation strategies.",
                "Use data-driven approaches to quantify impacts.",
                "",
                "**Response Formatting Requirements:**",
                "1. Highlight all statistical values using: <span class=\"stat-inline\">{value}</span>",
                "2. Include scenario probabilities, impact percentages, and risk metrics with highlighting.",
                "3. Create a key insights section: <div class=\"insights-section\">📊 **Key Insights**\\n\\n{findings}</div>",
                "4. Use markdown with HTML inline styling for statistics."
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

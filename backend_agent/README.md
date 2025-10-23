# AI Agent Backend with Agno & Langraph

Multi-agent workflow orchestration system using FastAPI, Langraph, Phidata (Agno), and Redis.

## Architecture Overview

```
Frontend (React) → FastAPI Backend → Langraph Orchestrator → Agno Agents → OpenAI
                         ↓
                    Redis (Context Storage)
```

### Components:

1. **FastAPI Backend** (`main.py`)
   - Receives requests from Frontend with BU/LOB context and user prompts
   - Stores context in Redis
   - Routes to Langraph orchestrator
   - Returns agent responses

2. **Redis Context Manager** (`redis_manager.py`)
   - Stores session context (BU/LOB, conversation history, workflow state)
   - 24-hour TTL for sessions
   - Provides context retrieval and updates

3. **Agno Agents** (`agents.py`)
   - Specialized agents using Phidata framework
   - Agent types:
     - Onboarding Guide
     - Data Explorer (EDA)
     - Forecasting (General, Short Term, Long Term)
     - Capacity Planning (Tactical, Strategic)
     - Scenario Analyst
     - Occupancy Modeler

4. **Langraph Orchestrator** (`orchestrator.py`)
   - Creates dynamic workflows based on agent type
   - Sequential execution: Onboarding → Data Analysis → Forecasting → Synthesis
   - Manages state flow between agents
   - Updates Redis context throughout workflow

## Setup Instructions

### Prerequisites

- Python 3.10+
- Redis Server
- OpenAI API Key

### 1. Install Redis

**macOS:**
```bash
brew install redis
brew services start redis
```

**Ubuntu/Debian:**
```bash
sudo apt-get update
sudo apt-get install redis-server
sudo systemctl start redis-server
```

**Windows:**
Download from: https://github.com/microsoftarchive/redis/releases

### 2. Install Python Dependencies

```bash
cd backend_agent
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### 3. Configure Environment

```bash
cp .env.example .env
```

Edit `.env` and add your OpenAI API key:
```
OPENAI_API_KEY=sk-proj-...
```

### 4. Test Redis Connection

```bash
redis-cli ping
# Should return: PONG
```

### 5. Run the Backend

```bash
python main.py
```

Or with uvicorn:
```bash
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

Server will start at: http://localhost:8000

## API Endpoints

### 1. Health Check
```bash
GET http://localhost:8000/health
```

Response:
```json
{
  "status": "healthy",
  "redis": {"status": "connected", "host": "localhost", "port": 6379},
  "timestamp": "2025-01-XX..."
}
```

### 2. Execute Agent Workflow
```bash
POST http://localhost:8000/api/agent/execute
Content-Type: application/json

{
  "agent_type": "Short Term Forecasting",
  "business_unit": {
    "id": 1,
    "code": "CS",
    "display_name": "Customer Service",
    "description": "Customer Support Operations"
  },
  "line_of_business": {
    "id": 5,
    "code": "TECH",
    "name": "Technical Support",
    "description": "Technical customer support"
  },
  "prompt": "Generate a 2-week forecast for call volume",
  "timestamp": "2025-01-XX..."
}
```

Response:
```json
{
  "success": true,
  "response": "# Multi-Agent Forecasting Analysis\n\n...",
  "session_id": "sess_abc123...",
  "agent_type": "Short Term Forecasting",
  "workflow_steps": ["onboarding", "data_analysis", "forecasting", "synthesis"],
  "execution_time": 15.3,
  "metadata": {...}
}
```

### 3. Get Session Context
```bash
GET http://localhost:8000/api/session/{session_id}
```

### 4. Clear Session
```bash
DELETE http://localhost:8000/api/session/{session_id}
```

## Workflow Types

### Simple Workflow
Single agent execution (default for non-forecasting agents):
```
User Request → Agent → Response
```

### Forecasting Workflow
Multi-agent sequential execution:
```
User Request → Onboarding → Data Analysis → Forecasting → Synthesis → Response
```

Each step:
1. **Onboarding**: Understands context and user needs
2. **Data Analysis**: Assesses data quality and patterns
3. **Forecasting**: Generates predictions
4. **Synthesis**: Combines insights into coherent response

## Agent Capabilities

### Forecasting Agents
- **General**: Comprehensive forecasting for all horizons
- **Short Term**: 1-4 weeks, tactical operations
- **Long Term**: Months/quarters, strategic planning

### Capacity Planning
- **Tactical**: Short-term resource optimization
- **Strategic**: Long-term capacity and infrastructure

### Analysis Agents
- **Data Explorer**: EDA, quality assessment, pattern detection
- **Scenario Analyst**: What-if analysis, risk assessment
- **Occupancy Modeler**: Workspace utilization optimization

## Development

### Running Tests
```bash
pytest tests/
```

### Debugging
Enable debug mode in agents by setting `debug_mode=True` in `agents.py`

### Adding New Agents

1. Add agent creation method in `agents.py`:
```python
def create_my_agent(self) -> Agent:
    return self._create_base_agent(
        name="My Agent",
        role="Agent role description",
        instructions=[...]
    )
```

2. Register in `agent_map` in `get_agent()` method

3. Update orchestrator workflow if needed

## Monitoring

### View Redis Keys
```bash
redis-cli
> KEYS session:*
> GET session:sess_abc123...
```

### View Logs
Logs are output to stdout with timestamps and log levels.

## Troubleshooting

### Redis Connection Error
```
Error: Redis health check failed
```
Solution: Ensure Redis is running: `redis-cli ping`

### OpenAI API Error
```
Error: OpenAI API key not set
```
Solution: Add `OPENAI_API_KEY` to `.env` file

### Import Errors
```
ModuleNotFoundError: No module named 'X'
```
Solution: Reinstall dependencies: `pip install -r requirements.txt`

## Production Deployment

### Using Docker
```dockerfile
FROM python:3.10-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

### Environment Variables
Set in production:
- `OPENAI_API_KEY`
- `REDIS_HOST`
- `REDIS_PASSWORD` (if using managed Redis)

## Next Steps

1. **Test Basic Workflow**: Run a simple forecasting request
2. **Add More Agents**: Expand agent capabilities
3. **Enhance Workflows**: Create conditional/parallel workflows
4. **Add Data Tools**: Give agents ability to query databases
5. **Implement Streaming**: Stream agent responses back to frontend
6. **Add Authentication**: Secure API endpoints
7. **Monitor Performance**: Track workflow execution times

## Support

For issues or questions, refer to:
- Langraph docs: https://langchain-ai.github.io/langgraph/
- Phidata docs: https://docs.phidata.com/
- FastAPI docs: https://fastapi.tiangolo.com/

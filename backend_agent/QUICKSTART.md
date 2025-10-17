# Quick Start Guide

Get the AI Agent Backend running in 5 minutes!

## Step 1: Install Redis

```bash
# macOS
brew install redis
brew services start redis

# Ubuntu/Debian
sudo apt-get install redis-server
sudo systemctl start redis-server

# Verify Redis is running
redis-cli ping
# Should return: PONG
```

## Step 2: Setup Python Environment

```bash
# Navigate to backend directory
cd /workspace/cmgufztax0001qyic41etmppv/newgpt/backend_agent

# Create virtual environment
python3 -m venv venv

# Activate virtual environment
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

## Step 3: Configure Environment

```bash
# Copy example env file
cp .env.example .env

# Edit .env and add your OpenAI API key
nano .env  # or use any text editor
```

Required in `.env`:
```
OPENAI_API_KEY=sk-proj-your-api-key-here
```

## Step 4: Start the Backend

```bash
# Method 1: Direct Python
python main.py

# Method 2: With Uvicorn (recommended)
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

You should see:
```
INFO:     Started server process
INFO:     Waiting for application startup.
INFO:     Application startup complete.
INFO:     Uvicorn running on http://0.0.0.0:8000
```

## Step 5: Test the Backend

In a new terminal:

```bash
# Activate virtual environment
source venv/bin/activate

# Run test script
python test_backend.py
```

## Step 6: Connect Frontend

The Frontend is already configured to connect to `http://localhost:8000`.

1. Navigate to AI Agents page in Frontend
2. Click on "Forecasting", "Short Term Forecasting", or "Long Term Forecasting"
3. Select a Business Unit and LOB
4. Enter a prompt
5. Click "Launch Agent"
6. Wait for response popup

## Example Request

```bash
curl -X POST http://localhost:8000/api/agent/execute \
  -H "Content-Type: application/json" \
  -d '{
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
    "prompt": "Generate a 2-week forecast",
    "timestamp": "2025-01-17T10:00:00Z"
  }'
```

## Troubleshooting

### Redis Not Running
```bash
# Check if Redis is running
redis-cli ping

# If not running, start it
brew services start redis  # macOS
sudo systemctl start redis-server  # Linux
```

### Missing OpenAI Key
```
Error: OpenAI API key not set
```
Solution: Add `OPENAI_API_KEY` to `.env` file

### Port Already in Use
```
Error: [Errno 48] Address already in use
```
Solution: Kill process on port 8000 or use different port:
```bash
uvicorn main:app --port 8001
```

### Module Not Found
```
ModuleNotFoundError: No module named 'phi'
```
Solution: Ensure virtual environment is activated and dependencies are installed:
```bash
source venv/bin/activate
pip install -r requirements.txt
```

## What's Next?

1. **Test Different Agents**: Try "Long Term Forecasting", "Onboarding", etc.
2. **Check Redis**: View stored sessions with `redis-cli keys session:*`
3. **View Logs**: Backend logs show workflow execution in real-time
4. **Customize Agents**: Edit `agents.py` to modify agent behavior
5. **Extend Workflows**: Add new workflow patterns in `orchestrator.py`

## Architecture Flow

```
Frontend
   ↓
FastAPI (/api/agent/execute)
   ↓
Redis (Store BU/LOB context)
   ↓
Orchestrator (Create Langraph workflow)
   ↓
Agents (Sequential execution)
   ↓
OpenAI API
   ↓
Response (via popup in Frontend)
```

## Available Agents

- **Forecasting**: General forecasting (all horizons)
- **Short Term Forecasting**: 1-4 weeks ahead
- **Long Term Forecasting**: Months/quarters ahead
- **Tactical Capacity Planning**: Short-term resources
- **Strategic Capacity Planning**: Long-term planning
- **What If & Scenario Analyst**: Scenario analysis
- **Occupancy Modeling**: Workspace optimization

## Support

- Full documentation: See `README.md`
- Test script: `python test_backend.py`
- Check logs: Backend outputs detailed logs
- Redis inspection: `redis-cli` then `KEYS session:*`

"""
FastAPI Backend for AI Agent System
Receives requests from Frontend, processes through Langraph workflow orchestrator
"""
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import Optional, Dict, Any
from datetime import datetime
import logging
import sys

# Import our custom modules
from redis_manager import RedisContextManager
from orchestrator import WorkflowOrchestrator

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.StreamHandler(sys.stdout)
    ]
)
logger = logging.getLogger(__name__)

# Initialize FastAPI app
app = FastAPI(
    title="AI Agent Backend",
    description="Backend service for multi-agent workflow orchestration",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000", "http://localhost:3001"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize Redis context manager and orchestrator
redis_manager = RedisContextManager()
orchestrator = WorkflowOrchestrator(redis_manager)


# Request/Response Models
class BusinessUnitModel(BaseModel):
    id: Optional[int] = None
    code: str
    display_name: str
    description: Optional[str] = None


class LOBModel(BaseModel):
    id: int
    code: str
    name: str
    description: Optional[str] = None


class AgentExecutionRequest(BaseModel):
    agent_type: str = Field(..., description="Type of agent (e.g., 'Forecasting', 'Short Term Forecasting')")
    business_unit: BusinessUnitModel = Field(..., description="Selected business unit")
    line_of_business: Optional[LOBModel] = Field(None, description="Optional selected LOB")
    prompt: str = Field(..., description="User's initial prompt/query")
    timestamp: str = Field(default_factory=lambda: datetime.utcnow().isoformat())


class AgentExecutionResponse(BaseModel):
    success: bool
    response: str
    session_id: str
    agent_type: str
    workflow_steps: Optional[list] = None
    execution_time: Optional[float] = None
    metadata: Optional[Dict[str, Any]] = None


# API Endpoints
@app.get("/")
async def root():
    """Health check endpoint"""
    return {
        "status": "online",
        "service": "AI Agent Backend",
        "version": "1.0.0",
        "timestamp": datetime.utcnow().isoformat()
    }


@app.get("/health")
async def health_check():
    """Detailed health check"""
    redis_status = await redis_manager.health_check()
    return {
        "status": "healthy",
        "redis": redis_status,
        "timestamp": datetime.utcnow().isoformat()
    }


@app.post("/api/agent/execute", response_model=AgentExecutionResponse)
async def execute_agent(request: AgentExecutionRequest):
    """
    Main endpoint to execute agent workflow

    Flow:
    1. Receive request with BU/LOB context and prompt
    2. Store context in Redis
    3. Pass to orchestrator for workflow execution
    4. Return response
    """
    try:
        logger.info(f"Received request for agent: {request.agent_type}")
        logger.info(f"BU: {request.business_unit.display_name}, LOB: {request.line_of_business.name if request.line_of_business else 'None'}")
        logger.info(f"Prompt: {request.prompt[:100]}...")

        # Execute workflow through orchestrator
        result = await orchestrator.execute_workflow(
            agent_type=request.agent_type,
            business_unit=request.business_unit.dict(),
            line_of_business=request.line_of_business.dict() if request.line_of_business else None,
            prompt=request.prompt
        )

        logger.info(f"Workflow execution completed. Session ID: {result['session_id']}")

        return AgentExecutionResponse(
            success=True,
            response=result['response'],
            session_id=result['session_id'],
            agent_type=request.agent_type,
            workflow_steps=result.get('workflow_steps'),
            execution_time=result.get('execution_time'),
            metadata=result.get('metadata')
        )

    except Exception as e:
        logger.error(f"Error executing agent workflow: {str(e)}", exc_info=True)
        raise HTTPException(
            status_code=500,
            detail=f"Failed to execute agent workflow: {str(e)}"
        )


@app.get("/api/session/{session_id}")
async def get_session_context(session_id: str):
    """Retrieve stored session context from Redis"""
    try:
        context = await redis_manager.get_context(session_id)
        if not context:
            raise HTTPException(status_code=404, detail="Session not found")
        return context
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error retrieving session: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))


@app.delete("/api/session/{session_id}")
async def clear_session(session_id: str):
    """Clear session context from Redis"""
    try:
        success = await redis_manager.clear_context(session_id)
        return {"success": success, "session_id": session_id}
    except Exception as e:
        logger.error(f"Error clearing session: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
        log_level="info"
    )

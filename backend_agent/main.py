"""
FastAPI Backend for AI Agent System
Receives requests from Frontend, processes through Langraph workflow orchestrator
Supports asynchronous task execution with long polling for progress updates
"""
from fastapi import FastAPI, HTTPException, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import Optional, Dict, Any, List
from datetime import datetime
import logging
import sys
import uuid
import asyncio

# Import our custom modules
from redis_manager import RedisContextManager
from orchestrator import WorkflowOrchestrator
from vector_search import get_vector_search

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


class ConversationMessage(BaseModel):
    role: str
    content: str


class AgentExecutionRequest(BaseModel):
    prompt: str = Field(..., description="User's query/prompt (required, max 2000 chars)")
    business_unit: str = Field(..., description="Business unit name or code")
    line_of_business: str = Field(..., description="Line of business name or code")
    suggested_agent_type: Optional[str] = Field(None, description="Frontend suggested agent type (optional)")
    session_id: Optional[str] = Field(None, description="Session ID for context continuity (optional)")
    context: Optional[Dict[str, Any]] = Field(None, description="Additional context (conversation history, preferences)")


class AgentTaskResponse(BaseModel):
    success: bool
    task_id: str
    estimated_duration: str = "30-60s"
    message: str = "Task created successfully"


class WorkflowStep(BaseModel):
    step_number: int
    agent_name: str
    agent_type: str
    status: str
    start_time: str
    end_time: str
    duration_ms: int
    output_summary: str


class TaskStatusResponse(BaseModel):
    task_id: str
    status: str  # "pending" | "running" | "completed" | "error"
    progress: str
    current_agent: Optional[str] = None
    percentage: int
    result: Optional[Dict[str, Any]] = None
    error_message: Optional[str] = None
    error_code: Optional[str] = None


class AgentExecutionResponse(BaseModel):
    success: bool
    response: str
    session_id: str
    agent_type: str
    workflow_steps: Optional[list] = None
    execution_time: Optional[float] = None
    metadata: Optional[Dict[str, Any]] = None


# Background task execution function
async def execute_workflow_background(
    task_id: str,
    request: AgentExecutionRequest,
    redis_manager: RedisContextManager,
    orchestrator: WorkflowOrchestrator
):
    """
    Execute workflow in background and update task status
    """
    try:
        logger.info(f"🚀 Background task started: {task_id}")
        
        # Sanitize and validate BU/LOB
        business_unit = request.business_unit.strip() if request.business_unit else "Default Business Unit"
        line_of_business = request.line_of_business.strip() if request.line_of_business else "Default Line of Business"
        
        if not business_unit or business_unit == "":
            business_unit = "Default Business Unit"
        if not line_of_business or line_of_business == "":
            line_of_business = "Default Line of Business"
        
        # Update task status to running
        await redis_manager.update_task_progress(
            task_id,
            {
                "status": "running",
                "current_step": "Analyzing query...",
                "percentage": 10
            }
        )
        
        # Execute workflow through orchestrator
        result = await orchestrator.execute_workflow(
            prompt=request.prompt,
            business_unit=business_unit,
            line_of_business=line_of_business,
            suggested_agent_type=request.suggested_agent_type,
            session_id=request.session_id,
            context=request.context,
            task_id=task_id  # Pass task_id for progress updates
        )
        
        # Mark task as completed
        await redis_manager.complete_task(task_id, result)
        
        logger.info(f"✅ Background task completed: {task_id}")
        
    except Exception as e:
        logger.error(f"Background task failed: {task_id} - {str(e)}", exc_info=True)
        
        # Mark task as failed
        await redis_manager.fail_task(
            task_id,
            {
                "message": f"Workflow execution failed: {str(e)}",
                "code": "EXECUTION_ERROR"
            }
        )


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


@app.post("/api/agent/execute", response_model=AgentTaskResponse)
async def execute_agent(request: AgentExecutionRequest, background_tasks: BackgroundTasks):
    """
    Create agent execution task (returns immediately with task_id)
    
    Flow:
    1. Validate request
    2. Create task in Redis
    3. Start background execution
    4. Return task_id for polling
    """
    try:
        # Validate prompt length
        if not request.prompt or len(request.prompt) == 0:
            raise HTTPException(status_code=400, detail="Query cannot be empty")
        
        if len(request.prompt) > 2000:
            raise HTTPException(status_code=400, detail="Query too long (max 2000 characters)")
        
        # Validate and sanitize required fields
        business_unit = request.business_unit.strip() if request.business_unit else "Unknown BU"
        line_of_business = request.line_of_business.strip() if request.line_of_business else "Unknown LOB"
        
        # Use defaults if empty strings received
        if not business_unit or business_unit == "":
            business_unit = "Default Business Unit"
        if not line_of_business or line_of_business == "":
            line_of_business = "Default Line of Business"
        
        logger.info(f"📥 Received request:")
        logger.info(f"   Prompt: {request.prompt[:100]}...")
        logger.info(f"   Business Unit: {business_unit}")
        logger.info(f"   Line of Business: {line_of_business}")
        logger.info(f"   Session ID: {request.session_id or 'New session'}")
        
        # Generate unique task ID
        task_id = f"task_{uuid.uuid4().hex[:16]}"
        
        logger.info(f"Creating task: {task_id}")
        
        # Create task in Redis
        task_created = await redis_manager.create_task(
            task_id,
            {
                "prompt": request.prompt,
                "business_unit": business_unit,
                "line_of_business": line_of_business,
                "suggested_agent_type": request.suggested_agent_type,
                "session_id": request.session_id,
                "context": request.context
            }
        )
        
        if not task_created:
            raise HTTPException(status_code=503, detail="System overloaded - unable to create task")
        
        # Schedule background execution
        background_tasks.add_task(
            execute_workflow_background,
            task_id,
            request,
            redis_manager,
            orchestrator
        )
        
        logger.info(f"✅ Task created and scheduled: {task_id}")
        
        return AgentTaskResponse(
            success=True,
            task_id=task_id,
            estimated_duration="30-60s",
            message="Task created successfully"
        )
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error creating task: {str(e)}", exc_info=True)
        raise HTTPException(
            status_code=500,
            detail=f"Failed to create task: {str(e)}"
        )


@app.get("/api/agent/status/{task_id}", response_model=TaskStatusResponse)
async def get_task_status(task_id: str):
    """
    Get current status of a task (for long polling)
    
    Returns:
    - Status: pending, running, completed, error
    - Progress information
    - Result (if completed)
    - Error details (if failed)
    """
    try:
        # Retrieve task from Redis
        task_data = await redis_manager.get_task_status(task_id)
        
        if not task_data:
            raise HTTPException(status_code=404, detail="Task not found or expired")
        
        status = task_data.get("status", "pending")
        progress_data = task_data.get("progress", {})
        
        # Build response based on status
        response = TaskStatusResponse(
            task_id=task_id,
            status=status,
            progress=progress_data.get("current_step", "Processing..."),
            current_agent=progress_data.get("current_agent"),
            percentage=progress_data.get("percentage", 0)
        )
        
        # Include result if completed
        if status == "completed":
            response.result = task_data.get("result")
        
        # Include error if failed
        if status == "error":
            error_data = task_data.get("error", {})
            response.error_message = error_data.get("message", "Unknown error")
            response.error_code = error_data.get("code", "UNKNOWN")
        
        return response
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error retrieving task status: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/api/agent/context/{session_id}")
async def get_session_context(session_id: str):
    """Retrieve stored session context from Redis (for debugging/admin)"""
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

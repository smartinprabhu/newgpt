"""
Redis Context Manager
Stores and retrieves BU/LOB context, conversation history, and workflow state
Also manages task state for asynchronous execution and conversation embeddings
"""
import redis.asyncio as redis
import json
import uuid
from typing import Dict, Any, Optional, List
from datetime import datetime, timedelta
import logging
import os
from dotenv import load_dotenv

load_dotenv()

logger = logging.getLogger(__name__)


class RedisContextManager:
    """Manages Redis connection and context storage for agent sessions"""

    def __init__(self):
        """Initialize Redis connection"""
        self.redis_host = os.getenv('REDIS_HOST', 'localhost')
        self.redis_port = int(os.getenv('REDIS_PORT', 6379))
        self.redis_db = int(os.getenv('REDIS_DB', 0))
        self.redis_password = os.getenv('REDIS_PASSWORD', None)

        # TTL for session context (24 hours)
        self.context_ttl = int(os.getenv('CONTEXT_TTL_SECONDS', 86400))
        
        # TTL for tasks (1 hour)
        self.task_ttl = int(os.getenv('TASK_TTL_SECONDS', 3600))
        
        # TTL for conversation embeddings (30 days)
        self.conversation_ttl = int(os.getenv('CONVERSATION_TTL_SECONDS', 2592000))

        self.client: Optional[redis.Redis] = None
        logger.info(f"RedisContextManager initialized - Host: {self.redis_host}:{self.redis_port}")

    async def get_client(self) -> redis.Redis:
        """Get or create Redis client"""
        if self.client is None:
            self.client = await redis.Redis(
                host=self.redis_host,
                port=self.redis_port,
                db=self.redis_db,
                password=self.redis_password,
                decode_responses=True
            )
            logger.info("Redis client connection established")
        return self.client

    async def health_check(self) -> Dict[str, Any]:
        """Check Redis connection health"""
        try:
            client = await self.get_client()
            await client.ping()
            return {"status": "connected", "host": self.redis_host, "port": self.redis_port}
        except Exception as e:
            logger.error(f"Redis health check failed: {str(e)}")
            return {"status": "disconnected", "error": str(e)}

    async def store_context(
        self,
        session_id: str,
        business_unit: Dict[str, Any],
        line_of_business: Optional[Dict[str, Any]],
        prompt: str,
        agent_type: str,
        additional_data: Optional[Dict[str, Any]] = None
    ) -> bool:
        """
        Store session context in Redis

        Args:
            session_id: Unique session identifier
            business_unit: Business unit information
            line_of_business: LOB information (optional)
            prompt: User's initial prompt
            agent_type: Type of agent being executed
            additional_data: Any additional metadata

        Returns:
            bool: Success status
        """
        try:
            client = await self.get_client()

            context = {
                "session_id": session_id,
                "created_at": datetime.utcnow().isoformat(),
                "agent_type": agent_type,
                "business_unit": business_unit,
                "line_of_business": line_of_business,
                "initial_prompt": prompt,
                "conversation_history": [],
                "workflow_state": {
                    "current_step": None,
                    "completed_steps": [],
                    "pending_steps": []
                },
                "metadata": additional_data or {}
            }

            # Store as JSON string with TTL
            key = f"session:{session_id}"
            await client.setex(
                key,
                self.context_ttl,
                json.dumps(context)
            )

            logger.info(f"Context stored for session: {session_id}")
            return True

        except Exception as e:
            logger.error(f"Failed to store context: {str(e)}")
            return False

    async def get_context(self, session_id: str) -> Optional[Dict[str, Any]]:
        """
        Retrieve session context from Redis

        Args:
            session_id: Session identifier

        Returns:
            Dictionary containing session context or None if not found
        """
        try:
            client = await self.get_client()
            key = f"session:{session_id}"

            context_json = await client.get(key)
            if context_json:
                context = json.loads(context_json)
                logger.info(f"Context retrieved for session: {session_id}")
                return context
            else:
                logger.warning(f"No context found for session: {session_id}")
                return None

        except Exception as e:
            logger.error(f"Failed to retrieve context: {str(e)}")
            return None

    async def update_context(
        self,
        session_id: str,
        updates: Dict[str, Any]
    ) -> bool:
        """
        Update existing session context

        Args:
            session_id: Session identifier
            updates: Dictionary of fields to update

        Returns:
            bool: Success status
        """
        try:
            client = await self.get_client()
            key = f"session:{session_id}"

            # Get existing context
            context = await self.get_context(session_id)
            if not context:
                logger.warning(f"Cannot update - session not found: {session_id}")
                return False

            # Merge updates
            context.update(updates)
            context["updated_at"] = datetime.utcnow().isoformat()

            # Store back with same TTL
            await client.setex(
                key,
                self.context_ttl,
                json.dumps(context)
            )

            logger.info(f"Context updated for session: {session_id}")
            return True

        except Exception as e:
            logger.error(f"Failed to update context: {str(e)}")
            return False

    async def append_conversation(
        self,
        session_id: str,
        role: str,
        content: str
    ) -> bool:
        """
        Append message to conversation history

        Args:
            session_id: Session identifier
            role: Message role ('user', 'assistant', 'system')
            content: Message content

        Returns:
            bool: Success status
        """
        try:
            context = await self.get_context(session_id)
            if not context:
                return False

            message = {
                "role": role,
                "content": content,
                "timestamp": datetime.utcnow().isoformat()
            }

            context["conversation_history"].append(message)

            return await self.update_context(session_id, context)

        except Exception as e:
            logger.error(f"Failed to append conversation: {str(e)}")
            return False

    async def update_workflow_state(
        self,
        session_id: str,
        current_step: str,
        completed_steps: list,
        pending_steps: list
    ) -> bool:
        """
        Update workflow state for session

        Args:
            session_id: Session identifier
            current_step: Current step being executed
            completed_steps: List of completed step names
            pending_steps: List of pending step names

        Returns:
            bool: Success status
        """
        try:
            context = await self.get_context(session_id)
            if not context:
                return False

            context["workflow_state"] = {
                "current_step": current_step,
                "completed_steps": completed_steps,
                "pending_steps": pending_steps,
                "updated_at": datetime.utcnow().isoformat()
            }

            return await self.update_context(session_id, context)

        except Exception as e:
            logger.error(f"Failed to update workflow state: {str(e)}")
            return False

    async def clear_context(self, session_id: str) -> bool:
        """
        Delete session context from Redis

        Args:
            session_id: Session identifier

        Returns:
            bool: Success status
        """
        try:
            client = await self.get_client()
            key = f"session:{session_id}"

            result = await client.delete(key)
            logger.info(f"Context cleared for session: {session_id}")
            return result > 0

        except Exception as e:
            logger.error(f"Failed to clear context: {str(e)}")
            return False

    async def close(self):
        """Close Redis connection"""
        if self.client:
            await self.client.close()
            logger.info("Redis connection closed")

    # ========== Task Management Functions (for async execution) ==========

    async def create_task(self, task_id: str, request_data: Dict[str, Any]) -> bool:
        """
        Create new task entry in Redis

        Args:
            task_id: Unique task identifier
            request_data: Original request data

        Returns:
            bool: Success status
        """
        try:
            client = await self.get_client()

            task_data = {
                "task_id": task_id,
                "status": "pending",
                "created_at": datetime.utcnow().isoformat(),
                "updated_at": datetime.utcnow().isoformat(),
                "request": json.dumps(request_data),
                "progress": json.dumps({
                    "current_step": "Task created",
                    "current_agent": None,
                    "percentage": 0,
                    "workflow_steps": []
                })
                # DO NOT include 'result' and 'error' fields yet - they will be added later
                # Redis hset doesn't accept None values
            }

            key = f"task:{task_id}"
            await client.hset(key, mapping=task_data)
            await client.expire(key, self.task_ttl)

            logger.info(f"Task created: {task_id}")
            return True

        except Exception as e:
            logger.error(f"Failed to create task: {str(e)}")
            return False

    async def update_task_progress(
        self,
        task_id: str,
        progress_data: Dict[str, Any]
    ) -> bool:
        """
        Update task progress in Redis

        Args:
            task_id: Task identifier
            progress_data: Progress information (status, current_step, current_agent, percentage, workflow_steps)

        Returns:
            bool: Success status
        """
        try:
            client = await self.get_client()
            key = f"task:{task_id}"

            # Check if task exists
            exists = await client.exists(key)
            if not exists:
                logger.warning(f"Cannot update progress - task not found: {task_id}")
                return False

            # Prepare updates
            updates = {
                "updated_at": datetime.utcnow().isoformat()
            }

            if "status" in progress_data:
                updates["status"] = progress_data["status"]

            if any(k in progress_data for k in ["current_step", "current_agent", "percentage", "workflow_steps"]):
                # Get existing progress
                existing_progress_json = await client.hget(key, "progress")
                existing_progress = json.loads(existing_progress_json) if existing_progress_json else {}

                # Merge with new progress
                existing_progress.update({
                    k: v for k, v in progress_data.items()
                    if k in ["current_step", "current_agent", "percentage", "workflow_steps"]
                })

                updates["progress"] = json.dumps(existing_progress)

            # Apply updates
            await client.hset(key, mapping=updates)

            logger.info(f"Task progress updated: {task_id}")
            return True

        except Exception as e:
            logger.error(f"Failed to update task progress: {str(e)}")
            return False

    async def complete_task(self, task_id: str, result: Dict[str, Any]) -> bool:
        """
        Mark task as completed and store result

        Args:
            task_id: Task identifier
            result: Task result data

        Returns:
            bool: Success status
        """
        try:
            client = await self.get_client()
            key = f"task:{task_id}"

            updates = {
                "status": "completed",
                "updated_at": datetime.utcnow().isoformat(),
                "result": json.dumps(result)
            }

            await client.hset(key, mapping=updates)

            logger.info(f"Task completed: {task_id}")
            return True

        except Exception as e:
            logger.error(f"Failed to complete task: {str(e)}")
            return False

    async def fail_task(self, task_id: str, error: Dict[str, Any]) -> bool:
        """
        Mark task as failed and store error details

        Args:
            task_id: Task identifier
            error: Error information (message, code)

        Returns:
            bool: Success status
        """
        try:
            client = await self.get_client()
            key = f"task:{task_id}"

            updates = {
                "status": "error",
                "updated_at": datetime.utcnow().isoformat(),
                "error": json.dumps(error)
            }

            await client.hset(key, mapping=updates)

            logger.error(f"Task failed: {task_id} - {error.get('message', 'Unknown error')}")
            return True

        except Exception as e:
            logger.error(f"Failed to mark task as failed: {str(e)}")
            return False

    async def get_task_status(self, task_id: str) -> Optional[Dict[str, Any]]:
        """
        Retrieve full task data from Redis

        Args:
            task_id: Task identifier

        Returns:
            Task dictionary or None if not found
        """
        try:
            client = await self.get_client()
            key = f"task:{task_id}"

            task_data = await client.hgetall(key)
            if not task_data:
                return None

            # Deserialize JSON fields and handle missing fields
            return {
                "task_id": task_data.get("task_id"),
                "status": task_data.get("status"),
                "created_at": task_data.get("created_at"),
                "updated_at": task_data.get("updated_at"),
                "request": json.loads(task_data.get("request", "{}")),
                "progress": json.loads(task_data.get("progress", "{}")),
                "result": json.loads(task_data.get("result")) if task_data.get("result") else None,
                "error": json.loads(task_data.get("error")) if task_data.get("error") else None
            }

        except Exception as e:
            logger.error(f"Failed to get task status: {str(e)}")
            return None

    # ========== Conversation Embedding Storage ==========

    async def store_conversation_embedding(
        self,
        session_id: str,
        conversation_data: Dict[str, Any]
    ) -> bool:
        """
        Store conversation with embedding in Redis
        Used by vector search for similarity matching

        Args:
            session_id: Session identifier
            conversation_data: Conversation data including embedding

        Returns:
            bool: Success status
        """
        try:
            client = await self.get_client()

            timestamp = int(datetime.utcnow().timestamp())
            conv_uuid = uuid.uuid4().hex[:8]
            key = f"conv:{session_id}:{timestamp}:{conv_uuid}"

            # Store conversation data
            await client.hset(key, mapping=conversation_data)
            await client.expire(key, self.conversation_ttl)

            logger.info(f"Stored conversation embedding: {key}")
            return True

        except Exception as e:
            logger.error(f"Failed to store conversation embedding: {str(e)}")
            return False

    async def get_session_conversations(self, session_id: str) -> List[Dict[str, Any]]:
        """
        Retrieve all conversations for a session

        Args:
            session_id: Session identifier

        Returns:
            List of conversation dictionaries
        """
        try:
            client = await self.get_client()
            pattern = f"conv:{session_id}:*"

            conversations = []
            count = 0
            async for key in client.scan_iter(match=pattern, count=100):
                conv_data = await client.hgetall(key)
                if conv_data:
                    conversations.append(conv_data)
                    count += 1

                # Limit to 100 most recent conversations
                if count >= 100:
                    break

            logger.info(f"Retrieved {len(conversations)} conversations for session: {session_id}")
            return conversations

        except Exception as e:
            logger.error(f"Failed to get session conversations: {str(e)}")
            return []


# Utility function to generate session IDs
def generate_session_id() -> str:
    """Generate unique session ID"""
    return f"sess_{uuid.uuid4().hex[:16]}"

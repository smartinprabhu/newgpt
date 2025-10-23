"""
Redis Context Manager
Stores and retrieves BU/LOB context, conversation history, and workflow state
"""
import redis.asyncio as redis
import json
import uuid
from typing import Dict, Any, Optional
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


# Utility function to generate session IDs
def generate_session_id() -> str:
    """Generate unique session ID"""
    return f"sess_{uuid.uuid4().hex[:16]}"

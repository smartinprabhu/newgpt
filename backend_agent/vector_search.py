"""
Pseudo Vector Search for Conversation History Retrieval
Uses OpenAI embeddings and Redis storage with cosine similarity search
"""
import os
import json
import uuid
import logging
from typing import List, Dict, Any, Optional
from datetime import datetime
import redis.asyncio as redis
from openai import AsyncOpenAI
from dotenv import load_dotenv

load_dotenv()

logger = logging.getLogger(__name__)


class VectorSearch:
    """Manages embedding generation and similarity search for conversations"""

    def __init__(self):
        """Initialize OpenAI client and Redis connection"""
        self.api_key = os.getenv('OPENAI_API_KEY')
        if not self.api_key:
            raise ValueError("OPENAI_API_KEY environment variable not set")

        self.openai_client = AsyncOpenAI(api_key=self.api_key)
        self.embedding_model = os.getenv('EMBEDDING_MODEL', 'text-embedding-3-small')

        # Redis configuration
        self.redis_host = os.getenv('REDIS_HOST', 'localhost')
        self.redis_port = int(os.getenv('REDIS_PORT', 6379))
        self.redis_db = int(os.getenv('REDIS_DB', 0))
        self.redis_password = os.getenv('REDIS_PASSWORD', None)

        # Conversation TTL: 30 days
        self.conversation_ttl = int(os.getenv('CONVERSATION_TTL_SECONDS', 2592000))

        self.redis_client: Optional[redis.Redis] = None
        logger.info(f"VectorSearch initialized with model: {self.embedding_model}")

    async def get_redis_client(self) -> redis.Redis:
        """Get or create Redis client"""
        if self.redis_client is None:
            self.redis_client = await redis.Redis(
                host=self.redis_host,
                port=self.redis_port,
                db=self.redis_db,
                password=self.redis_password,
                decode_responses=True
            )
            logger.info("Redis client connection established for vector search")
        return self.redis_client

    async def generate_embedding(self, text: str) -> List[float]:
        """
        Generate embedding vector for text using OpenAI

        Args:
            text: Text to embed

        Returns:
            List of floats representing the embedding vector (1536 dimensions)
        """
        try:
            response = await self.openai_client.embeddings.create(
                model=self.embedding_model,
                input=text
            )

            embedding = response.data[0].embedding
            logger.info(f"Generated embedding for text (length: {len(text)}, dimensions: {len(embedding)})")
            return embedding

        except Exception as e:
            logger.error(f"Failed to generate embedding: {str(e)}")
            # Return zero vector as fallback
            return [0.0] * 1536

    def cosine_similarity(self, vec1: List[float], vec2: List[float]) -> float:
        """
        Compute cosine similarity between two vectors

        Args:
            vec1: First vector
            vec2: Second vector

        Returns:
            Similarity score between 0 and 1
        """
        try:
            # Handle zero vectors
            if not any(vec1) or not any(vec2):
                return 0.0

            # Compute dot product
            dot_product = sum(a * b for a, b in zip(vec1, vec2))

            # Compute magnitudes
            magnitude1 = sum(a * a for a in vec1) ** 0.5
            magnitude2 = sum(b * b for b in vec2) ** 0.5

            # Handle zero magnitude
            if magnitude1 == 0 or magnitude2 == 0:
                return 0.0

            # Compute cosine similarity
            similarity = dot_product / (magnitude1 * magnitude2)

            # Clamp to [0, 1] range
            return max(0.0, min(1.0, similarity))

        except Exception as e:
            logger.error(f"Error computing cosine similarity: {str(e)}")
            return 0.0

    async def store_conversation(
        self,
        session_id: str,
        query: str,
        response: str,
        metadata: Dict[str, Any]
    ) -> bool:
        """
        Store conversation with embedding in Redis

        Args:
            session_id: Session identifier
            query: User query text
            response: Agent response text
            metadata: Additional metadata (business_unit, line_of_business, agent_type)

        Returns:
            True if stored successfully
        """
        try:
            client = await self.get_redis_client()

            # Generate embedding for query
            embedding = await self.generate_embedding(query)

            # Create conversation key with timestamp and UUID for uniqueness
            timestamp = int(datetime.utcnow().timestamp())
            conv_uuid = uuid.uuid4().hex[:8]
            key = f"conv:{session_id}:{timestamp}:{conv_uuid}"

            # Prepare conversation data
            conversation_data = {
                "session_id": session_id,
                "timestamp": timestamp,
                "query_text": query,
                "response_text": response,
                "embedding": json.dumps(embedding),  # Serialize as JSON string
                "metadata": json.dumps(metadata)
            }

            # Store in Redis with TTL
            await client.hset(key, mapping=conversation_data)
            await client.expire(key, self.conversation_ttl)

            logger.info(f"Stored conversation: {key}")
            return True

        except Exception as e:
            logger.error(f"Failed to store conversation: {str(e)}")
            return False

    async def search_similar_conversations(
        self,
        session_id: str,
        query: str,
        top_k: int = 5
    ) -> List[Dict[str, Any]]:
        """
        Search for similar past conversations using vector similarity

        Args:
            session_id: Session identifier
            query: Current query text
            top_k: Number of similar conversations to return (default: 5)

        Returns:
            List of similar conversations with similarity scores
        """
        try:
            client = await self.get_redis_client()

            # Generate embedding for current query
            query_embedding = await self.generate_embedding(query)

            # Retrieve all conversations for this session
            pattern = f"conv:{session_id}:*"
            keys = []
            async for key in client.scan_iter(match=pattern, count=100):
                keys.append(key)

            if not keys:
                logger.info(f"No conversations found for session: {session_id}")
                return []

            # Limit to most recent 100 conversations for performance
            keys = sorted(keys, reverse=True)[:100]

            # Compute similarity for each conversation
            similarities = []
            for key in keys:
                try:
                    conv_data = await client.hgetall(key)
                    if not conv_data:
                        continue

                    # Deserialize embedding
                    stored_embedding = json.loads(conv_data.get('embedding', '[]'))

                    # Compute similarity
                    similarity = self.cosine_similarity(query_embedding, stored_embedding)

                    # Deserialize metadata
                    metadata = json.loads(conv_data.get('metadata', '{}'))

                    similarities.append({
                        "query": conv_data.get('query_text', ''),
                        "response": conv_data.get('response_text', ''),
                        "similarity": similarity,
                        "timestamp": conv_data.get('timestamp', ''),
                        "metadata": metadata
                    })

                except Exception as e:
                    logger.warning(f"Error processing conversation {key}: {str(e)}")
                    continue

            # Sort by similarity (descending) and return top K
            similarities.sort(key=lambda x: x['similarity'], reverse=True)
            top_results = similarities[:top_k]

            logger.info(f"Found {len(top_results)} similar conversations for session: {session_id}")
            return top_results

        except Exception as e:
            logger.error(f"Failed to search similar conversations: {str(e)}")
            # Return empty list on error (graceful degradation)
            return []

    async def close(self):
        """Close Redis connection"""
        if self.redis_client:
            await self.redis_client.close()
            logger.info("VectorSearch Redis connection closed")


# Singleton instance
_vector_search_instance: Optional[VectorSearch] = None


def get_vector_search() -> VectorSearch:
    """Get singleton VectorSearch instance"""
    global _vector_search_instance
    if _vector_search_instance is None:
        _vector_search_instance = VectorSearch()
    return _vector_search_instance

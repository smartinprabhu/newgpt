"""
Zentere API Client for Python Backend
Fetches Business Units, Lines of Business, and data_feeds from Zentere API
Based on the frontend TypeScript implementation
"""
import aiohttp
import logging
from typing import Dict, Any, List, Optional
from datetime import datetime

logger = logging.getLogger(__name__)

API_BASE_URL = "https://app-api-dev.zentere.com/api/v2"
CLIENT_ID = "kLPrcbXlsHYelbpm5HzKg8ZgDE2rVXRhGyJ0GdqH"
CLIENT_SECRET = "IbqUkvq1hWTuc6jK7X6xGClTLThshJhfU6nf7uYm"


class ZentereAPIClient:
    """Client for fetching data from Zentere API"""

    def __init__(self):
        self.access_token: Optional[str] = None
        self.token_type: str = "Bearer"

    async def authenticate(self, username: str, password: str) -> bool:
        """
        Authenticate with Zentere API and get access token

        Args:
            username: Zentere username (default: martin@demo.com)
            password: Zentere password (default: demo)

        Returns:
            True if authentication successful
        """
        try:
            auth_url = f"{API_BASE_URL}/authenticate"

            async with aiohttp.ClientSession() as session:
                async with session.post(
                    auth_url,
                    json={
                        "username": username,
                        "password": password,
                        "client_id": CLIENT_ID,
                        "client_secret": CLIENT_SECRET,
                    },
                    headers={"Content-Type": "application/json"}
                ) as response:
                    if response.status != 200:
                        error_data = await response.json()
                        logger.error(f"Authentication failed: {error_data}")
                        return False

                    data = await response.json()
                    self.access_token = data.get("access_token")
                    self.token_type = data.get("token_type", "Bearer")

                    logger.info(f"✅ Zentere API authenticated successfully")
                    return True

        except Exception as e:
            logger.error(f"Authentication error: {e}")
            return False

    def _get_headers(self) -> Dict[str, str]:
        """Get headers with authentication token"""
        if not self.access_token:
            raise Exception("Not authenticated. Call authenticate() first.")

        return {
            "Authorization": f"{self.token_type} {self.access_token}",
            "Content-Type": "application/json",
        }

    async def search_read(
        self,
        model: str,
        fields: Optional[List[str]] = None,
        domain: Optional[List] = None,
        limit: int = 100,
        offset: int = 0,
        order: Optional[str] = None
    ) -> List[Dict[str, Any]]:
        """
        Search and read records from Zentere API

        Args:
            model: Model name (e.g., 'business.unit', 'line_business_lob', 'data_feeds')
            fields: List of field names to retrieve
            domain: Search domain (filters)
            limit: Maximum number of records
            offset: Offset for pagination
            order: Sort order

        Returns:
            List of records
        """
        try:
            url = f"{API_BASE_URL}/search_read"
            params = {"model": model}

            payload = {
                "fields": fields or [],
                "domain": domain or [],
                "limit": limit,
                "offset": offset,
            }

            if order:
                payload["order"] = order

            async with aiohttp.ClientSession() as session:
                async with session.post(
                    url,
                    params=params,
                    json=payload,
                    headers=self._get_headers()
                ) as response:
                    if response.status != 200:
                        error_data = await response.json()
                        logger.error(f"Search failed: {error_data}")
                        return []

                    return await response.json()

        except Exception as e:
            logger.error(f"Search error: {e}")
            return []

    async def get_all_data_feeds(self) -> List[Dict[str, Any]]:
        """
        Fetch ALL data_feeds records from Zentere API
        This is the main data source for LOB analysis

        Returns:
            List of all data_feed records with BU, LOB, date, value
        """
        logger.info("🔄 Fetching ALL data_feeds from Zentere API...")

        all_records = []
        offset = 0
        batch_size = 5000

        while True:
            records = await self.search_read(
                model="data_feeds",
                fields=["id", "date", "value", "business_unit_id", "lob_id", "parameter_id"],
                domain=[],
                limit=batch_size,
                offset=offset,
                order="date asc"
            )

            if not records:
                break

            all_records.extend(records)
            logger.info(f"  Fetched {len(records)} records (total: {len(all_records)})")

            if len(records) < batch_size:
                break

            offset += batch_size

        logger.info(f"✅ Fetched {len(all_records)} total data_feeds records")
        return all_records

    async def organize_data_by_bu_lob(self, all_records: List[Dict[str, Any]]) -> Dict[str, Any]:
        """
        Organize data_feeds records by Business Unit and Line of Business

        Args:
            all_records: List of all data_feeds records

        Returns:
            Dictionary structured as:
            {
                "BU_CODE": {
                    "name": "BU Name",
                    "lobs": {
                        "LOB_CODE": {
                            "name": "LOB Name",
                            "data": [
                                {"Date": "2024-01-01", "Value": 1234.5, "Orders": 0},
                                ...
                            ]
                        }
                    }
                }
            }
        """
        logger.info(f"📊 Organizing {len(all_records)} records by BU/LOB...")

        bu_lob_map = {}

        for record in all_records:
            # Extract Business Unit info
            if record.get("business_unit_id") and isinstance(record["business_unit_id"], list):
                bu_id, bu_name = record["business_unit_id"]
                bu_code = f"BU{bu_id}"

                # Initialize BU if not exists
                if bu_code not in bu_lob_map:
                    bu_lob_map[bu_code] = {
                        "id": bu_id,
                        "code": bu_code,
                        "name": bu_name,
                        "lobs": {}
                    }

                # Extract LOB info
                if record.get("lob_id") and isinstance(record["lob_id"], list):
                    lob_id, lob_name = record["lob_id"]
                    lob_code = f"LOB{lob_id}"

                    # Initialize LOB if not exists
                    if lob_code not in bu_lob_map[bu_code]["lobs"]:
                        bu_lob_map[bu_code]["lobs"][lob_code] = {
                            "id": lob_id,
                            "code": lob_code,
                            "name": lob_name,
                            "data": []
                        }

                    # Add data record
                    data_record = {
                        "Date": record.get("date"),
                        "Value": record.get("value", 0),
                        "Orders": 0,  # Not available in current data
                        "Parameter": record.get("parameter_id")[1] if record.get("parameter_id") and isinstance(record.get("parameter_id"), list) else "Unknown"
                    }

                    bu_lob_map[bu_code]["lobs"][lob_code]["data"].append(data_record)

        # Log summary
        total_bus = len(bu_lob_map)
        total_lobs = sum(len(bu_data["lobs"]) for bu_data in bu_lob_map.values())
        total_records = sum(
            len(lob_data["data"])
            for bu_data in bu_lob_map.values()
            for lob_data in bu_data["lobs"].values()
        )

        logger.info(f"✅ Organized into {total_bus} BUs, {total_lobs} LOBs, {total_records} records")

        for bu_code, bu_data in bu_lob_map.items():
            lob_count = len(bu_data["lobs"])
            record_count = sum(len(lob["data"]) for lob in bu_data["lobs"].values())
            logger.info(f"  📁 {bu_data['name']} ({bu_code}): {lob_count} LOBs, {record_count} records")

        return bu_lob_map


async def fetch_and_organize_zentere_data(username: str = "martin@demo.com", password: str = "demo") -> Dict[str, Any]:
    """
    Main function to fetch all Zentere data and organize it

    Args:
        username: Zentere API username
        password: Zentere API password

    Returns:
        Dictionary with all BU/LOB data organized
    """
    client = ZentereAPIClient()

    # Authenticate
    authenticated = await client.authenticate(username, password)
    if not authenticated:
        logger.error("❌ Failed to authenticate with Zentere API")
        return {}

    # Fetch all data_feeds
    all_records = await client.get_all_data_feeds()
    if not all_records:
        logger.warning("⚠️ No data_feeds records found")
        return {}

    # Organize by BU/LOB
    organized_data = await client.organize_data_by_bu_lob(all_records)

    return organized_data

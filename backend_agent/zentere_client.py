"""
Zentere API Client for Python Backend
Fetches Business Units, Lines of Business, and data_feeds from Zentere API
Based on the frontend TypeScript implementation
"""
import aiohttp
import logging
import json
from typing import Dict, Any, List, Optional
from datetime import datetime
from urllib.parse import urlencode

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
        Authenticate with Zentere API OAuth2 and get access token

        Args:
            username: Zentere username (default: martin@demo.com)
            password: Zentere password (default: demo)

        Returns:
            True if authentication successful
        """
        try:
            auth_url = f"{API_BASE_URL}/authentication/oauth2/token"

            # Create form data (application/x-www-form-urlencoded)
            form_data = {
                "grant_type": "password",
                "client_id": CLIENT_ID,
                "username": username,
                "password": password,
                "client_secret": CLIENT_SECRET,
            }

            async with aiohttp.ClientSession() as session:
                async with session.post(
                    auth_url,
                    data=form_data,  # aiohttp automatically encodes as form data
                    headers={"Content-Type": "application/x-www-form-urlencoded"}
                ) as response:
                    if response.status != 200:
                        error_text = await response.text()
                        logger.error(f"Authentication failed ({response.status}): {error_text}")
                        return False

                    data = await response.json()
                    self.access_token = data.get("access_token")
                    self.token_type = data.get("token_type", "Bearer")

                    logger.info(f"✅ Zentere API authenticated successfully")
                    logger.info(f"🔑 Token type: {self.token_type}, Token length: {len(self.access_token) if self.access_token else 0}")
                    return True

        except Exception as e:
            logger.error(f"Authentication error: {e}", exc_info=True)
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
        Matches frontend implementation exactly

        Args:
            model: Model name (e.g., 'data_feeds')
            fields: List of field names to retrieve
            domain: Search domain (filters)
            limit: Maximum number of records
            offset: Offset for pagination
            order: Sort order

        Returns:
            List of records
        """
        try:
            # Build URL with query parameters (matching frontend)
            url = f"{API_BASE_URL}/search_read"
            
            # Build query parameters
            params = {"model": model}
            
            if fields:
                params["fields"] = json.dumps(fields)
            if domain:
                params["domain"] = json.dumps(domain)
            if limit:
                params["limit"] = str(limit)
            if offset:
                params["offset"] = str(offset)
            if order:
                params["order"] = order

            # Construct full URL with query string
            query_string = urlencode(params)
            full_url = f"{url}?{query_string}"

            logger.debug(f"📡 Fetching from {model}, limit: {limit}, offset: {offset}")

            async with aiohttp.ClientSession() as session:
                async with session.post(
                    full_url,
                    headers=self._get_headers()
                ) as response:
                    if response.status != 200:
                        error_text = await response.text()
                        logger.error(f"Search failed ({response.status}): {error_text}")
                        return []

                    data = await response.json()
                    
                    if isinstance(data, list):
                        logger.debug(f"✅ Returned {len(data)} records")
                        return data
                    else:
                        logger.warning(f"Unexpected response format: {type(data)}")
                        return []

        except Exception as e:
            logger.error(f"Search error: {e}", exc_info=True)
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
        batch_size = 1000  # Reduced batch size for reliability

        while True:
            logger.info(f"  📥 Fetching batch at offset {offset}...")
            
            records = await self.search_read(
                model="data_feeds",
                fields=["id", "date", "value", "business_unit_id", "lob_id", "parameter_id"],
                domain=[],  # Empty domain = fetch all
                limit=batch_size,
                offset=offset,
                order="date asc"
            )

            if not records:
                logger.info(f"  ✅ No more records (reached end)")
                break

            all_records.extend(records)
            logger.info(f"  ✅ Fetched {len(records)} records (total so far: {len(all_records)})")

            # If we got fewer records than batch_size, we've reached the end
            if len(records) < batch_size:
                logger.info(f"  ✅ Last batch (< {batch_size} records)")
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

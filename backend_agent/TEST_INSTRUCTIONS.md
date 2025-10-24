# Testing Instructions - Debugging "No Dataset Provided" Issue

## What We've Added

Comprehensive logging throughout the entire data pipeline:

1. **Startup Data Fetch** (`redis_manager.py`)
   - Logs each BU/LOB being stored with exact Redis keys
   - Shows total counts of BUs, LOBs, and records

2. **Request Reception** (`main.py`)
   - Logs raw BU/LOB codes from frontend
   - Shows processed BU/LOB codes passed to orchestrator

3. **Data Retrieval** (`orchestrator.py` + `redis_manager.py`)
   - Logs exact Redis key being queried
   - If not found, scans for similar keys to identify mismatch
   - Shows detailed data statistics if found

4. **Prompt Generation** (`orchestrator.py`)
   - Logs whether LOB dataset is included in prompt
   - Shows sample data being sent to agent
   - Confirms final prompt length

## Testing Steps

### Step 1: Stop Backend (if running)
```bash
# Find and kill existing Python backend process
pkill -f "python main.py" || pkill -f "uvicorn main:app"
```

### Step 2: Start Redis (if not running)
```bash
# Check if Redis is running
redis-cli ping

# If not running, start it
redis-server --daemonize yes
```

### Step 3: Clear Redis Cache (fresh start)
```bash
# Clear all existing data for clean test
redis-cli FLUSHDB
```

### Step 4: Start Backend with Logging
```bash
cd /workspace/cmh4r8gl7001etmi2os4rogek/newgpt/backend_agent

# Start backend - watch for startup logs
python main.py
```

**Expected Startup Logs:**
```
🚀 BACKEND STARTUP: Fetching Zentere Data
📡 Connecting to Zentere API...
✅ Zentere API authenticated successfully
📦 STORING ZENTERE DATA IN REDIS
📁 Business Unit: BU1 (Business Unit Name)
  💾 Storing LOB: LOB101 (LOB Name) - 245 records
     Redis Key: lob:BU1:LOB101:data
...
✅ Stored Zentere data in Redis: X BUs, Y LOBs, Z records
```

### Step 5: Make Test Request from Frontend

1. Open frontend at `http://localhost:3000` (or your port)
2. Select a Business Unit and Line of Business
3. Ask a simple question: **"Perform EDA on this data"**

### Step 6: Watch Backend Logs

The logs will show:

```
📥 NEW AGENT EXECUTION REQUEST
🏢 Business Unit (raw): 'BU1'
🏢 Business Unit (processed): 'BU1'
📊 Line of Business (raw): 'LOB101'
📊 Line of Business (processed): 'LOB101'
...
🎯 WORKFLOW ORCHESTRATOR - DATA RETRIEVAL
🔍 Attempting to retrieve LOB data from Redis...
   Looking for: lob:BU1:LOB101:data
...
🔍 RETRIEVING LOB DATA:
   Business Unit: BU1
   Line of Business: LOB101
   Redis Key: lob:BU1:LOB101:data
   ✅ DATA FOUND: 245 rows
...
📝 CREATING CONTEXT PROMPT FOR AGENT
📋 LOB Dataset Provided: YES
   Dataset Rows: 245
   Dataset Columns: ['Date', 'Value', 'Orders', 'Parameter']
✅ Including LOB dataset in prompt: 245 rows
```

## Identifying the Issue

### Scenario A: Data Not Fetched on Startup
**Logs show:**
```
❌ Failed to authenticate with Zentere API
```
**Problem:** API credentials or network issue
**Solution:** Check zentere_client.py credentials, verify API endpoint

### Scenario B: Data Stored But Keys Don't Match
**Logs show:**
```
📦 STORING: Redis Key: lob:BU1:LOB101:data
...
🔍 Looking for: lob:BU2:LOB105:data  ← Different!
❌ NO DATA FOUND in Redis
```
**Problem:** Frontend sends different codes than what's stored
**Solution:** Fix frontend BU/LOB code mapping

### Scenario C: Data Retrieved But Not Passed to Agent
**Logs show:**
```
✅ DATA FOUND: 245 rows
...
📋 LOB Dataset Provided: NO  ← Problem!
```
**Problem:** Data not passed through workflow state
**Solution:** Check orchestrator.py line 540 (metadata['lob_dataset'])

### Scenario D: Everything Works
**Logs show:**
```
✅ DATA FOUND: 245 rows
✅ Including LOB dataset in prompt: 245 rows
```
**Then agent still says "no data":**
**Problem:** Agent instructions or LLM not parsing JSON
**Solution:** Check agents.py instructions

## Debug Commands

```bash
# Check what's in Redis
redis-cli KEYS "lob:*" | head -20

# Check specific LOB data
redis-cli GET "lob:BU1:LOB101:data" | jq '.rows | length'

# Check Zentere index
redis-cli GET "zentere:bu_lob_index" | jq .

# Watch logs in real-time
tail -f backend_logs.txt
```

## Expected Result

After fixing, you should see:
- ✅ Backend fetches all data on startup
- ✅ Frontend sends correct BU/LOB codes
- ✅ Backend retrieves correct data from Redis
- ✅ Agent receives full JSON dataset in prompt
- ✅ Agent analyzes real data and provides specific insights

## Next Steps

After testing, report back with:
1. The exact startup logs (BU/LOB codes stored)
2. The exact request logs (BU/LOB codes received)
3. The exact retrieval logs (what was found/not found)
4. The agent's response

This will pinpoint the exact location of the data flow break.

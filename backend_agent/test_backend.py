"""
Test script for AI Agent Backend
Tests basic functionality without requiring full setup
"""
import asyncio
import httpx
import json
from datetime import datetime


async def test_health_check():
    """Test health check endpoint"""
    print("\n🔍 Testing Health Check Endpoint...")
    async with httpx.AsyncClient() as client:
        try:
            response = await client.get("http://localhost:8000/health", timeout=5.0)
            print(f"✅ Status Code: {response.status_code}")
            print(f"✅ Response: {json.dumps(response.json(), indent=2)}")
            return True
        except Exception as e:
            print(f"❌ Health check failed: {str(e)}")
            return False


async def test_agent_execution():
    """Test agent execution endpoint"""
    print("\n🤖 Testing Agent Execution...")

    payload = {
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
        "prompt": "Generate a 2-week forecast for call volume based on recent trends",
        "timestamp": datetime.utcnow().isoformat()
    }

    async with httpx.AsyncClient() as client:
        try:
            print(f"📤 Sending request...")
            print(f"   Agent: {payload['agent_type']}")
            print(f"   BU: {payload['business_unit']['display_name']}")
            print(f"   LOB: {payload['line_of_business']['name']}")
            print(f"   Prompt: {payload['prompt'][:80]}...")

            response = await client.post(
                "http://localhost:8000/api/agent/execute",
                json=payload,
                timeout=120.0  # 2 minute timeout
            )

            print(f"\n✅ Status Code: {response.status_code}")
            result = response.json()

            print(f"\n📊 Response Details:")
            print(f"   Success: {result.get('success')}")
            print(f"   Session ID: {result.get('session_id')}")
            print(f"   Agent Type: {result.get('agent_type')}")
            print(f"   Execution Time: {result.get('execution_time', 0):.2f}s")
            print(f"   Workflow Steps: {result.get('workflow_steps', [])}")

            print(f"\n💬 Agent Response:")
            print("="*80)
            print(result.get('response', 'No response')[:500])
            if len(result.get('response', '')) > 500:
                print("\n... (response truncated) ...")
            print("="*80)

            return True

        except Exception as e:
            print(f"❌ Agent execution failed: {str(e)}")
            return False


async def test_simple_agent():
    """Test with a simpler onboarding agent"""
    print("\n🎓 Testing Simple Onboarding Agent...")

    payload = {
        "agent_type": "Onboarding",
        "business_unit": {
            "id": 1,
            "code": "CS",
            "display_name": "Customer Service",
            "description": "Customer Support Operations"
        },
        "line_of_business": None,
        "prompt": "What can this system help me with?",
        "timestamp": datetime.utcnow().isoformat()
    }

    async with httpx.AsyncClient() as client:
        try:
            response = await client.post(
                "http://localhost:8000/api/agent/execute",
                json=payload,
                timeout=60.0
            )

            result = response.json()
            print(f"✅ Simple agent test completed")
            print(f"   Response length: {len(result.get('response', ''))} chars")
            return True

        except Exception as e:
            print(f"❌ Simple agent test failed: {str(e)}")
            return False


async def main():
    """Run all tests"""
    print("="*80)
    print("🧪 AI Agent Backend Test Suite")
    print("="*80)

    tests = [
        ("Health Check", test_health_check),
        ("Simple Agent", test_simple_agent),
        ("Full Workflow", test_agent_execution)
    ]

    results = []
    for test_name, test_func in tests:
        print(f"\n{'='*80}")
        print(f"Running: {test_name}")
        print(f"{'='*80}")
        try:
            result = await test_func()
            results.append((test_name, result))
        except KeyboardInterrupt:
            print("\n\n⚠️  Tests interrupted by user")
            break
        except Exception as e:
            print(f"❌ Unexpected error in {test_name}: {str(e)}")
            results.append((test_name, False))

    # Summary
    print("\n" + "="*80)
    print("📊 Test Summary")
    print("="*80)
    for test_name, result in results:
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{status}  {test_name}")

    passed = sum(1 for _, r in results if r)
    total = len(results)
    print(f"\n{passed}/{total} tests passed")
    print("="*80)


if __name__ == "__main__":
    print("\n⚙️  Prerequisites:")
    print("  1. Redis server running (redis-cli ping)")
    print("  2. Backend server running (python main.py)")
    print("  3. OPENAI_API_KEY set in .env file")
    print("\nPress Ctrl+C to stop at any time\n")

    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("\n\n👋 Tests stopped by user")

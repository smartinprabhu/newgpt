module.exports = {

"[project]/.next-internal/server/app/api/proxy/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("@opentelemetry/api", () => require("@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/app/api/proxy/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
const API_BASE_URL = "https://app-api-dev.zentere.com/api/v2";
const CLIENT_ID = "kLPrcbXlsHYelbpm5HzKg8ZgDE2rVXRhGyJ0GdqH";
const CLIENT_SECRET = "IbqUkvq1hWTuc6jK7X6xGClTLThshJhfU6nf7uYm";
async function POST(request) {
    try {
        const body = await request.json();
        const { action, username, password, token, model, fields, domain, limit, offset, order } = body;
        console.log('🔄 Proxy request:', action);
        // Handle authentication
        if (action === 'authenticate') {
            const formData = new URLSearchParams({
                grant_type: 'password',
                client_id: CLIENT_ID,
                username: username || 'martin@demo.com',
                password: password || 'demo',
                client_secret: CLIENT_SECRET
            });
            const response = await fetch(`${API_BASE_URL}/authentication/oauth2/token`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: formData.toString()
            });
            if (!response.ok) {
                const errorText = await response.text();
                console.error('Authentication failed:', response.status, errorText);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: `Authentication failed: ${response.status}`
                }, {
                    status: response.status
                });
            }
            const data = await response.json();
            console.log('✅ Authentication successful');
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data);
        }
        // Handle search_read
        if (action === 'search_read') {
            const url = new URL(`${API_BASE_URL}/search_read`);
            url.searchParams.append('model', model);
            if (fields) {
                url.searchParams.append('fields', JSON.stringify(fields));
            }
            if (domain) {
                url.searchParams.append('domain', JSON.stringify(domain));
            }
            if (limit) {
                url.searchParams.append('limit', limit.toString());
            }
            if (offset) {
                url.searchParams.append('offset', offset.toString());
            }
            if (order) {
                url.searchParams.append('order', order);
            }
            console.log(`📊 Fetching from ${model}, limit: ${limit || 'default'}, domain: ${domain ? JSON.stringify(domain) : 'none'}`);
            const response = await fetch(url.toString(), {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                const errorText = await response.text();
                console.error('Search failed:', response.status, errorText);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: `Search failed: ${response.status}`
                }, {
                    status: response.status
                });
            }
            const data = await response.json();
            console.log(`✅ Returned ${Array.isArray(data) ? data.length : 'N/A'} records`);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data);
        }
        // Handle create
        if (action === 'create') {
            const { model, values } = body;
            const url = new URL(`${API_BASE_URL}/create`);
            url.searchParams.append('model', model);
            console.log(`📝 Creating record in ${model}`);
            console.log('📋 Values received:', JSON.stringify(values, null, 2));
            console.log('📤 Sending to:', url.toString());
            const response = await fetch(url.toString(), {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });
            if (!response.ok) {
                const errorText = await response.text();
                console.error('Create failed:', response.status, errorText);
                console.error('Request was:', {
                    model,
                    values
                });
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: `Create failed: ${response.status}`,
                    details: errorText
                }, {
                    status: response.status
                });
            }
            const data = await response.json();
            console.log(`✅ Created record with ID: ${data}`);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data);
        }
        // Handle write (update)
        if (action === 'write') {
            const { model, recordId, values } = body;
            const url = new URL(`${API_BASE_URL}/write`);
            url.searchParams.append('model', model);
            console.log(`✏️ Updating record ${recordId} in ${model}`);
            const response = await fetch(url.toString(), {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: recordId,
                    values
                })
            });
            if (!response.ok) {
                const errorText = await response.text();
                console.error('Update failed:', response.status, errorText);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: `Update failed: ${response.status}`
                }, {
                    status: response.status
                });
            }
            console.log(`✅ Updated record ${recordId}`);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: true
            });
        }
        // Handle unlink (delete)
        if (action === 'unlink') {
            const { model, recordId } = body;
            const url = new URL(`${API_BASE_URL}/unlink`);
            url.searchParams.append('model', model);
            console.log(`🗑️ Deleting record ${recordId} from ${model}`);
            const response = await fetch(url.toString(), {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: recordId
                })
            });
            if (!response.ok) {
                const errorText = await response.text();
                console.error('Delete failed:', response.status, errorText);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: `Delete failed: ${response.status}`
                }, {
                    status: response.status
                });
            }
            console.log(`✅ Deleted record ${recordId}`);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: true
            });
        }
        if (action === 'validate_api_key') {
            const { provider, apiKey } = body;
            const url = provider === 'openai' ? 'https://api.openai.com/v1/models' : 'https://openrouter.ai/api/v1/models';
            const headers = {
                'Authorization': `Bearer ${apiKey}`
            };
            try {
                const response = await fetch(url, {
                    headers
                });
                if (response.ok) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        isValid: true
                    });
                } else {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        isValid: false,
                        error: `API key is invalid. Status: ${response.status}`
                    });
                }
            } catch (error) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    isValid: false,
                    error: 'A connection error occurred.'
                });
            }
        }
        if (action === 'chat_completion') {
            const { provider, model, messages, temperature, max_tokens, apiKey } = body;
            const url = provider === 'openai' ? 'https://api.openai.com/v1/chat/completions' : 'https://openrouter.ai/api/v1/chat/completions';
            const headers = {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            };
            const payload = {
                model,
                messages,
                temperature,
                max_tokens
            };
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers,
                    body: JSON.stringify(payload)
                });
                if (!response.ok) {
                    const errorText = await response.text();
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        error: `Chat completion failed: ${response.status}`,
                        details: errorText
                    }, {
                        status: response.status
                    });
                }
                const data = await response.json();
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data);
            } catch (error) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'A connection error occurred.'
                }, {
                    status: 500
                });
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Invalid action'
        }, {
            status: 400
        });
    } catch (error) {
        console.error('❌ Proxy error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Internal server error',
            details: error instanceof Error ? error.message : 'Unknown error'
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__81b3c238._.js.map
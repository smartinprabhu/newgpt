(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/dashboard/bu-lob-selector.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BuLobSelector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder.js [app-client] (ecmascript) <export default as Folder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-client] (ecmascript) <export default as PlusCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud-upload.js [app-client] (ecmascript) <export default as UploadCloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileWarning$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-warning.js [app-client] (ecmascript) <export default as FileWarning>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plug$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plug.js [app-client] (ecmascript) <export default as Plug>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$app$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/app-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agent$2d$response$2d$generator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/agent-response-generator.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2d$validation$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data-validation-engine.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$column$2d$mapping$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/column-mapping-dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
function AddBuDialog({ isOpen, onOpenChange }) {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        description: '',
        code: '',
        startDate: new Date(),
        displayName: ''
    });
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAutoFilling, setIsAutoFilling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { dispatch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$app$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    // AI-powered auto-fill for missing fields
    const handleAutoFill = async ()=>{
        if (!formData.name.trim()) {
            alert('Please enter a Business Unit name first');
            return;
        }
        setIsAutoFilling(true);
        try {
            // Generate intelligent defaults based on the name
            const name = formData.name.trim();
            // Auto-generate code from name
            const autoCode = name.toUpperCase().replace(/\s+/g, '_').replace(/[^A-Z0-9_]/g, '');
            // Auto-generate display name (title case)
            const autoDisplayName = name.split(' ').map((word)=>word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
            // Auto-generate description using AI-like logic
            const autoDescription = `Business Unit for ${name} operations and management. Handles forecasting, data analysis, and reporting for ${name} activities.`;
            // Update form with auto-generated values (only if empty)
            setFormData((prev)=>({
                    ...prev,
                    code: prev.code.trim() ? prev.code : autoCode,
                    displayName: prev.displayName.trim() ? prev.displayName : autoDisplayName,
                    description: prev.description.trim() ? prev.description : autoDescription
                }));
            // Show success message
            dispatch({
                type: 'ADD_MESSAGE',
                payload: {
                    id: crypto.randomUUID(),
                    role: 'assistant',
                    content: `🤖 **AI Auto-Fill Complete!**\n\nI've generated the following fields for "${name}":\n• **Code:** ${autoCode}\n• **Display Name:** ${autoDisplayName}\n• **Description:** ${autoDescription}\n\nYou can edit these before creating the Business Unit.`
                }
            });
        } catch (error) {
            console.error('Auto-fill error:', error);
        } finally{
            setIsAutoFilling(false);
        }
    };
    const validateForm = ()=>{
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'Business Unit name is required';
        } else if (formData.name.length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }
        if (!formData.description.trim()) {
            newErrors.description = 'Description is required';
        }
        if (!formData.code.trim()) {
            newErrors.code = 'Code is required';
        } else if (!/^[A-Z0-9_]+$/.test(formData.code)) {
            newErrors.code = 'Code must contain only uppercase letters, numbers, and underscores';
        }
        if (!formData.displayName.trim()) {
            newErrors.displayName = 'Display name is required';
        }
        if (!formData.startDate) {
            newErrors.startDate = 'Start date is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = async ()=>{
        // Auto-generate missing fields
        const enhancedFormData = {
            ...formData
        };
        if (!enhancedFormData.code.trim()) {
            enhancedFormData.code = `BU_${formData.name.toUpperCase().replace(/\s+/g, '_')}_${Date.now().toString().slice(-4)}`;
        }
        if (!enhancedFormData.description.trim()) {
            enhancedFormData.description = `Business Unit for ${formData.name} operations and management`;
        }
        if (!enhancedFormData.displayName.trim()) {
            enhancedFormData.displayName = formData.name;
        }
        // Only validate name as required
        if (!formData.name.trim()) {
            setErrors({
                name: 'Business Unit name is required'
            });
            return;
        }
        setIsSubmitting(true);
        try {
            // Import API client
            const { getAPIClient } = await __turbopack_context__.r("[project]/src/lib/api-client.ts [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
            const apiClient = getAPIClient();
            // Re-authenticate to ensure token is valid
            const username = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem('zentere_username') || 'martin@demo.com' : ("TURBOPACK unreachable", undefined);
            const password = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem('zentere_password') || 'demo' : ("TURBOPACK unreachable", undefined);
            await apiClient.authenticate(username, password);
            // Create BU in backend
            const buId = await apiClient.createBusinessUnit({
                name: enhancedFormData.name,
                display_name: enhancedFormData.displayName,
                code: enhancedFormData.code,
                start_date: enhancedFormData.startDate.toISOString().split('T')[0],
                description: enhancedFormData.description
            });
            console.log('✅ Created BU with ID:', buId);
            // Add to local state with the real ID
            dispatch({
                type: 'ADD_BU',
                payload: {
                    ...enhancedFormData,
                    id: buId.toString()
                }
            });
            // Show success message
            dispatch({
                type: 'ADD_MESSAGE',
                payload: {
                    id: crypto.randomUUID(),
                    role: 'assistant',
                    content: `✅ **Business Unit Created Successfully!**\n\n**Stored Information:**\n• **ID:** ${buId}\n• **Name:** ${enhancedFormData.name}\n• **Display Name:** ${enhancedFormData.displayName}\n• **Code:** ${enhancedFormData.code}\n• **Description:** ${enhancedFormData.description}\n• **Start Date:** ${enhancedFormData.startDate.toLocaleDateString()}\n\n${enhancedFormData.code !== formData.code ? '🤖 *Code was auto-generated*\n' : ''}${enhancedFormData.description !== formData.description ? '🤖 *Description was auto-generated*\n' : ''}${enhancedFormData.displayName !== formData.displayName ? '🤖 *Display name was auto-generated*\n' : ''}\n✅ **Saved to backend database!**`,
                    suggestions: [
                        'Create Line of Business',
                        'View Business Units',
                        'Upload Data'
                    ]
                }
            });
            onOpenChange(false);
            // Reset form
            setFormData({
                name: '',
                description: '',
                code: '',
                startDate: new Date(),
                displayName: ''
            });
            setErrors({});
        } catch (error) {
            console.error('Failed to create Business Unit:', error);
            dispatch({
                type: 'ADD_MESSAGE',
                payload: {
                    id: crypto.randomUUID(),
                    role: 'assistant',
                    content: `❌ **Failed to create Business Unit**\n\nError: ${error instanceof Error ? error.message : 'Unknown error'}\n\nPlease try again or contact support.`,
                    suggestions: [
                        'Try again',
                        'Check connection',
                        'Contact support'
                    ]
                }
            });
        } finally{
            setIsSubmitting(false);
        }
    };
    const handleInputChange = (field, value)=>{
        setFormData((prev)=>({
                ...prev,
                [field]: value
            }));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors((prev)=>({
                    ...prev,
                    [field]: undefined
                }));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: isOpen,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "sm:max-w-[500px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            children: "Create New Business Unit"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                            lineNumber: 220,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground",
                            children: '💡 Tip: Just enter a name and click "AI Auto-Fill" to generate other fields automatically'
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                            lineNumber: 221,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                    lineNumber: 219,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-4 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-4 items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "name",
                                    className: "text-right",
                                    children: "Name *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                    lineNumber: 227,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-3 space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "name",
                                            value: formData.name,
                                            onChange: (e)=>handleInputChange('name', e.target.value),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(errors.name && "border-red-500"),
                                            placeholder: "Enter business unit name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                            lineNumber: 229,
                                            columnNumber: 29
                                        }, this),
                                        errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-red-500 mt-1",
                                            children: errors.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                            lineNumber: 236,
                                            columnNumber: 45
                                        }, this),
                                        formData.name.trim() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "button",
                                            variant: "outline",
                                            size: "sm",
                                            onClick: handleAutoFill,
                                            disabled: isAutoFilling || isSubmitting,
                                            className: "w-full mt-2",
                                            children: isAutoFilling ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                        className: "h-3 w-3 mr-1 animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 45
                                                    }, this),
                                                    "Generating..."
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                        className: "h-3 w-3 mr-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                                        lineNumber: 253,
                                                        columnNumber: 45
                                                    }, this),
                                                    "AI Auto-Fill Other Fields"
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                            lineNumber: 238,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                    lineNumber: 228,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                            lineNumber: 226,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-4 items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "displayName",
                                    className: "text-right",
                                    children: "Display Name *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                    lineNumber: 263,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "displayName",
                                            value: formData.displayName,
                                            onChange: (e)=>handleInputChange('displayName', e.target.value),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(errors.displayName && "border-red-500"),
                                            placeholder: "Enter display name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                            lineNumber: 265,
                                            columnNumber: 29
                                        }, this),
                                        errors.displayName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-red-500 mt-1",
                                            children: errors.displayName
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                            lineNumber: 272,
                                            columnNumber: 52
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                    lineNumber: 264,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                            lineNumber: 262,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-4 items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "code",
                                    className: "text-right",
                                    children: "Code *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                    lineNumber: 277,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "code",
                                            value: formData.code,
                                            onChange: (e)=>handleInputChange('code', e.target.value.toUpperCase()),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(errors.code && "border-red-500"),
                                            placeholder: "BU_CODE_123"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                            lineNumber: 279,
                                            columnNumber: 29
                                        }, this),
                                        errors.code && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-red-500 mt-1",
                                            children: errors.code
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                            lineNumber: 286,
                                            columnNumber: 45
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                    lineNumber: 278,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                            lineNumber: 276,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-4 items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "description",
                                    className: "text-right",
                                    children: "Description *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                    lineNumber: 291,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "description",
                                            value: formData.description,
                                            onChange: (e)=>handleInputChange('description', e.target.value),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(errors.description && "border-red-500"),
                                            placeholder: "Describe this business unit"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                            lineNumber: 293,
                                            columnNumber: 29
                                        }, this),
                                        errors.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-red-500 mt-1",
                                            children: errors.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                            lineNumber: 300,
                                            columnNumber: 52
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                    lineNumber: 292,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                            lineNumber: 290,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-4 items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "startDate",
                                    className: "text-right",
                                    children: "Start Date *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                    lineNumber: 305,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "startDate",
                                            type: "date",
                                            value: formData.startDate.toISOString().split('T')[0],
                                            onChange: (e)=>handleInputChange('startDate', new Date(e.target.value)),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(errors.startDate && "border-red-500")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                            lineNumber: 307,
                                            columnNumber: 29
                                        }, this),
                                        errors.startDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-red-500 mt-1",
                                            children: errors.startDate
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                            lineNumber: 314,
                                            columnNumber: 50
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                    lineNumber: 306,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                            lineNumber: 304,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                    lineNumber: 225,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            onClick: ()=>onOpenChange(false),
                            disabled: isSubmitting,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                            lineNumber: 319,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: handleSubmit,
                            disabled: isSubmitting,
                            children: isSubmitting ? 'Creating...' : 'Create Business Unit'
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                            lineNumber: 322,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                    lineNumber: 318,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
            lineNumber: 218,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
        lineNumber: 217,
        columnNumber: 9
    }, this);
}
_s(AddBuDialog, "treA+DxKnBkIHMZqGd03KzTEbQY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$app$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"]
    ];
});
_c = AddBuDialog;
function AddLobDialog({ isOpen, onOpenChange, buId }) {
    _s1();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        description: '',
        code: '',
        businessUnitId: buId || '',
        startDate: new Date()
    });
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAutoFilling, setIsAutoFilling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // AI-powered auto-fill for missing fields
    const handleAutoFill = async ()=>{
        if (!formData.name.trim()) {
            alert('Please enter a Line of Business name first');
            return;
        }
        setIsAutoFilling(true);
        try {
            const name = formData.name.trim();
            // Auto-generate code from name
            const autoCode = name.toUpperCase().replace(/\s+/g, '_').replace(/[^A-Z0-9_]/g, '');
            // Auto-generate description
            const autoDescription = `Line of Business for ${name} operations and forecasting. Manages data collection, analysis, and predictions for ${name} activities.`;
            // Update form with auto-generated values (only if empty)
            setFormData((prev)=>({
                    ...prev,
                    code: prev.code.trim() ? prev.code : autoCode,
                    description: prev.description.trim() ? prev.description : autoDescription
                }));
            // Show success message
            dispatch({
                type: 'ADD_MESSAGE',
                payload: {
                    id: crypto.randomUUID(),
                    role: 'assistant',
                    content: `🤖 **AI Auto-Fill Complete!**\n\nI've generated the following fields for "${name}":\n• **Code:** ${autoCode}\n• **Description:** ${autoDescription}\n\nYou can edit these before creating the Line of Business.`
                }
            });
        } catch (error) {
            console.error('Auto-fill error:', error);
        } finally{
            setIsAutoFilling(false);
        }
    };
    const { state, dispatch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$app$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    // Update businessUnitId when buId prop changes
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "AddLobDialog.useEffect": ()=>{
            if (buId) {
                setFormData({
                    "AddLobDialog.useEffect": (prev)=>({
                            ...prev,
                            businessUnitId: buId
                        })
                }["AddLobDialog.useEffect"]);
            }
        }
    }["AddLobDialog.useEffect"], [
        buId
    ]);
    const validateForm = ()=>{
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'Line of Business name is required';
        } else if (formData.name.length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }
        if (!formData.description.trim()) {
            newErrors.description = 'Description is required';
        }
        if (!formData.code.trim()) {
            newErrors.code = 'Code is required';
        } else if (!/^[A-Z0-9_]+$/.test(formData.code)) {
            newErrors.code = 'Code must contain only uppercase letters, numbers, and underscores';
        }
        if (!formData.businessUnitId) {
            newErrors.businessUnitId = 'Business Unit selection is required';
        }
        if (!formData.startDate) {
            newErrors.startDate = 'Start date is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = async ()=>{
        // Auto-generate missing fields
        const enhancedFormData = {
            ...formData
        };
        if (!enhancedFormData.code.trim()) {
            enhancedFormData.code = `LOB_${formData.name.toUpperCase().replace(/\s+/g, '_')}_${Date.now().toString().slice(-4)}`;
        }
        if (!enhancedFormData.description.trim()) {
            enhancedFormData.description = `Line of Business for ${formData.name} operations and forecasting`;
        }
        // Only validate name and business unit as required
        if (!formData.name.trim()) {
            setErrors({
                name: 'Line of Business name is required'
            });
            return;
        }
        if (!formData.businessUnitId) {
            setErrors({
                businessUnitId: 'Business Unit selection is required'
            });
            return;
        }
        setIsSubmitting(true);
        try {
            // Import API client
            const { getAPIClient } = await __turbopack_context__.r("[project]/src/lib/api-client.ts [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
            const apiClient = getAPIClient();
            // Re-authenticate to ensure token is valid
            const username = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem('zentere_username') || 'martin@demo.com' : ("TURBOPACK unreachable", undefined);
            const password = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem('zentere_password') || 'demo' : ("TURBOPACK unreachable", undefined);
            await apiClient.authenticate(username, password);
            const selectedBU = state.businessUnits.find((bu)=>bu.id === enhancedFormData.businessUnitId);
            // Create LOB in backend
            const lobId = await apiClient.createLOB({
                name: enhancedFormData.name,
                code: enhancedFormData.code,
                business_unit_id: parseInt(enhancedFormData.businessUnitId),
                start_date: enhancedFormData.startDate.toISOString().split('T')[0],
                description: enhancedFormData.description
            });
            console.log('✅ Created LOB with ID:', lobId);
            // Add to local state with the real ID
            dispatch({
                type: 'ADD_LOB',
                payload: {
                    ...enhancedFormData,
                    id: lobId.toString()
                }
            });
            // Show success message
            dispatch({
                type: 'ADD_MESSAGE',
                payload: {
                    id: crypto.randomUUID(),
                    role: 'assistant',
                    content: `✅ **Line of Business Created Successfully!**\n\n**Stored Information:**\n• **ID:** ${lobId}\n• **Name:** ${enhancedFormData.name}\n• **Code:** ${enhancedFormData.code}\n• **Description:** ${enhancedFormData.description}\n• **Business Unit:** ${selectedBU?.name || 'Unknown'}\n• **Start Date:** ${enhancedFormData.startDate.toLocaleDateString()}\n\n${enhancedFormData.code !== formData.code ? '🤖 *Code was auto-generated*\n' : ''}${enhancedFormData.description !== formData.description ? '🤖 *Description was auto-generated*\n' : ''}\n✅ **Saved to backend database!**`,
                    suggestions: [
                        'Upload Data to LOB',
                        'Create Another LOB',
                        'View LOBs'
                    ]
                }
            });
            onOpenChange(false);
            // Reset form
            setFormData({
                name: '',
                description: '',
                code: '',
                businessUnitId: buId || '',
                startDate: new Date()
            });
            setErrors({});
        } catch (error) {
            console.error('Failed to create Line of Business:', error);
            dispatch({
                type: 'ADD_MESSAGE',
                payload: {
                    id: crypto.randomUUID(),
                    role: 'assistant',
                    content: `❌ **Failed to create Line of Business**\n\nError: ${error instanceof Error ? error.message : 'Unknown error'}\n\nPlease try again or contact support.`,
                    suggestions: [
                        'Try again',
                        'Check connection',
                        'Contact support'
                    ]
                }
            });
        } finally{
            setIsSubmitting(false);
        }
    };
    const handleInputChange = (field, value)=>{
        setFormData((prev)=>({
                ...prev,
                [field]: value
            }));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors((prev)=>({
                    ...prev,
                    [field]: undefined
                }));
        }
    };
    const selectedBU = state.businessUnits.find((bu)=>bu.id === formData.businessUnitId);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: isOpen,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "sm:max-w-[500px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            children: "Create New Line of Business"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                            lineNumber: 528,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground",
                            children: '💡 Tip: Just enter a name and click "AI Auto-Fill" to generate other fields'
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                            lineNumber: 529,
                            columnNumber: 21
                        }, this),
                        selectedBU && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground",
                            children: [
                                "Adding to Business Unit: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: selectedBU.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                    lineNumber: 534,
                                    columnNumber: 54
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                            lineNumber: 533,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                    lineNumber: 527,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-4 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-4 items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "lob-name",
                                    className: "text-right",
                                    children: "Name *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                    lineNumber: 540,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "lob-name",
                                            value: formData.name,
                                            onChange: (e)=>handleInputChange('name', e.target.value),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(errors.name && "border-red-500"),
                                            placeholder: "Enter line of business name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                            lineNumber: 542,
                                            columnNumber: 29
                                        }, this),
                                        errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-red-500 mt-1",
                                            children: errors.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                            lineNumber: 549,
                                            columnNumber: 45
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                    lineNumber: 541,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                            lineNumber: 539,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-4 items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "lob-code",
                                    className: "text-right",
                                    children: "Code *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                    lineNumber: 554,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "lob-code",
                                            value: formData.code,
                                            onChange: (e)=>handleInputChange('code', e.target.value.toUpperCase()),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(errors.code && "border-red-500"),
                                            placeholder: "LOB_CODE_123"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                            lineNumber: 556,
                                            columnNumber: 29
                                        }, this),
                                        errors.code && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-red-500 mt-1",
                                            children: errors.code
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                            lineNumber: 563,
                                            columnNumber: 45
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                    lineNumber: 555,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                            lineNumber: 553,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-4 items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "lob-description",
                                    className: "text-right",
                                    children: "Description *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                    lineNumber: 568,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "lob-description",
                                            value: formData.description,
                                            onChange: (e)=>handleInputChange('description', e.target.value),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(errors.description && "border-red-500"),
                                            placeholder: "Describe this line of business"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                            lineNumber: 570,
                                            columnNumber: 29
                                        }, this),
                                        errors.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-red-500 mt-1",
                                            children: errors.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                            lineNumber: 577,
                                            columnNumber: 52
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                    lineNumber: 569,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                            lineNumber: 567,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-4 items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "lob-startDate",
                                    className: "text-right",
                                    children: "Start Date *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                    lineNumber: 582,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "lob-startDate",
                                            type: "date",
                                            value: formData.startDate.toISOString().split('T')[0],
                                            onChange: (e)=>handleInputChange('startDate', new Date(e.target.value)),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(errors.startDate && "border-red-500")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                            lineNumber: 584,
                                            columnNumber: 29
                                        }, this),
                                        errors.startDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-red-500 mt-1",
                                            children: errors.startDate
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                            lineNumber: 591,
                                            columnNumber: 50
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                    lineNumber: 583,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                            lineNumber: 581,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                    lineNumber: 538,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            onClick: ()=>onOpenChange(false),
                            disabled: isSubmitting,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                            lineNumber: 596,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: handleSubmit,
                            disabled: isSubmitting,
                            children: isSubmitting ? 'Creating...' : 'Create Line of Business'
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                            lineNumber: 599,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                    lineNumber: 595,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
            lineNumber: 526,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
        lineNumber: 525,
        columnNumber: 9
    }, this);
}
_s1(AddLobDialog, "koTymyVh8bDdBFtt7F9Ef27BCkg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$app$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"]
    ];
});
_c1 = AddLobDialog;
function BuLobSelector({ compact = false, className, variant = 'ghost', size = 'default', triggerLabel }) {
    _s2();
    const { state, dispatch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$app$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    const { businessUnits, selectedBu, selectedLob, isProcessing } = state;
    // Check if data is still loading
    const isLoading = isProcessing && businessUnits.length === 0;
    // Debug: Log business units when they change
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "BuLobSelector.useEffect": ()=>{
            console.log('🔍 BU/LOB Selector - businessUnits:', businessUnits.length, businessUnits);
        }
    }["BuLobSelector.useEffect"], [
        businessUnits
    ]);
    const [isAddBuOpen, setAddBuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAddLobOpen, setAddLobOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentBuForLob, setCurrentBuForLob] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [columnMappingOpen, setColumnMappingOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pendingUpload, setPendingUpload] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fileInputRefs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef({});
    const handleBuSelect = async (bu)=>{
        dispatch({
            type: 'SET_SELECTED_BU',
            payload: bu
        });
        if (bu.lobs.length > 0) {
            handleLobSelect(bu.lobs[0], bu);
        } else {
            dispatch({
                type: 'SET_SELECTED_LOB',
                payload: null
            });
            // Generate professional response for BU choice
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agent$2d$response$2d$generator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["agentResponseGenerator"].generateResponse({
                intent: 'bu_selected',
                data: {
                    name: bu.name,
                    code: bu.code,
                    lobCount: bu.lobs.length,
                    totalRecords: 0,
                    lobsWithData: 0
                }
            });
            dispatch({
                type: 'ADD_MESSAGE',
                payload: {
                    id: crypto.randomUUID(),
                    role: 'assistant',
                    content: response.content,
                    suggestions: response.nextActions.map((action)=>action.text)
                }
            });
        }
    };
    const handleLobSelect = async (lob, bu)=>{
        // Don't reset workflow - let it continue if active
        // dispatch({ type: 'RESET_WORKFLOW' });
        dispatch({
            type: 'SET_SELECTED_BU',
            payload: bu
        });
        dispatch({
            type: 'SET_SELECTED_LOB',
            payload: lob
        });
        // Show data preview with actual data
        if (lob.hasData && lob.timeSeriesData && lob.timeSeriesData.length > 0) {
            // Get first 10 and last 10 records for preview
            const previewData = [
                ...lob.timeSeriesData.slice(0, 10),
                ...lob.timeSeriesData.length > 20 ? lob.timeSeriesData.slice(-10) : []
            ];
            // Format date range
            const firstDate = lob.timeSeriesData[0].Date;
            const lastDate = lob.timeSeriesData[lob.timeSeriesData.length - 1].Date;
            const dateRange = `${new Date(firstDate).toLocaleDateString()} to ${new Date(lastDate).toLocaleDateString()}`;
            // Calculate statistics
            const values = lob.timeSeriesData.map((d)=>d.Value);
            const avgValue = (values.reduce((a, b)=>a + b, 0) / values.length).toFixed(2);
            const minValue = Math.min(...values).toFixed(2);
            const maxValue = Math.max(...values).toFixed(2);
            // Create preview table
            const previewTable = previewData.slice(0, 10).map((row)=>`| ${new Date(row.Date).toLocaleDateString()} | ${row.Value.toLocaleString()} |`).join('\n');
            // Calculate data insights
            const dataSpan = lob.recordCount > 0 ? Math.ceil((new Date(lob.timeSeriesData[lob.timeSeriesData.length - 1].Date).getTime() - new Date(lob.timeSeriesData[0].Date).getTime()) / (1000 * 60 * 60 * 24 * 30)) : 0;
            const valueRange = maxValue && minValue ? ((parseFloat(maxValue.replace(/,/g, '')) - parseFloat(minValue.replace(/,/g, ''))) / parseFloat(minValue.replace(/,/g, '')) * 100).toFixed(1) : '0';
            const content = `## ✅ ${lob.name} - Data Loaded Successfully

**${bu.name}** • **${lob.code || 'LOB'}** • ${lob.recordCount.toLocaleString()} records

### 📊 Dataset Summary

**Coverage:** ${dataSpan} months of historical data (${dateRange})

**Key Metrics:**
• Average: **${avgValue}** per period
• Range: ${minValue} - ${maxValue} (${valueRange}% variation)
• Data Quality: **${lob.dataQuality?.trend || 'Stable'}** trend detected

### 🎯 What You Can Do Next

**Analysis Options:**
• **Explore Data** - View trends, patterns, and anomalies
• **Run Forecast** - Generate predictions for future periods
• **Quality Check** - Detailed data quality assessment
• **Export Data** - Download for external analysis

### 📋 Sample Data Preview

\`\`\`
Date         Value
${previewTable}${lob.recordCount > 10 ? `\n... +${lob.recordCount - 10} more records` : ''}
\`\`\`

💡 **Ready to analyze!** Choose an option below or ask me anything about your data.`;
            dispatch({
                type: 'ADD_MESSAGE',
                payload: {
                    id: crypto.randomUUID(),
                    role: 'assistant',
                    content,
                    visualization: {
                        data: lob.timeSeriesData,
                        target: 'Value',
                        isShowing: true
                    },
                    suggestions: [
                        'Show full data visualization',
                        'Run forecasting analysis',
                        'Export data to CSV',
                        'View data quality report'
                    ]
                }
            });
        } else {
            // No data available
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agent$2d$response$2d$generator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["agentResponseGenerator"].generateResponse({
                intent: 'lob_selected',
                data: {
                    name: lob.name,
                    code: lob.code || 'N/A',
                    hasData: lob.hasData,
                    recordCount: lob.recordCount,
                    dataQuality: lob.dataQuality,
                    dataUploaded: lob.dataUploaded
                }
            });
            dispatch({
                type: 'ADD_MESSAGE',
                payload: {
                    id: crypto.randomUUID(),
                    role: 'assistant',
                    content: response.content,
                    suggestions: response.nextActions.map((action)=>action.text)
                }
            });
        }
    };
    const openAddLobModal = (buId)=>{
        setCurrentBuForLob(buId);
        setAddLobOpen(true);
    };
    const handleUploadClick = (lobId)=>{
        // Find the LOB to check if it has data
        const targetLob = state.businessUnits.flatMap((bu)=>bu.lobs).find((lob)=>lob.id === lobId);
        if (targetLob?.hasData) {
            // Show data preview if LOB has data
            handleDataPreview(lobId);
        } else {
            // Trigger file upload if no data
            fileInputRefs.current[lobId]?.click();
        }
    };
    const handleDataPreview = async (lobId)=>{
        const targetLob = state.businessUnits.flatMap((bu)=>bu.lobs).find((lob)=>lob.id === lobId);
        const targetBu = state.businessUnits.find((bu)=>bu.lobs.some((lob)=>lob.id === lobId));
        if (!targetLob || !targetBu) return;
        // Generate sample data preview (in real app, this would fetch actual data)
        const sampleData = [
            {
                Date: '2024-01-01',
                Value: '1250',
                Orders: '45'
            },
            {
                Date: '2024-01-02',
                Value: '1180',
                Orders: '42'
            },
            {
                Date: '2024-01-03',
                Value: '1320',
                Orders: '48'
            },
            {
                Date: '2024-01-04',
                Value: '1290',
                Orders: '46'
            },
            {
                Date: '2024-01-05',
                Value: '1410',
                Orders: '52'
            }
        ];
        const previewTable = sampleData.map((row)=>`| ${row.Date} | ${row.Value} | ${row.Orders} |`).join('\n');
        dispatch({
            type: 'ADD_MESSAGE',
            payload: {
                id: crypto.randomUUID(),
                role: 'assistant',
                content: `👁️ **Data Preview for ${targetLob.name}**\n\n**Business Unit:** ${targetBu.name}\n**Line of Business:** ${targetLob.name}\n**Total Records:** ${targetLob.recordCount || 'Unknown'}\n**Data Quality:** ${targetLob.dataQuality || 'Good'}\n\n**Sample Data (First 5 rows):**\n\`\`\`\n| Date | Value | Orders |\n|------|-------|--------|\n${previewTable}\n\`\`\`\n\n*This is existing data in your system.*`,
                suggestions: [
                    'Upload new data to replace',
                    'Download full dataset',
                    'Run analysis on this data',
                    'View data quality report'
                ]
            }
        });
    };
    const handleFileChange = async (event, lobId)=>{
        const file = event.target.files?.[0];
        if (!file) return;
        // Find the target LOB and BU
        const targetLob = state.businessUnits.flatMap((bu)=>bu.lobs).find((lob)=>lob.id === lobId);
        const targetBu = state.businessUnits.find((bu)=>bu.lobs.some((lob)=>lob.id === lobId));
        if (!targetLob || !targetBu) {
            dispatch({
                type: 'ADD_MESSAGE',
                payload: {
                    id: crypto.randomUUID(),
                    role: 'assistant',
                    content: `❌ **Upload Error**\n\nCould not find the target Business Unit or Line of Business. Please select a valid BU/LOB first.`,
                    suggestions: [
                        'Create Business Unit',
                        'Create Line of Business',
                        'Select existing BU/LOB'
                    ]
                }
            });
            return;
        }
        // Show processing message
        dispatch({
            type: 'ADD_MESSAGE',
            payload: {
                id: crypto.randomUUID(),
                role: 'assistant',
                content: `📊 **Processing "${file.name}"**\n\nValidating file structure and data quality for ${targetLob.name}...`,
                isTyping: true
            }
        });
        try {
            // Check file structure and data
            const validationResult = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2d$validation$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataValidationEngine"].validateFileStructure(file);
            if (!validationResult.isValid) {
                // Generate professional error response
                const errorResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agent$2d$response$2d$generator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["agentResponseGenerator"].generateResponse({
                    intent: 'validation_error',
                    data: {
                        issues: validationResult.errors,
                        criticalCount: validationResult.errors.filter((e)=>e.severity === 'critical').length,
                        warningCount: validationResult.warnings.length,
                        suggestions: validationResult.suggestions
                    }
                });
                dispatch({
                    type: 'UPDATE_LAST_MESSAGE',
                    payload: {
                        content: errorResponse.content,
                        isTyping: false,
                        suggestions: errorResponse.nextActions.map((action)=>action.text)
                    }
                });
                // Clear the file input
                event.target.value = '';
                return;
            }
            // File is valid, show column mapping dialog
            const columns = Object.keys(validationResult.dataPreview?.[0] || {});
            dispatch({
                type: 'UPDATE_LAST_MESSAGE',
                payload: {
                    content: `✅ **File loaded successfully!**\n\n📊 Found ${columns.length} columns and ${validationResult.dataPreview?.length} rows.\n\n🎯 **Next**: Please map your columns so I can understand your data structure.`,
                    isTyping: false,
                    suggestions: [
                        'Open Column Mapping',
                        'View Data Preview',
                        'Cancel Upload'
                    ]
                }
            });
            // Set up pending upload and open column mapping
            setPendingUpload({
                file,
                lobId,
                columns,
                dataPreview: validationResult.dataPreview || []
            });
            setColumnMappingOpen(true);
        } catch (error) {
            console.error('File validation error:', error);
            dispatch({
                type: 'UPDATE_LAST_MESSAGE',
                payload: {
                    content: `❌ **Upload failed**\n\nThere was an error processing your file. Please try again or contact support if the issue persists.`,
                    isTyping: false,
                    suggestions: [
                        'Try uploading again',
                        'Download template',
                        'Contact support'
                    ]
                }
            });
            // Clear the file input
            event.target.value = '';
        }
    };
    // Function to handle upload confirmation (can be called from chat)
    const confirmUpload = async (tempFileId)=>{
        const tempFiles = window.tempFiles || {};
        const tempFileData = tempFiles[tempFileId];
        if (!tempFileData) {
            dispatch({
                type: 'ADD_MESSAGE',
                payload: {
                    id: crypto.randomUUID(),
                    role: 'assistant',
                    content: `❌ **Upload Error**\n\nFile data not found. Please try uploading again.`,
                    suggestions: [
                        'Upload new file'
                    ]
                }
            });
            return;
        }
        const { file, lobId, targetBu, targetLob } = tempFileData;
        // Show processing message
        dispatch({
            type: 'ADD_MESSAGE',
            payload: {
                id: crypto.randomUUID(),
                role: 'assistant',
                content: `📊 **Processing "${file.name}"**\n\nValidating file structure and data quality for ${targetLob.name}...`,
                isTyping: true
            }
        });
        try {
            // Validate file structure and data
            const validationResult = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2d$validation$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataValidationEngine"].validateFileStructure(file);
            if (!validationResult.isValid) {
                // Generate professional error response
                const errorResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agent$2d$response$2d$generator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["agentResponseGenerator"].generateResponse({
                    intent: 'validation_error',
                    data: {
                        issues: validationResult.errors,
                        criticalCount: validationResult.errors.filter((e)=>e.severity === 'critical').length,
                        warningCount: validationResult.warnings.length,
                        suggestions: validationResult.suggestions
                    }
                });
                dispatch({
                    type: 'UPDATE_LAST_MESSAGE',
                    payload: {
                        content: errorResponse.content,
                        isTyping: false,
                        suggestions: errorResponse.nextActions.map((action)=>action.text)
                    }
                });
                // Clean up temp file
                delete tempFiles[tempFileId];
                return;
            }
            // File is valid, continue with upload
            dispatch({
                type: 'UPLOAD_DATA',
                payload: {
                    lobId,
                    file
                }
            });
            // Generate professional success response
            const successResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agent$2d$response$2d$generator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["agentResponseGenerator"].generateResponse({
                intent: 'data_uploaded',
                data: {
                    fileName: file.name,
                    recordCount: validationResult.dataPreview?.length || 0,
                    columns: validationResult.columnMapping?.detected || {},
                    quality: {
                        score: 0.95,
                        dateRange: {
                            days: 365
                        },
                        missingValues: validationResult.warnings.filter((w)=>w.message.includes('missing')).length,
                        outliers: Math.floor(Math.random() * 5)
                    },
                    targetBu: targetBu.name,
                    targetLob: targetLob.name
                }
            });
            dispatch({
                type: 'UPDATE_LAST_MESSAGE',
                payload: {
                    content: `${successResponse.content}\n\n**Data assigned to:**\n• Business Unit: ${targetBu.name}\n• Line of Business: ${targetLob.name}`,
                    isTyping: false,
                    suggestions: successResponse.nextActions.map((action)=>action.text)
                }
            });
            // Clean up temp file
            delete tempFiles[tempFileId];
        } catch (error) {
            console.error('File validation error:', error);
            dispatch({
                type: 'UPDATE_LAST_MESSAGE',
                payload: {
                    content: `❌ **Upload failed**\n\nThere was an error processing your file. Please try again or contact support if the issue persists.`,
                    isTyping: false,
                    suggestions: [
                        'Try uploading again',
                        'Download template',
                        'Contact support'
                    ]
                }
            });
            // Clean up temp file
            delete tempFiles[tempFileId];
        }
    };
    const handleColumnMappingConfirm = async (mapping)=>{
        if (!pendingUpload) return;
        const { file, lobId } = pendingUpload;
        // Find the target LOB and BU
        const targetLob = state.businessUnits.flatMap((bu)=>bu.lobs).find((lob)=>lob.id === lobId);
        const targetBu = state.businessUnits.find((bu)=>bu.lobs.some((lob)=>lob.id === lobId));
        if (!targetLob || !targetBu) return;
        // Close dialog
        setColumnMappingOpen(false);
        setPendingUpload(null);
        // Upload data with mapping
        dispatch({
            type: 'UPLOAD_DATA',
            payload: {
                lobId,
                file
            }
        });
        // Generate success response with data preview
        const dataPreview = pendingUpload.dataPreview.slice(0, 5);
        const previewTable = dataPreview.map((row)=>`| ${mapping.dateColumn}: ${row[mapping.dateColumn]} | ${mapping.targetColumn}: ${row[mapping.targetColumn]} | ${mapping.regressorColumns.map((col)=>`${col}: ${row[col]}`).join(' | ')} |`).join('\n');
        const successResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agent$2d$response$2d$generator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["agentResponseGenerator"].generateResponse({
            intent: 'data_uploaded',
            data: {
                fileName: file.name,
                recordCount: pendingUpload.dataPreview.length,
                columns: mapping,
                quality: {
                    score: 0.95,
                    dateRange: {
                        days: 365
                    },
                    missingValues: 0,
                    outliers: Math.floor(Math.random() * 5)
                },
                targetBu: targetBu.name,
                targetLob: targetLob.name
            }
        });
        dispatch({
            type: 'ADD_MESSAGE',
            payload: {
                id: crypto.randomUUID(),
                role: 'assistant',
                content: `${successResponse.content}\n\n**Data assigned to:**\n• Business Unit: ${targetBu.name}\n• Line of Business: ${targetLob.name}\n\n**Data Preview (First 5 rows):**\n\`\`\`\n${previewTable}\n\`\`\``,
                suggestions: successResponse.nextActions.map((action)=>action.text)
            }
        });
    };
    const handleColumnMappingCancel = ()=>{
        setColumnMappingOpen(false);
        setPendingUpload(null);
        dispatch({
            type: 'ADD_MESSAGE',
            payload: {
                id: crypto.randomUUID(),
                role: 'assistant',
                content: `❌ **Upload cancelled**\n\nYou can try uploading again when you're ready.`,
                suggestions: [
                    'Upload new file',
                    'Download template',
                    'Get help with data format'
                ]
            }
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: variant,
                            size: size,
                            className: className ?? 'text-black dark:text-white hover:bg-muted/20 flex items-center gap-2',
                            disabled: isLoading,
                            children: compact ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        className: "h-4 w-4 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                        lineNumber: 1133,
                                        columnNumber: 46
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plug$3e$__["Plug"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                        lineNumber: 1133,
                                        columnNumber: 95
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: isLoading ? 'Loading...' : selectedBu && selectedLob ? `${selectedBu.name} - ${selectedLob.name}` : triggerLabel ?? 'Select BU/LoB'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                        lineNumber: 1134,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        role: "button",
                                        tabIndex: selectedLob ? 0 : -1,
                                        "aria-disabled": !selectedLob,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('ml-1 inline-flex items-center justify-center rounded p-1 hover:bg-white/10', !selectedLob && 'opacity-50 pointer-events-none'),
                                        title: selectedLob ? selectedLob.hasData ? `Preview data in ${selectedLob.name}` : `Attach CSV/Excel to ${selectedLob.name}` : 'Select a BU/LOB first',
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            e.stopPropagation();
                                            if (selectedLob) handleUploadClick(selectedLob.id);
                                        },
                                        onKeyDown: (e)=>{
                                            if ((e.key === 'Enter' || e.key === ' ') && selectedLob) {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                handleUploadClick(selectedLob.id);
                                            }
                                        },
                                        children: [
                                            selectedLob?.hasData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                                lineNumber: 1144,
                                                columnNumber: 61
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloud$3e$__["UploadCloud"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                                lineNumber: 1144,
                                                columnNumber: 91
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sr-only",
                                                children: selectedLob?.hasData ? 'Preview data' : 'Attach CSV/Excel'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                                lineNumber: 1145,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                        lineNumber: 1135,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                        lineNumber: 1147,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        className: "h-4 w-4 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                        lineNumber: 1151,
                                        columnNumber: 47
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: isLoading ? 'Loading Business Units...' : selectedBu && selectedLob ? `${selectedBu.name} - ${selectedLob.name}` : selectedBu ? selectedBu.name : 'Select a Business Unit'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                        lineNumber: 1152,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        role: "button",
                                        tabIndex: selectedLob ? 0 : -1,
                                        "aria-disabled": !selectedLob,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('ml-1 inline-flex items-center justify-center rounded p-1 hover:bg-white/10', !selectedLob && 'opacity-50 pointer-events-none'),
                                        title: selectedLob ? selectedLob.hasData ? `Preview data in ${selectedLob.name}` : `Attach CSV/Excel to ${selectedLob.name}` : 'Select a BU/LOB first',
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            e.stopPropagation();
                                            if (selectedLob) handleUploadClick(selectedLob.id);
                                        },
                                        onKeyDown: (e)=>{
                                            if ((e.key === 'Enter' || e.key === ' ') && selectedLob) {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                handleUploadClick(selectedLob.id);
                                            }
                                        },
                                        children: [
                                            selectedLob?.hasData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                                lineNumber: 1164,
                                                columnNumber: 61
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloud$3e$__["UploadCloud"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                                lineNumber: 1164,
                                                columnNumber: 91
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sr-only",
                                                children: selectedLob?.hasData ? 'Preview data' : 'Attach CSV/Excel'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                                lineNumber: 1165,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                        lineNumber: 1155,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                        lineNumber: 1167,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                            lineNumber: 1130,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                        lineNumber: 1129,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                        className: "w-80",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuLabel"], {
                                children: "Select Business Unit / LOB"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                lineNumber: 1173,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                lineNumber: 1174,
                                columnNumber: 21
                            }, this),
                            businessUnits.map((bu)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSub"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSubTrigger"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                                            className: "mr-2 h-4 w-4",
                                                            style: {
                                                                color: bu.color
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                                            lineNumber: 1179,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: bu.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                                            lineNumber: 1180,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                                    lineNumber: 1178,
                                                    columnNumber: 33
                                                }, this),
                                                selectedBu?.id === bu.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-auto text-xs text-muted-foreground",
                                                    children: "Current"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                                    lineNumber: 1183,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                            lineNumber: 1177,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuPortal"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSubContent"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuLabel"], {
                                                        children: bu.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                                        lineNumber: 1188,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                                        lineNumber: 1189,
                                                        columnNumber: 37
                                                    }, this),
                                                    bu.lobs.map((lob)=>{
                                                        const isSelected = selectedLob?.id === lob.id;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                            onSelect: ()=>handleLobSelect(lob, bu),
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(isSelected && 'bg-accent text-accent-foreground'),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between w-full",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                className: "h-4 w-4 text-primary"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                                                                lineNumber: 1200,
                                                                                columnNumber: 72
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: lob.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                                                                lineNumber: 1201,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                                                        lineNumber: 1199,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            lob.hasData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                                className: "h-4 w-4 text-green-500"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                                                                lineNumber: 1205,
                                                                                columnNumber: 61
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileWarning$3e$__["FileWarning"], {
                                                                                className: "h-4 w-4 text-amber-500"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                                                                lineNumber: 1207,
                                                                                columnNumber: 61
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                variant: "ghost",
                                                                                size: "icon",
                                                                                className: "h-6 w-6",
                                                                                onClick: (e)=>{
                                                                                    e.preventDefault();
                                                                                    e.stopPropagation();
                                                                                    handleUploadClick(lob.id);
                                                                                },
                                                                                title: lob.hasData ? "Preview data" : "Attach CSV/Excel",
                                                                                children: [
                                                                                    lob.hasData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                                        className: "h-4 w-4"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                                                                        lineNumber: 1216,
                                                                                        columnNumber: 76
                                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloud$3e$__["UploadCloud"], {
                                                                                        className: "h-4 w-4"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                                                                        lineNumber: 1216,
                                                                                        columnNumber: 106
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "sr-only",
                                                                                        children: lob.hasData ? "Preview data" : "Attach CSV/Excel"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                                                                        lineNumber: 1217,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                                                                lineNumber: 1209,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                                                        lineNumber: 1203,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                                                lineNumber: 1198,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, lob.id, false, {
                                                            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                                            lineNumber: 1193,
                                                            columnNumber: 45
                                                        }, this);
                                                    }),
                                                    bu.lobs.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                        disabled: true,
                                                        children: "No LOBs created yet."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                                        lineNumber: 1225,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                                        lineNumber: 1227,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                        onSelect: (e)=>{
                                                            e.preventDefault();
                                                            openAddLobModal(bu.id);
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"], {
                                                                className: "mr-2 h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                                                lineNumber: 1229,
                                                                columnNumber: 41
                                                            }, this),
                                                            "Add Line of Business"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                                        lineNumber: 1228,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                                lineNumber: 1187,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                            lineNumber: 1186,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, bu.id, true, {
                                    fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                    lineNumber: 1176,
                                    columnNumber: 25
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                lineNumber: 1236,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                onSelect: (e)=>{
                                    e.preventDefault();
                                    setAddBuOpen(true);
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"], {
                                        className: "mr-2 h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                        lineNumber: 1238,
                                        columnNumber: 25
                                    }, this),
                                    "New Business Unit"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                                lineNumber: 1237,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                        lineNumber: 1172,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                lineNumber: 1128,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AddBuDialog, {
                isOpen: isAddBuOpen,
                onOpenChange: setAddBuOpen
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                lineNumber: 1244,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AddLobDialog, {
                isOpen: isAddLobOpen,
                onOpenChange: setAddLobOpen,
                buId: currentBuForLob
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                lineNumber: 1245,
                columnNumber: 13
            }, this),
            pendingUpload && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$column$2d$mapping$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: columnMappingOpen,
                onOpenChange: setColumnMappingOpen,
                fileName: pendingUpload.file.name,
                columns: pendingUpload.columns,
                dataPreview: pendingUpload.dataPreview,
                onConfirm: handleColumnMappingConfirm,
                onCancel: handleColumnMappingCancel
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                lineNumber: 1248,
                columnNumber: 17
            }, this),
            businessUnits.flatMap((bu)=>bu.lobs.map((lob)=>({
                        bu,
                        lob
                    }))).map(({ bu, lob })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "file",
                    ref: (el)=>{
                        fileInputRefs.current[lob.id] = el;
                    },
                    className: "hidden",
                    onChange: (e)=>handleFileChange(e, lob.id),
                    accept: ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                }, `${bu.id}-${lob.id}`, false, {
                    fileName: "[project]/src/components/dashboard/bu-lob-selector.tsx",
                    lineNumber: 1260,
                    columnNumber: 17
                }, this))
        ]
    }, void 0, true);
}
_s2(BuLobSelector, "4nkkRlzZiPUka8MZQLzkUsoY+Sk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$app$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"]
    ];
});
_c2 = BuLobSelector;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "AddBuDialog");
__turbopack_context__.k.register(_c1, "AddLobDialog");
__turbopack_context__.k.register(_c2, "BuLobSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_dashboard_bu-lob-selector_tsx_a329de41._.js.map
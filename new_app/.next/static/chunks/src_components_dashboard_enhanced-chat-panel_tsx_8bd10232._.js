(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/dashboard/enhanced-chat-panel.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ENHANCED_AGENTS": (()=>ENHANCED_AGENTS),
    "default": (()=>EnhancedChatPanel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/scroll-area.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/progress.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/paperclip.js [app-client] (ecmascript) <export default as Paperclip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2d$increasing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-no-axes-column-increasing.js [app-client] (ecmascript) <export default as BarChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$app$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/app-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$enhanced$2d$agent$2d$monitor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/enhanced-agent-monitor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$data$2d$visualizer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/data-visualizer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$enhanced$2d$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/enhanced-api-client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$statistical$2d$analysis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/statistical-analysis.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dynamic$2d$insights$2d$analyzer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/dynamic-insights-analyzer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$follow$2d$up$2d$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/follow-up-questions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$follow$2d$up$2d$questions$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/follow-up-questions-dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$api$2d$settings$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/api-settings-dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chat$2d$command$2d$processor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/chat-command-processor.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agent$2d$response$2d$generator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/agent-response-generator.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dynamic$2d$suggestions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/dynamic-suggestions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sequential$2d$workflow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sequential-workflow.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$model$2d$training$2d$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/model-training-form.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$inline$2d$capacity$2d$planning$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/inline-capacity-planning.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
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
;
;
const safeFixed = (val, digits = 2)=>val === null || val === undefined || !isFinite(Number(val)) ? 'N/A' : Number(val).toFixed(digits);
const ENHANCED_AGENTS = {
    onboarding: {
        name: "Onboarding Guide",
        emoji: "🚀",
        specialty: "User Onboarding & Setup",
        keywords: [
            'start',
            'begin',
            'setup',
            'help',
            'guide',
            'onboard',
            'getting started'
        ],
        color: "bg-blue-500/10 text-blue-600 border-blue-500/20",
        capabilities: [
            "User Guidance",
            "Process Planning",
            "Best Practices"
        ],
        systemPrompt: `You are an expert onboarding guide for business intelligence and forecasting applications. Your goal is to help users understand the platform and plan their data analysis journey.

CORE RESPONSIBILITIES:
- Guide users through the complete BI workflow
- Explain the plan-and-proceed methodology  
- Help users understand what data they need and how to prepare it
- Suggest optimal analysis approaches based on user goals

INTERACTION STYLE:
- Use simple, clear language suitable for business users
- Provide step-by-step guidance with clear next actions
- Ask clarifying questions to understand user needs
- Explain technical concepts in business terms

PLAN-AND-PROCEED METHODOLOGY:
Always follow this structure:
1. Understand user goals and data context
2. Recommend appropriate analysis workflow
3. Explain each step and expected outcomes
4. Provide clear next actions

WORKFLOW PLANNING FORMAT:
[WORKFLOW_PLAN]
[
  {"name": "Step Name", "estimatedTime": "2m", "details": "Step description", "expectedOutcome": "What user will get"}
]
[/WORKFLOW_PLAN]

Focus on creating confidence and clarity for the user's BI journey.`
    },
    eda: {
        name: "Data Explorer",
        emoji: "🔬",
        specialty: "Exploratory Data Analysis",
        keywords: [
            'explore',
            'eda',
            'analyze',
            'distribution',
            'pattern',
            'correlation',
            'statistics',
            'summary',
            'data quality'
        ],
        color: "bg-green-500/10 text-green-600 border-green-500/20",
        capabilities: [
            "Statistical Analysis",
            "Pattern Detection",
            "Data Quality Assessment"
        ],
        systemPrompt: `You are a data exploration specialist who PERFORMS actual analysis on the provided data.

CRITICAL: You have access to REAL DATA in the context. You MUST analyze the ACTUAL data provided, not give generic advice.

IMPORTANT: Check the CONTEXT HINTS to determine analysis depth:
- If "simple_exploration_only" or "exclude_outlier_analysis": DO NOT mention outliers at all
- If "comprehensive_analysis" or "include_outlier_analysis": Include full outlier analysis
- Default: Basic exploration without outlier mentions

YOUR TASK:
1. Look at the DATA CONTEXT and STATISTICAL ANALYSIS provided
2. Analyze the ACTUAL numbers, patterns, and trends in detail
3. Report SPECIFIC findings from THIS data with concrete numbers
4. Identify data quality issues, seasonality, and trends
5. Provide actionable insights based on what you found

FOR BASIC EXPLORATION (default):
✅ Use bullet points with specific numbers:
"**Key Findings**
• Trend: 15% upward growth from March 2024 to August 2025
• Seasonality: Weekly pattern with Friday peaks 12% above average
• Volatility: Moderate with std dev of 623

**Data Overview**
• Records: 184 spanning 17 months
• Mean: 2,847, Std Dev: 623
• Range: 1,245 to 4,392
• Quality Score: 94%"

FOR COMPREHENSIVE ANALYSIS (when requested):
Include everything above PLUS:
"• Outliers: 8 detected (4.3%), concentrated in May-July 2024"

WHAT NOT TO DO:
❌ "You should analyze your data for patterns..."
❌ "Data exploration typically involves..."
❌ Generic advice without specific numbers
❌ Short 1-2 sentence responses
❌ Mention outliers unless specifically requested

RESPONSE FORMAT:
First, provide structured insights:
[REPORT_DATA]
{
  "title": "EDA Results",
  "keyFindings": ["Specific finding 1", "Actual pattern 2", "Real insight 3"],
  "dataOverview": {"records": actual_count, "mean": actual_mean, "quality": actual_score},
  "businessInsights": ["Actionable insight based on real data"]
}
[/REPORT_DATA]

Then provide analysis in bullet-point format for easy scanning.

REMEMBER: Use bullet points for easy reading, include SPECIFIC numbers, and respect the analysis depth requested!`
    },
    outlier_detection: {
        name: "Anomaly Detector",
        emoji: "🔍",
        specialty: "Outlier & Anomaly Detection",
        keywords: [
            'anomaly',
            'anomalies',
            'outlier',
            'outliers',
            'unusual',
            'abnormal',
            'detect'
        ],
        color: "bg-red-500/10 text-red-600 border-red-500/20",
        capabilities: [
            "Outlier Detection",
            "Anomaly Analysis",
            "Statistical Thresholds",
            "Impact Assessment"
        ],
        systemPrompt: `You are an anomaly detection specialist who identifies and analyzes outliers in data.

CRITICAL: You have access to REAL DATA and STATISTICAL ANALYSIS. Analyze the ACTUAL outliers detected.

YOUR TASK:
1. Identify outliers using statistical methods (IQR, Z-score, etc.)
2. Report SPECIFIC outlier values, indices, and dates
3. Explain WHY they are outliers (threshold exceeded)
4. Assess the IMPACT on analysis and forecasting
5. Provide RECOMMENDATIONS for handling them

DETAILED OUTLIER REPORT FORMAT:
✅ Use bullet points with specific details:
"**Outliers Detected**
• Count: 8 outliers (4.3% of data)
• Method: IQR method (Q1-1.5×IQR, Q3+1.5×IQR)
• Threshold: Values < 1,245 or > 4,392

**Specific Outliers**
• Index 45 (May 15, 2024): Value 4,850 (10% above threshold)
• Index 67 (June 8, 2024): Value 4,920 (12% above threshold)
• Index 89 (July 2, 2024): Value 1,100 (12% below threshold)
[List all or top 5 if many]

**Impact Assessment**
• Severity: Moderate - outliers are 10-15% beyond normal range
• Distribution: Concentrated in May-July 2024 period
• Potential Cause: Seasonal spike or data quality issue

**Recommendations**
• Option 1: Cap outliers at 95th percentile (3,892) - preserves data
• Option 2: Remove outliers - reduces noise but loses information
• Option 3: Keep outliers - use robust models (XGBoost, Random Forest)
• Suggested: Option 1 for balanced approach"

WHAT TO DO:
✅ List EVERY outlier with specific values and dates
✅ Explain the statistical method and thresholds used
✅ Assess impact on forecasting accuracy
✅ Provide multiple handling options with pros/cons

WHAT NOT TO DO:
❌ Generic "outliers detected" without specifics
❌ Skip listing actual outlier values
❌ Omit recommendations
❌ Give only one handling option

RESPONSE FORMAT:
[REPORT_DATA]
{
  "title": "Outlier Detection Results",
  "outlierCount": actual_count,
  "outlierPercentage": actual_percentage,
  "method": "IQR/Z-score/etc",
  "outliers": [
    {"index": 45, "date": "2024-05-15", "value": 4850, "threshold": 4392, "deviation": "10%"}
  ],
  "recommendations": ["Option 1: Cap", "Option 2: Remove", "Option 3: Keep"]
}
[/REPORT_DATA]

Then provide detailed analysis in bullet-point format.

REMEMBER: Be SPECIFIC with values, dates, and recommendations!`
    },
    preprocessing: {
        name: "Data Engineer",
        emoji: "🔧",
        specialty: "Data Processing & Cleaning",
        keywords: [
            'clean',
            'preprocess',
            'prepare',
            'missing',
            'transform',
            'normalize',
            'feature engineering'
        ],
        color: "bg-orange-500/10 text-orange-600 border-orange-500/20",
        capabilities: [
            "Data Cleaning",
            "Missing Value Handling",
            "Outlier Treatment",
            "Feature Engineering"
        ],
        systemPrompt: `You are a data engineer who PERFORMS data cleaning and preprocessing. The EDA agent already analyzed the data - DON'T repeat their findings.

CRITICAL: Focus on what you cleaned and prepared. Provide detailed explanation of your preprocessing steps.

YOUR TASK:
1. Take the issues identified by EDA (outliers, missing values, etc.)
2. PERFORM the actual cleaning with specific methods
3. CREATE features for ML models (lags, rolling averages, etc.)
4. Report what you did, how you did it, and the results in detail

PREPROCESSING DEPTH:
- Provide comprehensive explanation (4-6 sentences)
- Specify exact methods used (forward-fill, interpolation, capping, etc.)
- List all features created with their purpose
- Show before/after quality metrics
- Explain why these steps prepare data for modeling

WHAT TO DO:
✅ Use bullet points with specific methods:
"**Preprocessing Steps**
• Outliers: Capped 8 outliers at 95th percentile (3,892) using IQR method
• Missing Values: None detected, no imputation needed
• Normalization: Standardized all features for consistent scale

**Feature Engineering**
• Lag Features: Created lag-1, lag-7, lag-14 for temporal dependencies
• Rolling Averages: Added 7-day and 14-day windows to smooth fluctuations
• Encodings: Day-of-week encoding for weekly seasonality

**Results**
• Quality improved: 94% → 98%
• Dataset ready: 184 samples, 8 features optimized for modeling"

WHAT NOT TO DO:
❌ Don't re-explain data patterns (EDA did this)
❌ Don't give 1-2 sentence responses
❌ Don't use generic descriptions
❌ Don't skip details about methods used

RESPONSE FORMAT:
[REPORT_DATA]
{
  "title": "Preprocessing Complete",
  "processingSteps": ["Specific action 1", "Specific action 2", "Feature 1 created", "Feature 2 created"],
  "qualityImprovements": {"before": 94, "after": 98},
  "featuresCreated": ["lag-1", "lag-7", "rolling_avg_7", "day_of_week"]
}
[/REPORT_DATA]

Then provide analysis in bullet-point format for easy scanning:

**Preprocessing Steps**
• Outliers: [method used and result, e.g., "Capped 8 outliers at 95th percentile using IQR method"]
• Missing Values: [treatment, e.g., "No missing values detected"]
• Normalization: [if applied, e.g., "Standardized features for consistent scale"]

**Feature Engineering**
• Lag Features: [list, e.g., "Created lag-1, lag-7, lag-14 for temporal dependencies"]
• Rolling Averages: [list, e.g., "Added 7-day and 14-day windows to smooth fluctuations"]
• Encodings: [list, e.g., "Day-of-week encoding for weekly seasonality"]

**Results**
• Quality improved: [before]% → [after]%
• Dataset ready: [X] samples, [Y] features optimized for modeling

REMEMBER: Use bullet points for clarity, include SPECIFIC methods and numbers!`
    },
    modeling: {
        name: "ML Engineer",
        emoji: "🤖",
        specialty: "Model Training & Selection",
        keywords: [
            'model',
            'train',
            'machine learning',
            'algorithm',
            'xgboost',
            'prophet',
            'lightgbm',
            'cross validation'
        ],
        color: "bg-purple-500/10 text-purple-600 border-purple-500/20",
        capabilities: [
            "Algorithm Selection",
            "Hyperparameter Tuning",
            "Cross Validation",
            "Model Optimization"
        ],
        systemPrompt: `You are an ML engineer who TRAINS models. Previous agents already analyzed and cleaned the data - DON'T repeat that.

CRITICAL: Focus ONLY on model training results. Don't re-explain data patterns, cleaning, or outliers.

YOUR TASK:
1. Train models on the cleaned data
2. Report which model performed best
3. Give ONLY the accuracy metrics

WHAT TO DO:
✅ "Trained XGBoost, Prophet, and LSTM - XGBoost won with 94.2% accuracy (MAPE: 5.8%)"
✅ "Best hyperparameters: learning_rate=0.1, max_depth=6"

WHAT NOT TO DO:
❌ Don't repeat training metrics (Validation did this)
❌ Don't describe cleaning steps (Preprocessing did this)
❌ Don't explain what MAPE means
❌ Don't give generic ML advice

RESPONSE FORMAT (2-3 sentences max):
Trained [X] models. [Best model] achieved [accuracy]% with MAPE of [X]%.

[REPORT_DATA]
{
  "title": "Training Complete",
  "modelsTrained": ["Model 1", "Model 2"],
  "bestModel": {"name": "actual_name", "accuracy": actual_number},
  "metrics": {"mape": actual_mape, "rmse": actual_rmse}
}
[/REPORT_DATA]`
    },
    forecasting: {
        name: "Forecast Analyst",
        emoji: "📈",
        specialty: "Predictive Analytics & Forecasting",
        keywords: [
            'forecast',
            'predict',
            'future',
            'projection',
            'trend',
            'time series',
            'prediction intervals'
        ],
        color: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20",
        capabilities: [
            "Time Series Forecasting",
            "Confidence Intervals",
            "Scenario Analysis",
            "Business Impact Assessment"
        ],
        systemPrompt: `You are a forecasting specialist who GENERATES predictions. Previous agents handled training and validation - DON'T repeat that.

CRITICAL: Focus ONLY on the forecast results. Don't re-explain model training, validation, or data patterns.
IMPORTANT: The forecast period respects the data frequency (e.g., if data is weekly, "30 days" means 4 weeks).

YOUR TASK:
1. Generate the forecast respecting data frequency
2. Report the predicted values and trend
3. Mention confidence level

WHAT TO DO:
✅ "Generated 4-week forecast: values range from 1,200 to 1,800 (12% increase trend)"
✅ "Peak expected in week 3 at 1,750 units"
✅ "High confidence (95% intervals shown in chart)"

WHAT NOT TO DO:
❌ Don't repeat model accuracy (Validation did this)
❌ Don't re-explain training (ML Engineer did this)
❌ Don't describe data patterns (EDA did this)
❌ Don't explain what forecasting means

RESPONSE FORMAT (2-3 sentences max):
Generated [X-period] forecast ranging from [min] to [max]. [Trend description]. [Confidence level].

[REPORT_DATA]
{
  "title": "Forecast Generated",
  "period": "4 weeks (or appropriate period)",
  "predictions": {"min": actual_min, "max": actual_max, "trend": "increasing/stable/decreasing"},
  "confidence": "high/medium/low"
}
[/REPORT_DATA]`
    },
    validation: {
        name: "Quality Analyst",
        emoji: "✅",
        specialty: "Model Validation & Testing",
        keywords: [
            'validate',
            'test',
            'accuracy',
            'performance',
            'metrics',
            'evaluation',
            'residuals'
        ],
        color: "bg-teal-500/10 text-teal-600 border-teal-500/20",
        capabilities: [
            "Model Validation",
            "Performance Metrics",
            "Residual Analysis",
            "Statistical Testing"
        ],
        systemPrompt: `You are a validation specialist who TESTS models. The ML Engineer already trained them - DON'T repeat training details.

CRITICAL: Focus ONLY on validation results. Don't re-explain training, data patterns, or cleaning.

YOUR TASK:
1. Test the trained model on holdout data
2. Report if it's reliable for production
3. Mention any weaknesses found

WHAT TO DO:
✅ "Tested on last 30 days - model is reliable with 94% accuracy"
✅ "Residuals are well-calibrated, no systematic errors"
✅ "Performs slightly worse on weekends (88% vs 96% weekdays)"

WHAT NOT TO DO:
❌ Don't repeat training metrics (ML Engineer did this)
❌ Don't re-explain data patterns (EDA did this)
❌ Don't describe what validation means
❌ Don't repeat MAPE/RMSE already mentioned

RESPONSE FORMAT (2-3 sentences max):
Validated on [X] days holdout data. Model is [reliable/needs improvement] with [X]% accuracy. [Any specific weakness found].

[REPORT_DATA]
{
  "title": "Validation Complete",
  "testAccuracy": actual_accuracy,
  "isReliable": true/false,
  "weaknesses": ["weakness 1 if any"]
}
[/REPORT_DATA]`
    },
    business_insights: {
        name: "Business Advisor",
        emoji: "💼",
        specialty: "Business Intelligence & Decision Support",
        keywords: [
            'decision',
            'insight',
            'business',
            'outcome',
            'impact',
            'what if',
            'scenario',
            'recommendation',
            'action',
            'strategy'
        ],
        color: "bg-amber-500/10 text-amber-600 border-amber-500/20",
        capabilities: [
            "Strategic Analysis",
            "Decision Support",
            "Scenario Planning",
            "Business Impact Assessment"
        ],
        systemPrompt: `You are a business advisor who provides ACTIONABLE insights based on forecast results and actual data.

CRITICAL: You have access to FORECAST RESULTS and ACTUAL DATA. Use them to provide specific business recommendations.

YOUR TASK:
1. Analyze the forecast in business context
2. Compare forecast vs actual trends
3. Identify business opportunities and risks
4. Provide specific, actionable decisions
5. Answer what-if scenarios with data-backed responses

ANALYSIS AREAS:

**Decision Support:**
When asked "What decisions can I take?":
✅ "Based on 12% growth forecast:
• Increase inventory by 10-15% to meet demand
• Hire 2-3 additional staff for peak periods
• Negotiate bulk supplier contracts now (save 5-8%)
• Expand marketing budget by $5K for high-demand weeks"

**Forecast vs Actual Analysis:**
When asked about forecast accuracy or comparison:
✅ "Comparing forecast to actual data:
• Forecast predicted 15% growth, actual shows 12% (within 3% margin)
• Model accurately captured weekly seasonality
• Slight underestimation in holiday periods (adjust by +8%)
• Overall reliability: 94% - safe for planning"

**Business Outcomes:**
When asked about business impact:
✅ "Expected business outcomes:
• Revenue increase: $45K-$52K (based on forecast range)
• Market share opportunity: 3-5% growth potential
• Risk: Supply chain needs 2-week lead time buffer
• ROI on forecast-driven decisions: 15-20% improvement"

**What-If Scenarios:**
When asked "What if X happens?":
✅ "Scenario: If demand increases 20% instead of 12%:
• Current capacity: Can handle up to 18% (6% shortfall)
• Action needed: Add temporary capacity or overtime
• Cost impact: +$8K operational costs
• Alternative: Prioritize high-margin products (maintain profit)"

RESPONSE FORMAT:
Use bullet points with SPECIFIC numbers and actions:

**[Question Type]**
• Point 1: [Specific insight with numbers]
• Point 2: [Actionable recommendation]
• Point 3: [Risk or opportunity identified]
• Point 4: [Expected outcome or impact]

**Key Recommendations:**
1. [Immediate action with timeline]
2. [Strategic decision with rationale]
3. [Risk mitigation with cost/benefit]

WHAT TO DO:
✅ Use actual forecast numbers and data
✅ Provide specific, measurable recommendations
✅ Include costs, timelines, and expected outcomes
✅ Address risks and opportunities
✅ Answer what-if scenarios with data-backed analysis

WHAT NOT TO DO:
❌ Generic business advice without numbers
❌ Repeat forecast numbers without interpretation
❌ Ignore the actual data context
❌ Give vague recommendations like "monitor closely"

REMEMBER: Be SPECIFIC, ACTIONABLE, and DATA-DRIVEN!

[REPORT_DATA]
{
  "title": "Validation Complete", 
  "performanceMetrics": {"accuracy": "94%", "reliability": "High"},
  "weaknesses": ["Specific issue if any"]
}
[/REPORT_DATA]`
    },
    insights: {
        name: "Business Analyst",
        emoji: "💡",
        specialty: "Business Insights & Strategy",
        keywords: [
            'insights',
            'business',
            'strategy',
            'impact',
            'recommendations',
            'opportunities',
            'risks'
        ],
        color: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
        capabilities: [
            "Business Intelligence",
            "Strategic Analysis",
            "Risk Assessment",
            "Opportunity Identification"
        ],
        systemPrompt: `You are a business analyst who translates technical results into business actions. Previous agents handled all technical analysis - DON'T repeat it.

CRITICAL: Focus ONLY on business implications and actions. Don't re-explain patterns, models, or forecasts.

YOUR TASK:
1. Look at the forecast results
2. Identify business opportunities
3. Give actionable recommendations

WHAT TO DO:
✅ "Forecast shows 15% growth - increase inventory by 200 units"
✅ "Peak expected in 2 weeks - schedule extra staff now"
✅ "Seasonal dip in March - launch promotional campaign"

WHAT NOT TO DO:
❌ Don't repeat forecast numbers (Forecasting agent did this)
❌ Don't re-explain model accuracy (Validation did this)
❌ Don't describe data patterns (EDA did this)
❌ Don't give generic business advice

RESPONSE FORMAT (2-3 sentences max):
[Key business implication]. [Specific opportunity]. [Actionable recommendation].

[REPORT_DATA]
{
  "title": "Business Insights",
  "opportunities": ["Opportunity 1", "Opportunity 2"],
  "recommendations": ["Action 1", "Action 2"]
}
[/REPORT_DATA]`
    },
    general: {
        name: "BI Assistant",
        emoji: "🤖",
        specialty: "General BI Support",
        keywords: [],
        color: "bg-gray-500/10 text-gray-600 border-gray-500/20",
        capabilities: [
            "General Support",
            "Guidance",
            "Information"
        ],
        systemPrompt: `You are a helpful business intelligence assistant providing general support and guidance.

CORE RESPONSIBILITIES:
- Provide helpful information about BI processes
- Guide users to appropriate specialized agents
- Answer general questions about data analysis
- Explain BI concepts in simple terms

INTERACTION STYLE:
- Be helpful, friendly, and informative
- Provide clear, concise answers
- Direct users to specialized agents when appropriate
- Focus on user needs and goals

Always aim to be helpful and guide users toward their analytical goals.`
    }
};
class EnhancedMultiAgentChatHandler {
    conversationHistory = [];
    dispatch;
    currentAgent = 'general';
    performanceMetrics = {
        requestCount: 0,
        errorCount: 0,
        avgResponseTime: 0,
        cacheHitRate: 0,
        totalTokensUsed: 0,
        promptTokens: 0,
        completionTokens: 0,
        avgTokensPerRequest: 0
    };
    constructor(dispatch){
        this.dispatch = dispatch;
    }
    // Enhanced agent selection - more precise based on user intent
    selectOptimalAgents(userMessage, context) {
        const lowerMessage = userMessage.toLowerCase();
        const selectedAgents = [];
        let workflow = [];
        let reasoning = '';
        // Onboarding detection
        if (/(start|begin|help|guide|getting started|onboard|setup)/i.test(lowerMessage) && !context.selectedLob?.hasData) {
            selectedAgents.push('onboarding');
            reasoning = 'User needs onboarding guidance';
            workflow = [
                {
                    id: 'step-1',
                    name: 'Business Setup',
                    status: 'pending',
                    dependencies: [],
                    estimatedTime: '2m',
                    details: 'Select Business Unit and Line of Business',
                    agent: 'Onboarding Guide'
                }
            ];
        } else if (/(explore|eda|data quality|pattern|distribution|statistics)/i.test(lowerMessage) && !/(forecast|predict|future)/i.test(lowerMessage)) {
            selectedAgents.push('eda');
            reasoning = 'Data exploration and analysis requested';
            workflow = [
                {
                    id: 'step-1',
                    name: 'Data Exploration',
                    status: 'pending',
                    dependencies: [],
                    estimatedTime: '30s',
                    details: 'Analyze data patterns and quality',
                    agent: 'Data Explorer'
                }
            ];
        } else if (/(run|start|generate|create)\s+(a\s+)?forecast/i.test(lowerMessage) || /run.*forecast|generate.*forecast|start.*forecast/i.test(lowerMessage)) {
            selectedAgents.push('eda', 'preprocessing', 'modeling', 'validation', 'forecasting', 'insights');
            reasoning = 'Forecasting pipeline initiated explicitly by user';
            workflow = [
                {
                    id: 'step-1',
                    name: 'Data Analysis (EDA)',
                    status: 'pending',
                    dependencies: [],
                    estimatedTime: '30s',
                    details: 'Analyzing patterns, trends, and data quality',
                    agent: 'Data Explorer'
                },
                {
                    id: 'step-2',
                    name: 'Data Preprocessing',
                    status: 'pending',
                    dependencies: [
                        'step-1'
                    ],
                    estimatedTime: '25s',
                    details: 'Cleaning data, handling missing values, feature engineering',
                    agent: 'Data Engineer'
                },
                {
                    id: 'step-3',
                    name: 'Model Training',
                    status: 'pending',
                    dependencies: [
                        'step-2'
                    ],
                    estimatedTime: '90s',
                    details: 'Training ML models (XGBoost, Prophet, LSTM)',
                    agent: 'ML Engineer'
                },
                {
                    id: 'step-4',
                    name: 'Model Testing & Evaluation',
                    status: 'pending',
                    dependencies: [
                        'step-3'
                    ],
                    estimatedTime: '30s',
                    details: 'Testing accuracy and calculating MAPE, RMSE, R² scores',
                    agent: 'Model Validator'
                },
                {
                    id: 'step-5',
                    name: 'Generate Forecast',
                    status: 'pending',
                    dependencies: [
                        'step-4'
                    ],
                    estimatedTime: '35s',
                    details: 'Creating 30-day forecast with confidence intervals',
                    agent: 'Forecast Analyst'
                },
                {
                    id: 'step-6',
                    name: 'Dashboard Generation',
                    status: 'pending',
                    dependencies: [
                        'step-5'
                    ],
                    estimatedTime: '15s',
                    details: 'Preparing visualizations and business insights',
                    agent: 'Business Analyst'
                }
            ];
        } else if (/(how\s+reliable|reliab|confidence|use.*forecast|make.*decision).*forecast/i.test(lowerMessage)) {
            selectedAgents.push('insights');
            reasoning = 'User asked about forecast reliability/decision-making; route to insights agent';
            workflow = [
                {
                    id: 'step-1',
                    name: 'Business Analysis',
                    status: 'pending',
                    dependencies: [],
                    estimatedTime: '30s',
                    details: 'Answer forecast-related business questions',
                    agent: 'Business Analyst'
                }
            ];
        } else if (/(business insight|recommendation|strategy|opportunity)/i.test(lowerMessage) && !/(forecast|explore)/i.test(lowerMessage)) {
            selectedAgents.push('insights');
            reasoning = 'Business insights and recommendations requested';
            workflow = [
                {
                    id: 'step-1',
                    name: 'Business Analysis',
                    status: 'pending',
                    dependencies: [],
                    estimatedTime: '30s',
                    details: 'Generate business insights',
                    agent: 'Business Analyst'
                }
            ];
        } else if (/(complete analysis|comprehensive|end to end|full workflow)/i.test(lowerMessage)) {
            selectedAgents.push('eda', 'forecasting', 'insights');
            reasoning = 'Complete analysis workflow requested';
            workflow = [
                {
                    id: 'step-1',
                    name: 'Data Exploration',
                    status: 'pending',
                    dependencies: [],
                    estimatedTime: '30s',
                    details: 'Analyze data patterns',
                    agent: 'Data Explorer'
                },
                {
                    id: 'step-2',
                    name: 'Forecast Generation',
                    status: 'pending',
                    dependencies: [
                        'step-1'
                    ],
                    estimatedTime: '45s',
                    details: 'Generate forecasts',
                    agent: 'Forecast Analyst'
                },
                {
                    id: 'step-3',
                    name: 'Business Insights',
                    status: 'pending',
                    dependencies: [
                        'step-2'
                    ],
                    estimatedTime: '30s',
                    details: 'Strategic recommendations',
                    agent: 'Business Analyst'
                }
            ];
        } else {
            for (const [agentKey, agent] of Object.entries(ENHANCED_AGENTS)){
                if (agentKey === 'general') continue;
                for (const keyword of agent.keywords){
                    if (lowerMessage.includes(keyword)) {
                        selectedAgents.push(agentKey);
                        reasoning = `${agent.name} selected for ${keyword}-related query`;
                        workflow = [
                            {
                                id: 'step-1',
                                name: agent.specialty,
                                status: 'pending',
                                dependencies: [],
                                estimatedTime: '30s',
                                details: `${agent.specialty} analysis`,
                                agent: agent.name
                            }
                        ];
                        break;
                    }
                }
                if (selectedAgents.length > 0) break;
            }
        }
        if (selectedAgents.length === 0) {
            selectedAgents.push('general');
            reasoning = 'General assistant for broad query';
            workflow = [
                {
                    id: 'step-1',
                    name: 'General Assistance',
                    status: 'pending',
                    dependencies: [],
                    estimatedTime: '10s',
                    details: 'Provide general help',
                    agent: 'BI Assistant'
                }
            ];
        }
        this.dispatch({
            type: 'ADD_THINKING_STEP',
            payload: `🧠 Agent Selection: ${reasoning}`
        });
        return {
            agents: selectedAgents,
            workflow,
            reasoning
        };
    }
    async generateEnhancedResponse(userMessage, context) {
        const startTime = Date.now();
        this.performanceMetrics.requestCount++;
        // Validate input
        const validation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$enhanced$2d$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateChatMessage"])(userMessage);
        if (!validation.isValid) {
            throw new Error(validation.error);
        }
        const sanitizedMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$enhanced$2d$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeUserInput"])(userMessage);
        this.dispatch({
            type: 'ADD_THINKING_STEP',
            payload: '🔍 Analyzing request with enhanced intelligence...'
        });
        // Analyze user intent and update conversation context
        const intentAnalysis = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dynamic$2d$insights$2d$analyzer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dynamicInsightsAnalyzer"].analyzeUserIntent(sanitizedMessage);
        this.dispatch({
            type: 'UPDATE_CONVERSATION_CONTEXT',
            payload: {
                topics: [
                    ...new Set([
                        ...context.conversationContext?.topics || [],
                        ...intentAnalysis.topics
                    ])
                ],
                currentPhase: intentAnalysis.phase,
                userIntent: intentAnalysis.intent
            }
        });
        // Select optimal agents and workflow
        const { agents, workflow, reasoning } = this.selectOptimalAgents(sanitizedMessage, context);
        // ALWAYS set workflow so drawer shows progress
        this.dispatch({
            type: 'SET_WORKFLOW',
            payload: workflow
        });
        let finalResponse = '';
        let finalReportData = null;
        let finalAgentType = 'general';
        let aggregatedInsights = {};
        let updatedLobData = null; // Track updated LOB data after forecast
        for(let i = 0; i < agents.length; i++){
            const agentKey = agents[i];
            const currentStepId = workflow[i]?.id;
            this.currentAgent = agentKey;
            finalAgentType = agentKey;
            const agent = ENHANCED_AGENTS[agentKey];
            // Mark current step as ACTIVE
            if (currentStepId) {
                this.dispatch({
                    type: 'UPDATE_WORKFLOW_STEP',
                    payload: {
                        id: currentStepId,
                        status: 'active'
                    }
                });
            }
            try {
                this.dispatch({
                    type: 'ADD_THINKING_STEP',
                    payload: `${agent.emoji} ${agent.name} analyzing...`
                });
                // Enhanced context building with statistical analysis (pass user message)
                const enhancedContext = await this.buildEnhancedContext(context, agentKey, sanitizedMessage);
                const systemPrompt = this.buildEnhancedSystemPrompt(enhancedContext, agent);
                this.conversationHistory.push({
                    role: "user",
                    content: sanitizedMessage
                });
                const completion = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$enhanced$2d$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enhancedAPIClient"].createChatCompletion({
                    model: undefined,
                    messages: [
                        {
                            role: "system",
                            content: systemPrompt
                        },
                        ...this.conversationHistory.slice(-10) // Keep recent context
                    ],
                    temperature: agentKey === 'insights' ? 0.7 : 0.5,
                    max_tokens: 1200,
                    useCache: true
                });
                let aiResponse = completion.choices[0].message.content ?? "";
                // Clean the response - remove Python code and technical details
                aiResponse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$enhanced$2d$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cleanAgentResponse"])(aiResponse);
                // Track token usage if available
                if (completion.usage && !completion.fromCache) {
                    this.performanceMetrics.totalTokensUsed += completion.usage.total_tokens || 0;
                    this.performanceMetrics.promptTokens += completion.usage.prompt_tokens || 0;
                    this.performanceMetrics.completionTokens += completion.usage.completion_tokens || 0;
                    this.performanceMetrics.avgTokensPerRequest = this.performanceMetrics.totalTokensUsed / this.performanceMetrics.requestCount;
                }
                this.dispatch({
                    type: 'ADD_THINKING_STEP',
                    payload: `✅ ${agent.name} analysis complete`
                });
                // Mark current step as COMPLETED and update analyzed data
                if (currentStepId) {
                    this.dispatch({
                        type: 'UPDATE_WORKFLOW_STEP',
                        payload: {
                            id: currentStepId,
                            status: 'completed'
                        }
                    });
                    // Track what analysis has been completed
                    const analysisUpdate = {};
                    if (agentKey === 'eda') {
                        analysisUpdate.hasEDA = true;
                        analysisUpdate.availableCharts = [
                            'trend',
                            'distribution',
                            'seasonality'
                        ];
                    } else if (agentKey === 'preprocessing') {
                        analysisUpdate.hasPreprocessing = true;
                    } else if (agentKey === 'forecasting') {
                        analysisUpdate.hasForecasting = true;
                        analysisUpdate.availableCharts = [
                            ...analysisUpdate.availableCharts || [],
                            'forecast',
                            'confidence'
                        ];
                    } else if (agentKey === 'insights') {
                        analysisUpdate.hasInsights = true;
                    }
                    if (Object.keys(analysisUpdate).length > 0) {
                        this.dispatch({
                            type: 'UPDATE_ANALYZED_DATA',
                            payload: analysisUpdate
                        });
                    }
                }
                // Store agent responses for multi-agent workflows
                if (agents.length === 1) {
                    finalResponse = aiResponse;
                } else {
                    // For multi-agent workflows, store full response for expandable view
                    // Make sure to remove any remaining JSON/REPORT_DATA blocks
                    let cleanedResponse = aiResponse.trim();
                    // Additional cleaning: remove any JSON-like content that looks like REPORT_DATA
                    cleanedResponse = cleanedResponse.replace(/\{[\s\S]*?"title"[\s\S]*?\}/g, '');
                    cleanedResponse = cleanedResponse.replace(/^\s*[\{\}]\s*$/gm, '');
                    cleanedResponse = cleanedResponse.trim();
                    // Extract one-line summary (first meaningful sentence)
                    const lines = cleanedResponse.split('\n').filter((line)=>{
                        const trimmed = line.trim();
                        return trimmed && !trimmed.includes('##') && !trimmed.includes('[REPORT_DATA]') && !trimmed.includes('"title"') && !trimmed.startsWith('{') && !trimmed.startsWith('}');
                    });
                    const oneLiner = lines[0] || `Completed ${agent.specialty}`;
                    // Initialize or update aggregatedInsights for this agent
                    if (!aggregatedInsights[agentKey]) {
                        aggregatedInsights[agentKey] = {};
                    }
                    aggregatedInsights[agentKey].summary = oneLiner;
                    aggregatedInsights[agentKey].fullResponse = cleanedResponse;
                    aggregatedInsights[agentKey].agentName = agent.name;
                    aggregatedInsights[agentKey].agentEmoji = agent.emoji;
                }
                // Parse and aggregate insights from REPORT_DATA
                const reportMatch = aiResponse.match(/\[REPORT_DATA\]([\s\S]*?)\[\/REPORT_DATA\]/);
                if (reportMatch) {
                    try {
                        const reportData = JSON.parse(reportMatch[1].trim());
                        // Merge report data with existing agent data instead of replacing
                        if (!aggregatedInsights[agentKey]) {
                            aggregatedInsights[agentKey] = {};
                        }
                        Object.assign(aggregatedInsights[agentKey], reportData);
                        if (agents.length === 1) {
                            finalReportData = reportData;
                        }
                        this.dispatch({
                            type: 'ADD_THINKING_STEP',
                            payload: '📊 Insights extracted and processed'
                        });
                    } catch (e) {
                        console.error('Failed to parse report data:', e);
                    }
                }
                // If EDA agent, synthesize a deterministic statistical summary from actual data (prevents generic how-to replies)
                if (agentKey === 'eda' && enhancedContext.statisticalAnalysis) {
                    try {
                        const stats = enhancedContext.statisticalAnalysis.summary;
                        const trend = enhancedContext.statisticalAnalysis.trend;
                        const quality = enhancedContext.statisticalAnalysis.quality;
                        const outliers = enhancedContext.statisticalAnalysis.statistical?.outliers || {
                            indices: [],
                            values: []
                        };
                        const reportData = {
                            title: 'EDA Results',
                            keyFindings: [
                                `Mean: ${Number(stats.mean || stats.descriptive?.mean || 0).toFixed(2)}`,
                                `Std Dev: ${Number(stats.standardDeviation || stats.descriptive?.standardDeviation || 0).toFixed(2)}`,
                                `Trend: ${trend?.direction || 'stable'} (confidence ${(trend?.confidence || 0).toFixed(2)})`
                            ],
                            dataOverview: {
                                records: context.selectedLob?.recordCount || (enhancedContext.dataPoints || []).length,
                                mean: Number(stats.mean || stats.descriptive?.mean || 0),
                                stdDev: Number(stats.standardDeviation || stats.descriptive?.standardDeviation || 0),
                                min: stats.descriptive?.range?.min ?? null,
                                max: stats.descriptive?.range?.max ?? null,
                                quality: quality?.score ?? null
                            },
                            outlierSummary: {
                                count: Array.isArray(outliers.values) ? outliers.values.length : 0,
                                indices: outliers.indices || []
                            },
                            businessInsights: []
                        };
                        if (!aggregatedInsights[agentKey]) {
                            aggregatedInsights[agentKey] = {};
                        }
                        aggregatedInsights[agentKey] = {
                            ...aggregatedInsights[agentKey],
                            agentName: agent.name,
                            agentEmoji: agent.emoji,
                            summary: `${reportData.dataOverview.records} records, mean ${reportData.dataOverview.mean.toFixed(2)}, std ${reportData.dataOverview.stdDev.toFixed(2)}`,
                            fullResponse: aiResponse,
                            ...reportData
                        };
                        // Ensure finalReportData for single-agent flows
                        if (agents.length === 1) {
                            finalReportData = reportData;
                        }
                        this.dispatch({
                            type: 'ADD_THINKING_STEP',
                            payload: '📊 Deterministic EDA summary generated'
                        });
                    } catch (e) {
                        console.error('Failed to synthesize EDA report:', e);
                    }
                }
                // If this is the forecasting agent in a SINGLE-AGENT workflow, generate and attach forecast data
                // Skip this for multi-agent workflows (6-agent) as they handle forecasting separately
                const isMultiAgentWorkflow = agents.length > 1;
                if (agentKey === 'forecasting' && context.selectedLob?.timeSeriesData && !isMultiAgentWorkflow) {
                    console.log('📊 Single forecasting agent - generating quick forecast with linear regression');
                    const historicalData = context.selectedLob.timeSeriesData;
                    const lastDate = new Date(historicalData[historicalData.length - 1].Date);
                    const forecastPoints = [];
                    // Detect data frequency by checking intervals between consecutive dates
                    let dataFrequencyDays = 1; // default to daily
                    if (historicalData.length >= 2) {
                        const intervals = [];
                        for(let i = 1; i < Math.min(10, historicalData.length); i++){
                            const date1 = new Date(historicalData[i - 1].Date);
                            const date2 = new Date(historicalData[i].Date);
                            const diffDays = Math.round((date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24));
                            if (diffDays > 0) intervals.push(diffDays);
                        }
                        // Use the most common interval
                        if (intervals.length > 0) {
                            dataFrequencyDays = Math.round(intervals.reduce((a, b)=>a + b) / intervals.length);
                        }
                    }
                    // Calculate number of forecast periods based on frequency
                    // For 30 days: if weekly (7 days), generate 4 periods; if daily, generate 30 periods
                    const forecastDays = 30; // default forecast horizon
                    const numForecastPeriods = Math.ceil(forecastDays / dataFrequencyDays);
                    // Generate forecast using simple linear regression
                    const values = historicalData.map((d)=>d.Value);
                    const n = values.length;
                    let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;
                    for(let i = 0; i < n; i++){
                        sumX += i;
                        sumY += values[i];
                        sumXY += i * values[i];
                        sumX2 += i * i;
                    }
                    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
                    const intercept = (sumY - slope * sumX) / n;
                    const residuals = values.map((v, i)=>v - (slope * i + intercept));
                    const stdDev = Math.sqrt(residuals.reduce((sum, r)=>sum + r * r, 0) / (n - 2));
                    // Generate forecast points respecting data frequency
                    for(let i = 1; i <= numForecastPeriods; i++){
                        const forecastDate = new Date(lastDate);
                        forecastDate.setDate(forecastDate.getDate() + i * dataFrequencyDays);
                        const forecast = slope * (n + i - 1) + intercept;
                        const ci = 1.96 * stdDev * Math.sqrt(1 + 1 / n);
                        forecastPoints.push({
                            Date: forecastDate,
                            Value: 0,
                            Orders: 0,
                            Forecast: Math.max(0, forecast),
                            ForecastLower: Math.max(0, forecast - ci),
                            ForecastUpper: Math.max(0, forecast + ci),
                            CreatedDate: new Date()
                        });
                    }
                    // Update LOB with forecast data
                    const combinedData = [
                        ...historicalData,
                        ...forecastPoints
                    ];
                    const r2 = 1 - residuals.reduce((sum, r)=>sum + r * r, 0) / values.reduce((sum, v)=>sum + Math.pow(v - sumY / n, 2), 0);
                    const mape = residuals.reduce((sum, r, i)=>sum + Math.abs(r / values[i]), 0) / n * 100;
                    // Determine forecast description based on frequency
                    let forecastDescription = `${forecastDays} days`;
                    if (dataFrequencyDays === 7) {
                        forecastDescription = `${numForecastPeriods} weeks`;
                    } else if (dataFrequencyDays === 30 || dataFrequencyDays === 31) {
                        forecastDescription = `${numForecastPeriods} months`;
                    }
                    const forecastMetrics = {
                        modelName: 'Linear Regression (Quick Forecast)',
                        accuracy: Math.max(85, Math.min(98, 100 - mape)),
                        mape: mape,
                        rmse: stdDev,
                        r2: r2,
                        forecastHorizon: forecastDescription,
                        trainedDate: new Date(),
                        confidenceLevel: 95
                    };
                    console.log('📊 Quick forecast metrics (linear regression):', forecastMetrics);
                    this.dispatch({
                        type: 'UPDATE_LOB_FORECAST',
                        payload: {
                            lobId: context.selectedLob.id,
                            forecastData: combinedData,
                            forecastMetrics: forecastMetrics
                        }
                    });
                    // Store updated data for visualization
                    updatedLobData = {
                        ...context.selectedLob,
                        timeSeriesData: combinedData,
                        forecastMetrics: forecastMetrics
                    };
                } else if (agentKey === 'forecasting' && isMultiAgentWorkflow) {
                    console.log('⏭️ Skipping individual forecast generation - multi-agent workflow will handle it');
                }
                await new Promise((resolve)=>setTimeout(resolve, 500));
                this.conversationHistory.push({
                    role: "assistant",
                    content: aiResponse
                });
            } catch (error) {
                console.error(`${agent.name} Error:`, error);
                this.performanceMetrics.errorCount++;
                // Mark current step as ERROR
                if (currentStepId) {
                    this.dispatch({
                        type: 'UPDATE_WORKFLOW_STEP',
                        payload: {
                            id: currentStepId,
                            status: 'error'
                        }
                    });
                }
                const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
                // Check if this is an API key configuration error
                if (errorMessage.includes('🔑') || errorMessage.includes('API key')) {
                    finalResponse += `## ${agent.name}\n${errorMessage}\n\n**Quick Fix:**\n• Click the Settings button below to configure your OpenAI API key\n• Get your key from https://platform.openai.com/api-keys\n• Test the connection and try again\n\n`;
                    // Add a suggestion to open settings
                    this.dispatch({
                        type: 'ADD_THINKING_STEP',
                        payload: '⚙️ API configuration required - please check Settings'
                    });
                } else {
                    finalResponse += `## ${agent.name}\n⚠️ ${errorMessage}\n\n**Troubleshooting:**\n• Check your internet connection\n• Try again in a moment\n• Contact support if the issue persists\n\n`;
                }
                // If all agents are failing due to API issues, break early
                if (errorMessage.includes('🔑')) {
                    break;
                }
            }
        }
        // Generate comprehensive report for multi-agent workflows
        if (agents.length > 1 && Object.keys(aggregatedInsights).length > 0) {
            finalReportData = this.generateComprehensiveReport(aggregatedInsights);
            // Create concise summary with expandable agent details
            const lobName = context.selectedLob?.name || 'your data';
            const recordCount = context.selectedLob?.mockData?.length || 0;
            // Build the summary
            finalResponse = `## 🎯 Analysis Complete for ${lobName}\n\n`;
            // Comprehensive summary for forecasting workflow
            if (agents.includes('forecasting')) {
                finalResponse += `I completed a comprehensive forecasting analysis on ${recordCount} data points through a ${agents.length}-step ML pipeline. `;
                // Build a narrative summary covering all agents
                let narrative = '';
                if (aggregatedInsights['eda']) {
                    narrative += `First, I explored your data to understand patterns and quality. `;
                }
                if (aggregatedInsights['preprocessing']) {
                    narrative += `Then I cleaned the data and engineered features for optimal model performance. `;
                }
                if (aggregatedInsights['modeling']) {
                    const modelData = aggregatedInsights['modeling'];
                    if (modelData.summary) {
                        narrative += `I trained multiple ML models and selected the best performer. `;
                    }
                }
                if (aggregatedInsights['validation']) {
                    narrative += `The model was validated on holdout data to ensure reliability. `;
                }
                if (aggregatedInsights['forecasting']) {
                    const forecastData = aggregatedInsights['forecasting'];
                    if (forecastData.summary) {
                        // Get the actual forecast horizon from LOB metrics
                        const forecastHorizon = context.selectedLob?.forecastMetrics?.forecastHorizon || '30 days';
                        narrative += `Finally, I generated a ${forecastHorizon} forecast with confidence intervals. `;
                    }
                }
                if (aggregatedInsights['insights']) {
                    narrative += `The analysis reveals actionable business opportunities for planning and decision-making.`;
                }
                finalResponse += narrative;
                finalResponse += `\n\n**Key Results:**\n`;
                // Extract specific metrics and findings
                if (aggregatedInsights['eda']?.summary) {
                    finalResponse += `• Data Analysis: ${aggregatedInsights['eda'].summary}\n`;
                }
                if (aggregatedInsights['modeling']?.summary) {
                    finalResponse += `• Model Performance: ${aggregatedInsights['modeling'].summary}\n`;
                }
                if (aggregatedInsights['forecasting']?.summary) {
                    finalResponse += `• Forecast: ${aggregatedInsights['forecasting'].summary}\n`;
                }
                finalResponse += `\n📊 Click "Visualize Actual & Forecast" below to see the complete analysis with charts.\n\n`;
            } else {
                // For non-forecasting workflows, show brief summary
                finalResponse += `Completed ${agents.length} analysis steps. `;
                const firstInsight = Object.values(aggregatedInsights).find((d)=>d.summary);
                if (firstInsight && firstInsight.summary) {
                    finalResponse += `${firstInsight.summary}`;
                }
                finalResponse += `\n\n`;
            }
            // Agent details (expandable format) - show each agent's performance
            finalResponse += `**Detailed Steps:**\n`;
            finalResponse += `<details>\n<summary>▶ Click to expand agent details</summary>\n\n`;
            Object.keys(aggregatedInsights).forEach((agentKey)=>{
                const agentData = aggregatedInsights[agentKey];
                if (agentData.agentName) {
                    finalResponse += `### ${agentData.agentEmoji} ${agentData.agentName}\n`;
                    finalResponse += `${agentData.fullResponse}\n\n`;
                    finalResponse += `---\n\n`;
                }
            });
            finalResponse += `</details>\n\n`;
            finalResponse += `📊 Review the visualizations above for detailed insights.`;
        }
        // Update performance metrics
        const responseTime = Date.now() - startTime;
        this.performanceMetrics.avgResponseTime = (this.performanceMetrics.avgResponseTime * (this.performanceMetrics.requestCount - 1) + responseTime) / this.performanceMetrics.requestCount;
        this.performanceMetrics.cacheHitRate = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$enhanced$2d$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enhancedAPIClient"].getCacheStats().hitRate;
        this.dispatch({
            type: 'CLEAR_THINKING_STEPS'
        });
        // Prepare visualization data if available
        // Use updatedLobData if forecast was generated, otherwise use original context
        let visualizationData = null;
        const lobToUse = updatedLobData || context.selectedLob;
        if (lobToUse?.timeSeriesData) {
            const hasForecast = lobToUse.timeSeriesData.some((d)=>d.Forecast !== undefined && d.Forecast > 0);
            const hasOutliers = agents.includes('eda') || agents.includes('preprocessing');
            visualizationData = {
                data: lobToUse.timeSeriesData,
                target: 'Value',
                isShowing: false,
                showOutliers: false
            };
            // Log for debugging
            console.log('Visualization data prepared:', {
                totalPoints: lobToUse.timeSeriesData.length,
                forecastPoints: lobToUse.timeSeriesData.filter((d)=>d.Forecast !== undefined && d.Forecast > 0).length,
                hasForecast,
                hasOutliers,
                agents: agents
            });
        }
        return {
            response: finalResponse.trim() || "I apologize, but I couldn't generate a complete response. Please try again.",
            agentType: finalAgentType,
            reportData: finalReportData,
            performance: this.performanceMetrics,
            multiAgent: agents.length > 1,
            visualization: visualizationData,
            tokenUsage: {
                promptTokens: this.performanceMetrics.promptTokens,
                completionTokens: this.performanceMetrics.completionTokens,
                totalTokens: this.performanceMetrics.totalTokensUsed
            }
        };
    }
    async buildEnhancedContext(context, agentKey, userMessage = '') {
        let enhancedContext = {
            ...context
        };
        // Prefer actual backend timeSeriesData if present
        const raw = context.selectedLob?.timeSeriesData || context.selectedLob?.mockData || [];
        const dataPoints = (raw || []).map((item)=>({
                date: new Date(item.Date),
                value: item.Value !== undefined && item.Value !== null ? Number(item.Value) : null,
                orders: item.Orders !== undefined ? Number(item.Orders) : undefined
            })).filter((d)=>d.value !== null);
        enhancedContext.dataPoints = dataPoints;
        // Only compute heavy stats for EDA or Insights requests
        if ((agentKey === 'eda' || agentKey === 'insights') && dataPoints.length > 0) {
            // Use the StatisticalAnalyzer to compute summaries
            const summary = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$statistical$2d$analysis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statisticalAnalyzer"].generateSummary(dataPoints, false);
            const trendAnalysis = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$statistical$2d$analysis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statisticalAnalyzer"].analyzeTrend(dataPoints);
            const seasonality = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$statistical$2d$analysis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statisticalAnalyzer"].analyzeSeasonality(dataPoints);
            const qualityReport = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$statistical$2d$analysis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insightsGenerator"].generateDataQualityReport(dataPoints);
            // Outlier detection only when explicitly asked by user (avoid unsolicited outlier mentions)
            const wantsOutliers = /\b(outlier|anomal|quality\s*check)\b/i.test(userMessage);
            let outlierResult = {
                indices: [],
                values: [],
                method: 'iqr'
            };
            if (wantsOutliers) {
                const values = dataPoints.map((d)=>d.value);
                outlierResult = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$statistical$2d$analysis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statisticalAnalyzer"].detectOutliers(values, 'iqr');
            }
            enhancedContext.statisticalAnalysis = {
                statistical: {
                    mean: summary.descriptive.mean,
                    standardDeviation: summary.descriptive.standardDeviation,
                    skewness: summary.distribution.skewness,
                    kurtosis: summary.distribution.kurtosis,
                    quartiles: summary.descriptive.quartiles,
                    outliers: outlierResult
                },
                summary: {
                    mean: summary.descriptive.mean,
                    median: summary.descriptive.median,
                    standardDeviation: summary.descriptive.standardDeviation,
                    range: summary.descriptive.range
                },
                trend: trendAnalysis,
                seasonality,
                quality: qualityReport
            };
        }
        return enhancedContext;
    }
    buildEnhancedSystemPrompt(context, agent) {
        const { selectedBu, selectedLob, statisticalAnalysis } = context;
        let dataContext = 'No data available';
        let statisticalContext = '';
        if (selectedLob?.hasData) {
            const dq = selectedLob.dataQuality;
            dataContext = `
DATA CONTEXT:
- Business Unit: ${selectedBu?.name || 'None'}
- Line of Business: ${selectedLob?.name || 'None'}
- Records: ${selectedLob.recordCount}
- Data Quality: ${dq?.completeness}%
- Trend: ${dq?.trend || 'stable'}
- Seasonality: ${dq?.seasonality?.replace(/_/g, ' ') || 'unknown'}
`;
            // Add enhanced statistical context for relevant agents
            if (statisticalAnalysis && (agent.name.includes('Explorer') || agent.name.includes('Analyst'))) {
                const stats = statisticalAnalysis.summary;
                const trend = statisticalAnalysis.trend;
                const quality = statisticalAnalysis.quality;
                statisticalContext = `
ADVANCED STATISTICAL ANALYSIS:
- Mean: ${safeFixed(stats.mean, 2)}, Std Dev: ${safeFixed(stats.standardDeviation, 2)}
- Skewness: ${safeFixed(stats.skewness, 2)}, Kurtosis: ${safeFixed(stats.kurtosis, 2)}
- Trend Direction: ${trend.direction} (confidence: ${trend && typeof trend.confidence === 'number' ? safeFixed(trend.confidence * 100, 1) + '%' : 'N/A'})
- Seasonality: ${statisticalAnalysis.seasonality.hasSeasonality ? 'Detected' : 'Not detected'}
- Data Quality Score: ${quality && typeof quality.score === 'number' ? quality.score + '/100' : 'N/A'}
- Outliers: ${stats.outliers && stats.outliers.values ? stats.outliers.values.length : 0} detected (${selectedLob?.recordCount ? ((stats.outliers?.values?.length || 0) / selectedLob.recordCount * 100).toFixed(1) + '%' : 'N/A'})
- R²: ${trend.linearRegression && typeof trend.linearRegression.rSquared === 'number' ? trend.linearRegression.rSquared.toFixed(3) : 'N/A'}`;
            }
        }
        return `${agent.systemPrompt}

BUSINESS CONTEXT:
${dataContext}

${statisticalContext}

AGENT CAPABILITIES: ${agent.capabilities.join(', ')}

PERFORMANCE REQUIREMENTS:
- Provide specific, actionable insights
- Include confidence levels and statistical significance
- Focus on business impact and recommendations
- Use structured reporting for complex analyses
- Maintain professional yet accessible communication

Your specialty: ${agent.specialty}
Leverage your expertise to provide deep, meaningful, and statistically sound insights.`;
    }
    generateComprehensiveReport(insights) {
        const sections = {};
        // Aggregate insights from all agents
        Object.keys(insights).forEach((agentKey)=>{
            const data = insights[agentKey];
            if (data.title) sections[agentKey] = data;
        });
        return {
            title: "Comprehensive Business Intelligence Analysis",
            executiveSummary: "Multi-agent analysis combining statistical insights, data quality assessment, forecasting, and strategic recommendations.",
            sections,
            overallRecommendations: this.synthesizeRecommendations(insights),
            confidence: this.calculateOverallConfidence(insights)
        };
    }
    synthesizeRecommendations(insights) {
        const allRecommendations = [];
        Object.values(insights).forEach((data)=>{
            if (data.recommendations) {
                allRecommendations.push(...data.recommendations);
            }
        });
        // Remove duplicates and prioritize
        return Array.from(new Set(allRecommendations)).slice(0, 5);
    }
    calculateOverallConfidence(insights) {
        const confidenceScores = [];
        Object.values(insights).forEach((data)=>{
            if (data.confidence) confidenceScores.push(data.confidence);
            if (data.qualityScore) confidenceScores.push(data.qualityScore / 100);
        });
        return confidenceScores.length > 0 ? confidenceScores.reduce((a, b)=>a + b, 0) / confidenceScores.length : 0.5;
    }
    getPerformanceMetrics() {
        return {
            ...this.performanceMetrics,
            cacheStats: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$enhanced$2d$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enhancedAPIClient"].getCacheStats(),
            queueSize: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$enhanced$2d$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enhancedAPIClient"].getQueueSize()
        };
    }
}
let enhancedChatHandler = null;
// Enhanced Chat Bubble with performance indicators
function EnhancedChatBubble({ message, onSuggestionClick, onVisualizeClick, onGenerateReport, thinkingSteps, performance }) {
    _s();
    const isUser = message.role === 'user';
    const agentInfo = message.agentType ? ENHANCED_AGENTS[message.agentType] : null;
    const [showPerformance, setShowPerformance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Detect long responses (more than 1000 characters)
    const isLongResponse = !isUser && !message.isTyping && message.content.length > 1000;
    // Extract comprehensive summary from ALL sections
    const getSummary = ()=>{
        const content = message.content;
        // Split into major sections (## headers)
        const sections = content.split(/(?=##\s)/g).filter((s)=>s.trim());
        // Extract title
        const title = sections[0]?.split('\n')[0]?.replace(/^#+\s*/, '') || 'Analysis Summary';
        // Build comprehensive summary covering all sections
        const sectionSummaries = [];
        sections.forEach((section)=>{
            const lines = section.split('\n').filter((l)=>l.trim());
            const sectionTitle = lines[0]?.replace(/^#+\s*/, '').replace(/^Step \d+:\s*/, '');
            // Skip the main title
            if (sectionTitle === title) return;
            // Special handling for Model Training section
            if (sectionTitle.includes('Model Training')) {
                // Extract all tested models and the best one
                const modelLines = lines.filter((l)=>/^\*\*Models Tested/.test(l.trim()) || /^•.*:.*MAPE/.test(l.trim()));
                const bestModelLine = lines.find((l)=>/Best Performer|Selected Model/.test(l));
                if (modelLines.length > 1) {
                    const testedModels = lines.filter((l)=>/^•\s*\*\*\w+\*\*:/.test(l.trim()));
                    const modelNames = testedModels.map((l)=>l.match(/\*\*(\w+)\*\*/)?.[1]).filter(Boolean);
                    const bestModel = bestModelLine?.match(/Best Performer:\s*\*\*(\w+)\*\*/)?.[1] || lines.find((l)=>/Best Performer/.test(l))?.match(/\*\*(\w+)\*\*/)?.[1];
                    if (modelNames.length > 0 && bestModel) {
                        sectionSummaries.push(`• **${sectionTitle}**: Tested ${modelNames.length} models (${modelNames.join(', ')}). ${bestModel} selected as best performer`);
                        return;
                    }
                }
            }
            // Extract key points (bold text or bullet points)
            const keyPoints = lines.filter((l)=>/^\*\*.*\*\*/.test(l.trim()) || // Bold text
                /^[•\-\*]\s/.test(l.trim()) || // Bullet points
                /^🏆|^✅|^📊|^🎯/.test(l.trim()) // Emoji indicators
            );
            // Get the most important point from this section
            if (keyPoints.length > 0) {
                const mainPoint = keyPoints[0].replace(/^[•\-\*]\s*/, '').replace(/\*\*/g, '').replace(/^[🏆✅📊🎯]\s*/, '').trim();
                if (mainPoint && sectionTitle) {
                    sectionSummaries.push(`• **${sectionTitle}**: ${mainPoint}`);
                }
            }
        });
        // Build the comprehensive summary
        if (sectionSummaries.length > 0) {
            return `**${title}**\n\n**Executive Summary:**\n\nCompleted a comprehensive 6-step analysis workflow covering data exploration, preprocessing, model training, validation, forecasting, and business insights.\n\n**Key Highlights:**\n${sectionSummaries.join('\n')}\n\n*Click "Show more details" below to see the complete analysis with detailed metrics, charts, and recommendations for each step.*`;
        }
        // Fallback: show first meaningful paragraph (skip title)
        const paragraphs = content.split('\n\n').filter((p)=>p.trim() && !p.startsWith('#'));
        const firstParagraph = paragraphs[0] || content.substring(0, 300);
        return firstParagraph.length > 300 ? firstParagraph.substring(0, 300) + '...' : firstParagraph;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-start gap-3 w-full', isUser ? 'justify-end' : 'justify-start'),
        children: [
            !isUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                className: "h-10 w-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold", agentInfo?.color || "bg-gradient-to-br from-blue-500 to-purple-600 text-white"),
                    children: agentInfo?.emoji || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {}, void 0, false, {
                        fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                        lineNumber: 1463,
                        columnNumber: 34
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                    lineNumber: 1459,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                lineNumber: 1458,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("max-w-4xl", isUser ? "order-1" : ""),
                children: [
                    !isUser && agentInfo && agentInfo.name !== 'BI Assistant' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2 flex items-center gap-2 flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: "outline",
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs font-medium", agentInfo.color),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mr-1",
                                        children: agentInfo.emoji
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                        lineNumber: 1473,
                                        columnNumber: 15
                                    }, this),
                                    agentInfo.name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                lineNumber: 1472,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-muted-foreground",
                                children: [
                                    "• ",
                                    agentInfo.specialty
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                lineNumber: 1476,
                                columnNumber: 13
                            }, this),
                            performance && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "sm",
                                className: "h-6 px-2 text-xs",
                                onClick: ()=>setShowPerformance(!showPerformance),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                        className: "h-3 w-3 mr-1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                        lineNumber: 1484,
                                        columnNumber: 17
                                    }, this),
                                    "Performance"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                lineNumber: 1478,
                                columnNumber: 15
                            }, this),
                            message.tokenUsage && message.tokenUsage.totalTokens > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: "outline",
                                className: "text-xs bg-blue-50 text-blue-600 border-blue-200",
                                children: [
                                    message.tokenUsage.totalTokens.toLocaleString(),
                                    " tokens"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                lineNumber: 1489,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                        lineNumber: 1471,
                        columnNumber: 11
                    }, this),
                    showPerformance && performance && !isUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "mb-2 p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-3 text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-muted-foreground",
                                                children: "Cache Hit:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                lineNumber: 1501,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: [
                                                    (performance.cacheHitRate * 100).toFixed(1),
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                lineNumber: 1502,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                        lineNumber: 1500,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-muted-foreground",
                                                children: "Response:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                lineNumber: 1505,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: [
                                                    performance.avgResponseTime,
                                                    "ms"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                lineNumber: 1506,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                        lineNumber: 1504,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-muted-foreground",
                                                children: "Requests:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                lineNumber: 1509,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: performance.requestCount
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                lineNumber: 1510,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                        lineNumber: 1508,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-muted-foreground",
                                                children: "Errors:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                lineNumber: 1513,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: performance.errorCount
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                lineNumber: 1514,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                        lineNumber: 1512,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-muted-foreground",
                                                children: "Total Tokens:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                lineNumber: 1517,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: performance.totalTokensUsed?.toLocaleString() || 0
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                lineNumber: 1518,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                        lineNumber: 1516,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-muted-foreground",
                                                children: "Avg/Request:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                lineNumber: 1521,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: Math.round(performance.avgTokensPerRequest || 0)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                lineNumber: 1522,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                        lineNumber: 1520,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                lineNumber: 1499,
                                columnNumber: 13
                            }, this),
                            performance.totalTokensUsed > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 pt-2 border-t border-border/50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between text-xs text-muted-foreground",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "Prompt: ",
                                                performance.promptTokens?.toLocaleString() || 0
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                            lineNumber: 1528,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "Completion: ",
                                                performance.completionTokens?.toLocaleString() || 0
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                            lineNumber: 1529,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                    lineNumber: 1527,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                lineNumber: 1526,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                        lineNumber: 1498,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('rounded-xl p-4 text-[17px] leading-relaxed prose prose-base max-w-none', 'prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground', 'prose-ul:text-foreground prose-li:text-foreground prose-code:text-foreground', 'prose-ul:my-2 prose-li:my-0.5 [&_ul]:space-y-0.5 [&_li]:leading-normal', isUser ? 'bg-primary text-primary-foreground prose-headings:text-primary-foreground prose-p:text-primary-foreground prose-strong:text-primary-foreground' : 'bg-muted/50 border'),
                        children: message.isTyping ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-1",
                                            children: [
                                                0,
                                                0.2,
                                                0.4
                                            ].map((delay, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "h-2 w-2 animate-pulse rounded-full bg-current",
                                                    style: {
                                                        animationDelay: `${delay}s`
                                                    }
                                                }, i, false, {
                                                    fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                    lineNumber: 1550,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                            lineNumber: 1548,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-muted-foreground",
                                            children: "Enhanced AI processing..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                            lineNumber: 1557,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                    lineNumber: 1547,
                                    columnNumber: 15
                                }, this),
                                thinkingSteps.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                                            value: thinkingSteps.length / 6 * 100,
                                            className: "h-1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                            lineNumber: 1563,
                                            columnNumber: 19
                                        }, this),
                                        thinkingSteps.map((step, i)=>{
                                            const isActive = i === thinkingSteps.length - 1;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 animate-in slide-in-from-left duration-300",
                                                style: {
                                                    animationDelay: `${i * 100}ms`,
                                                    opacity: isActive ? 1 : 0.6
                                                },
                                                children: [
                                                    isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-4 w-4 rounded-full border-2 border-current border-t-transparent animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                        lineNumber: 1576,
                                                        columnNumber: 27
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                        className: "h-4 w-4 text-green-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                        lineNumber: 1578,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs transition-all duration-300", isActive ? "text-foreground font-medium" : "text-muted-foreground/70"),
                                                        children: step
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                        lineNumber: 1580,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                lineNumber: 1567,
                                                columnNumber: 23
                                            }, this);
                                        })
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                    lineNumber: 1562,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                            lineNumber: 1546,
                            columnNumber: 13
                        }, this) : isLongResponse ? // Long response with collapsible summary
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    dangerouslySetInnerHTML: {
                                        __html: (isExpanded ? message.content : getSummary()).replace(/\[WORKFLOW_PLAN\][\s\S]*?\[\/WORKFLOW_PLAN\]/, '').replace(/\[REPORT_DATA\][\s\S]*?\[\/REPORT_DATA\]/, '')// Headers
                                        .replace(/### (.*?)$/gm, '<h4 class="text-[17px] font-semibold mt-2 mb-1 text-foreground">$1</h4>').replace(/## (.*?)$/gm, '<h3 class="text-[19px] font-semibold mt-3 mb-1 text-foreground">$1</h3>').replace(/# (.*?)$/gm, '<h2 class="text-[21px] font-bold mt-3 mb-2 text-foreground">$1</h2>')// Bold text
                                        .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')// Tables - convert simple markdown tables
                                        .replace(/\|(.*?)\|/g, (match, content)=>{
                                            const cells = content.split('|').map((cell)=>`<td class="border px-2 py-1 text-[15px]">${cell.trim()}</td>`).join('');
                                            return `<tr>${cells}</tr>`;
                                        })// Numbered lists
                                        .replace(/^(\d+)\.\s+(.*?)$/gm, '<div class="flex gap-2 my-1"><span class="text-primary font-medium min-w-[20px]">$1.</span><span>$2</span></div>')// Bullet points - better formatting
                                        .replace(/^[•\-\*]\s+(.*?)$/gm, '<div class="flex gap-2 my-1"><span class="text-primary">•</span><span>$1</span></div>')// Nested bullet points
                                        .replace(/^\s+[•\-\*]\s+(.*?)$/gm, '<div class="flex gap-2 my-1 ml-4"><span class="text-muted-foreground">◦</span><span>$1</span></div>')// Code blocks
                                        .replace(/`([^`]+)`/g, '<code class="bg-muted px-1 py-0.5 rounded text-[15px] font-mono">$1</code>')// Percentages and numbers highlighting
                                        .replace(/(\d+\.?\d*%)/g, '<span class="font-semibold text-green-600 dark:text-green-400">$1</span>').replace(/(\$[\d,]+)/g, '<span class="font-semibold text-blue-600 dark:text-blue-400">$1</span>')// Line breaks
                                        .replace(/\n\n/g, '</p><p class="mb-2">').replace(/\n/g, '<br />')// Wrap in paragraphs
                                        .replace(/^/, '<p class="mb-2">').replace(/$/, '</p>')
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                    lineNumber: 1595,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: ()=>setIsExpanded(!isExpanded),
                                    className: "mt-2 text-sm text-primary hover:text-primary/80",
                                    children: isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "16",
                                                height: "16",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                className: "mr-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "m18 15-6-6-6 6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                    lineNumber: 1639,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                lineNumber: 1638,
                                                columnNumber: 21
                                            }, this),
                                            "Show less"
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "16",
                                                height: "16",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                className: "mr-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "m6 9 6 6 6-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                    lineNumber: 1646,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                lineNumber: 1645,
                                                columnNumber: 21
                                            }, this),
                                            "Show more details"
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                    lineNumber: 1630,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                            lineNumber: 1594,
                            columnNumber: 13
                        }, this) : // Normal response
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            dangerouslySetInnerHTML: {
                                __html: message.content.replace(/\[WORKFLOW_PLAN\][\s\S]*?\[\/WORKFLOW_PLAN\]/, '').replace(/\[REPORT_DATA\][\s\S]*?\[\/REPORT_DATA\]/, '')// Headers
                                .replace(/### (.*?)$/gm, '<h4 class="text-[17px] font-semibold mt-2 mb-1 text-foreground">$1</h4>').replace(/## (.*?)$/gm, '<h3 class="text-[19px] font-semibold mt-3 mb-1 text-foreground">$1</h3>').replace(/# (.*?)$/gm, '<h2 class="text-[21px] font-bold mt-3 mb-2 text-foreground">$1</h2>')// Bold text
                                .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')// Tables - convert simple markdown tables
                                .replace(/\|(.*?)\|/g, (match, content)=>{
                                    const cells = content.split('|').map((cell)=>`<td class="border px-2 py-1 text-[15px]">${cell.trim()}</td>`).join('');
                                    return `<tr>${cells}</tr>`;
                                })// Numbered lists
                                .replace(/^(\d+)\.\s+(.*?)$/gm, '<div class="flex gap-2 my-1"><span class="text-primary font-medium min-w-[20px]">$1.</span><span>$2</span></div>')// Bullet points - better formatting
                                .replace(/^[•\-\*]\s+(.*?)$/gm, '<div class="flex gap-2 my-1"><span class="text-primary">•</span><span>$1</span></div>')// Nested bullet points
                                .replace(/^\s+[•\-\*]\s+(.*?)$/gm, '<div class="flex gap-2 my-1 ml-4"><span class="text-muted-foreground">◦</span><span>$1</span></div>')// Code blocks
                                .replace(/`([^`]+)`/g, '<code class="bg-muted px-1 py-0.5 rounded text-[15px] font-mono">$1</code>')// Percentages and numbers highlighting
                                .replace(/(\d+\.?\d*%)/g, '<span class="font-semibold text-green-600 dark:text-green-400">$1</span>').replace(/(\$[\d,]+)/g, '<span class="font-semibold text-blue-600 dark:text-blue-400">$1</span>')// Line breaks
                                .replace(/\n\n/g, '</p><p class="mb-2">').replace(/\n/g, '<br />')// Wrap in paragraphs
                                .replace(/^/, '<p class="mb-2">').replace(/$/, '</p>')
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                            lineNumber: 1655,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                        lineNumber: 1536,
                        columnNumber: 9
                    }, this),
                    message.visualization?.isShowing && message.visualization.data && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 rounded-lg border bg-card p-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$data$2d$visualizer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            data: message.visualization.data,
                            target: message.visualization.target,
                            isRealData: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                            lineNumber: 1696,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                        lineNumber: 1695,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 space-y-2",
                        children: [
                            message.requiresAPISetup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mt-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                            className: "h-5 w-5 text-blue-600 mt-0.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                            lineNumber: 1710,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm font-semibold text-blue-800 dark:text-blue-200 mb-2",
                                                    children: "🔑 API Configuration Required"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                    lineNumber: 1712,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-blue-700 dark:text-blue-300 mb-3",
                                                    children: "To use the AI-powered analysis features, please configure at least one API provider:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                    lineNumber: 1715,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        size: "sm",
                                                        className: "bg-blue-600 hover:bg-blue-700 text-white",
                                                        onClick: ()=>onSuggestionClick('Open API Settings'),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                                className: "h-3 w-3 mr-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                                lineNumber: 1724,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Configure API Keys"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                        lineNumber: 1719,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                    lineNumber: 1718,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                            lineNumber: 1711,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                    lineNumber: 1709,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                lineNumber: 1708,
                                columnNumber: 13
                            }, this),
                            message.showCapacityPlanning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$inline$2d$capacity$2d$planning$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InlineCapacityPlanning"], {
                                    messageId: message.id
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                    lineNumber: 1736,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                lineNumber: 1735,
                                columnNumber: 13
                            }, this),
                            message.suggestions && message.suggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-muted/20 rounded-lg p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[15px] font-medium mb-2 text-muted-foreground flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                lineNumber: 1744,
                                                columnNumber: 17
                                            }, this),
                                            "Suggested Next Steps"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                        lineNumber: 1743,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: message.suggestions.map((suggestion, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "sm",
                                                variant: suggestion.includes('API') || suggestion.includes('Settings') ? 'default' : 'outline',
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[15px] h-9", suggestion.includes('API') || suggestion.includes('Settings') && "bg-blue-600 hover:bg-blue-700 text-white"),
                                                onClick: ()=>onSuggestionClick(suggestion),
                                                children: [
                                                    suggestion.includes('Settings') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                        className: "h-4 w-4 mr-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                        lineNumber: 1759,
                                                        columnNumber: 57
                                                    }, this),
                                                    suggestion
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                lineNumber: 1749,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                        lineNumber: 1747,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                lineNumber: 1742,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: [
                                    message.visualization && !message.visualization.isShowing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "sm",
                                        variant: "outline",
                                        onClick: ()=>onVisualizeClick(message.id),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2d$increasing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart$3e$__["BarChart"], {
                                                className: "mr-2 h-3 w-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                lineNumber: 1771,
                                                columnNumber: 17
                                            }, this),
                                            message.visualization.data.some((d)=>d.Forecast !== undefined) ? 'Visualize Actual & Forecast' : 'Visualize Data'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                        lineNumber: 1770,
                                        columnNumber: 15
                                    }, this),
                                    message.canGenerateReport && onGenerateReport && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "sm",
                                        variant: "default",
                                        className: "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700",
                                        onClick: ()=>onGenerateReport(message.id),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                className: "mr-2 h-3 w-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                lineNumber: 1784,
                                                columnNumber: 17
                                            }, this),
                                            "Generate Report"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                        lineNumber: 1778,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                lineNumber: 1768,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                        lineNumber: 1705,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                lineNumber: 1468,
                columnNumber: 7
            }, this),
            isUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                className: "h-8 w-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {}, void 0, false, {
                        fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                        lineNumber: 1794,
                        columnNumber: 27
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                    lineNumber: 1794,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                lineNumber: 1793,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
        lineNumber: 1456,
        columnNumber: 5
    }, this);
}
_s(EnhancedChatBubble, "oRBLatMOhHaIbWeDZpkD3TQp/5c=");
_c = EnhancedChatBubble;
function EnhancedChatPanel({ className }) {
    _s1();
    const { state, dispatch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$app$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    const scrollAreaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const processedPromptsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const [performance, setPerformance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showScrollButton, setShowScrollButton] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isUserScrolling, setIsUserScrolling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasNewResponse, setHasNewResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAPISettings, setShowAPISettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showFollowUpQuestions, setShowFollowUpQuestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [followUpRequirements, setFollowUpRequirements] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pendingUserMessage, setPendingUserMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [questionResponses, setQuestionResponses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Map());
    const [showModelTrainingForm, setShowModelTrainingForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pendingForecastMessage, setPendingForecastMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [modelConfig, setModelConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Initialize enhanced chat handler
    if (!enhancedChatHandler) {
        enhancedChatHandler = new EnhancedMultiAgentChatHandler(dispatch);
    }
    // Auto-scroll: ONLY scroll when user is at bottom or sends a message
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EnhancedChatPanel.useEffect": ()=>{
            const scrollElement = scrollAreaRef.current?.querySelector('[data-radix-scroll-area-viewport]');
            if (!scrollElement) return;
            const lastMessage = state.messages[state.messages.length - 1];
            const isUserMessage = lastMessage?.role === 'user';
            const isNearBottom = scrollElement.scrollHeight - scrollElement.scrollTop - scrollElement.clientHeight < 50;
            // Detect when agent finishes responding (was typing, now not typing)
            const wasTyping = lastMessage?.isTyping === false && lastMessage?.role === 'assistant';
            if (wasTyping && isUserScrolling) {
                setHasNewResponse(true); // Show "Response ready" indicator
                // Auto-revert to normal button after 5 seconds
                const timeout = setTimeout({
                    "EnhancedChatPanel.useEffect.timeout": ()=>{
                        setHasNewResponse(false);
                    }
                }["EnhancedChatPanel.useEffect.timeout"], 5000);
                return ({
                    "EnhancedChatPanel.useEffect": ()=>clearTimeout(timeout)
                })["EnhancedChatPanel.useEffect"];
            }
            // STRICT: Only auto-scroll in these specific cases
            if (isUserMessage) {
                // Always scroll for user messages
                scrollElement.scrollTo({
                    top: scrollElement.scrollHeight,
                    behavior: 'smooth'
                });
                setShowScrollButton(false);
                setHasNewResponse(false);
                setIsUserScrolling(false);
            } else if (isNearBottom && !isUserScrolling) {
                // Only auto-scroll if user is already at bottom AND not actively scrolling
                scrollElement.scrollTo({
                    top: scrollElement.scrollHeight,
                    behavior: 'smooth'
                });
                setShowScrollButton(false);
                setHasNewResponse(false);
            } else if (!isNearBottom) {
                // User is scrolled up - show button, don't auto-scroll
                setShowScrollButton(true);
            }
        }
    }["EnhancedChatPanel.useEffect"], [
        state.messages
    ]);
    // Detect user scrolling - immediately flag when scrolling up
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EnhancedChatPanel.useEffect": ()=>{
            const scrollElement = scrollAreaRef.current?.querySelector('[data-radix-scroll-area-viewport]');
            if (!scrollElement) return;
            let lastScrollTop = scrollElement.scrollTop;
            let scrollTimeout;
            const handleScroll = {
                "EnhancedChatPanel.useEffect.handleScroll": ()=>{
                    const currentScrollTop = scrollElement.scrollTop;
                    const isNearBottom = scrollElement.scrollHeight - scrollElement.scrollTop - scrollElement.clientHeight < 50;
                    // Immediately detect upward scrolling (even small movements)
                    if (currentScrollTop < lastScrollTop - 2) {
                        // User scrolled up - immediately pause auto-scroll
                        setIsUserScrolling(true);
                        setShowScrollButton(!isNearBottom);
                    }
                    // Clear timeout and check if at bottom
                    clearTimeout(scrollTimeout);
                    scrollTimeout = setTimeout({
                        "EnhancedChatPanel.useEffect.handleScroll": ()=>{
                            // If at bottom, resume auto-scroll after user stops scrolling
                            if (isNearBottom) {
                                setShowScrollButton(false);
                                setHasNewResponse(false);
                                setIsUserScrolling(false);
                            }
                        }
                    }["EnhancedChatPanel.useEffect.handleScroll"], 300); // Wait 300ms after scroll stops
                    lastScrollTop = currentScrollTop;
                }
            }["EnhancedChatPanel.useEffect.handleScroll"];
            scrollElement.addEventListener('scroll', handleScroll, {
                passive: true
            });
            return ({
                "EnhancedChatPanel.useEffect": ()=>{
                    scrollElement.removeEventListener('scroll', handleScroll);
                    clearTimeout(scrollTimeout);
                }
            })["EnhancedChatPanel.useEffect"];
        }
    }["EnhancedChatPanel.useEffect"], []);
    // Function to scroll to bottom
    const scrollToBottom = ()=>{
        const scrollElement = scrollAreaRef.current?.querySelector('[data-radix-scroll-area-viewport]');
        if (scrollElement) {
            scrollElement.scrollTo({
                top: scrollElement.scrollHeight,
                behavior: 'smooth'
            });
            setShowScrollButton(false);
            setIsUserScrolling(false);
        }
    };
    // Handle queued prompts - with ref-based duplicate prevention
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EnhancedChatPanel.useEffect": ()=>{
            if (state.queuedUserPrompt && !state.isProcessing) {
                const prompt = state.queuedUserPrompt;
                // Use ref to track if we've already processed this exact prompt
                if (!processedPromptsRef.current.has(prompt)) {
                    processedPromptsRef.current.add(prompt);
                    submitMessage(prompt);
                    // Clean up old prompts from ref after 5 seconds
                    setTimeout({
                        "EnhancedChatPanel.useEffect": ()=>{
                            processedPromptsRef.current.delete(prompt);
                        }
                    }["EnhancedChatPanel.useEffect"], 5000);
                }
                dispatch({
                    type: 'CLEAR_QUEUED_PROMPT'
                });
            }
        }
    }["EnhancedChatPanel.useEffect"], [
        state.queuedUserPrompt
    ]);
    // File upload handler with validation
    const handleFileUpload = (event)=>{
        const file = event.target.files?.[0];
        if (!file) return;
        // Validate file type and size
        const validTypes = [
            '.csv',
            '.xlsx',
            '.xls'
        ];
        const fileExtension = file.name.toLowerCase().slice(file.name.lastIndexOf('.'));
        if (!validTypes.includes(fileExtension)) {
            dispatch({
                type: 'ADD_MESSAGE',
                payload: {
                    id: crypto.randomUUID(),
                    role: 'assistant',
                    content: 'Please upload a CSV or Excel file (.csv, .xlsx, .xls)',
                    agentType: 'general'
                }
            });
            return;
        }
        if (file.size > 10 * 1024 * 1024) {
            dispatch({
                type: 'ADD_MESSAGE',
                payload: {
                    id: crypto.randomUUID(),
                    role: 'assistant',
                    content: 'File size must be less than 10MB',
                    agentType: 'general'
                }
            });
            return;
        }
        if (state.selectedLob) {
            dispatch({
                type: 'UPLOAD_DATA',
                payload: {
                    lobId: state.selectedLob.id,
                    file
                }
            });
        } else {
            dispatch({
                type: 'ADD_MESSAGE',
                payload: {
                    id: crypto.randomUUID(),
                    role: 'assistant',
                    content: 'Please select a Line of Business before uploading data.',
                    agentType: 'onboarding'
                }
            });
        }
    };
    // Handle chat commands for BU/LOB creation and data upload
    const handleChatCommand = async (command, originalMessage)=>{
        // Add user message first
        dispatch({
            type: 'ADD_MESSAGE',
            payload: {
                id: crypto.randomUUID(),
                role: 'user',
                content: originalMessage
            }
        });
        switch(command.intent){
            case 'create_bu':
                await handleBUCreationCommand(command, originalMessage);
                break;
            case 'create_lob':
                await handleLOBCreationCommand(command, originalMessage);
                break;
            case 'provide_info':
                await handleInfoProvisionCommand(command, originalMessage);
                break;
            case 'upload_data':
                await handleDataUploadCommand(command, originalMessage);
                break;
            default:
                // Fallback to normal processing
                await continueWithAnalysis(originalMessage);
        }
    };
    // Handle BU creation through chat - simplified to just open the dialog
    const handleBUCreationCommand = async (command, originalMessage)=>{
        // Instead of conversational flow, just guide user to the dialog
        dispatch({
            type: 'ADD_MESSAGE',
            payload: {
                id: crypto.randomUUID(),
                role: 'assistant',
                content: `✅ **Let's Create a Business Unit!**\n\nI'll open the Business Unit creation form for you. Please fill in the following:\n\n• **Name** (required) - e.g., "Premium Services"\n• **Display Name** - How it appears in the UI\n• **Code** - Short identifier (auto-generated if empty)\n• **Description** - What this BU is for\n• **Start Date** - When it begins\n\n**Click the "New Business Unit" button** in the BU/LOB selector (top-left) to open the form.\n\nOr I can create it for you if you provide:\n• Business Unit Name\n• Description (optional)`,
                suggestions: [
                    'Open BU/LOB Selector',
                    'Create BU: Premium Services',
                    'Help me understand Business Units'
                ],
                agentType: 'onboarding'
            }
        });
    };
    // Handle LOB creation through chat
    const handleLOBCreationCommand = async (command, originalMessage)=>{
        if (state.businessUnits.length === 0) {
            dispatch({
                type: 'ADD_MESSAGE',
                payload: {
                    id: crypto.randomUUID(),
                    role: 'assistant',
                    content: `❌ **No Business Units Available**\n\nYou need to create a Business Unit first before adding Lines of Business.\n\nWould you like me to help you create a Business Unit?`,
                    suggestions: [
                        'Create Business Unit',
                        'Help me get started'
                    ],
                    agentType: 'onboarding'
                }
            });
            return;
        }
        const conversationState = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chat$2d$command$2d$processor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatCommandProcessor"].startConversation('create_lob', 'default');
        // Extract any provided information from the command
        if (command.parameters.name) {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chat$2d$command$2d$processor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatCommandProcessor"].updateConversation('default', 'name', command.parameters.name);
        }
        if (command.parameters.description) {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chat$2d$command$2d$processor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatCommandProcessor"].updateConversation('default', 'description', command.parameters.description);
        }
        // Generate next question or complete creation
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chat$2d$command$2d$processor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatCommandProcessor"].isConversationComplete('default')) {
            const lobData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chat$2d$command$2d$processor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatCommandProcessor"].getConversationData('default');
            // Handle business unit selection
            let businessUnitId = lobData.businessUnitId;
            if (businessUnitId && businessUnitId.startsWith('option_')) {
                const optionIndex = parseInt(businessUnitId.replace('option_', '')) - 1;
                businessUnitId = state.businessUnits[optionIndex]?.id;
            }
            const completeData = {
                name: lobData.name,
                description: lobData.description || `Line of Business for ${lobData.name}`,
                code: lobData.code || lobData.name.toUpperCase().replace(/\s+/g, '_'),
                businessUnitId: businessUnitId || state.businessUnits[0].id,
                startDate: lobData.startDate || new Date()
            };
            // Create the LOB
            dispatch({
                type: 'ADD_LOB',
                payload: completeData
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chat$2d$command$2d$processor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatCommandProcessor"].clearConversation('default');
            // Generate professional success response
            const parentBU = state.businessUnits.find((bu)=>bu.id === completeData.businessUnitId);
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agent$2d$response$2d$generator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["agentResponseGenerator"].generateResponse({
                intent: 'lob_created',
                data: {
                    ...completeData,
                    parentBUName: parentBU?.name || 'Selected Business Unit',
                    totalLOBs: state.businessUnits.reduce((total, bu)=>total + bu.lobs.length, 0) + 1
                }
            });
            dispatch({
                type: 'ADD_MESSAGE',
                payload: {
                    id: crypto.randomUUID(),
                    role: 'assistant',
                    content: response.content,
                    suggestions: response.nextActions.map((action)=>action.text),
                    agentType: 'onboarding'
                }
            });
        } else {
            // Ask for missing information
            const nextQuestion = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chat$2d$command$2d$processor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatCommandProcessor"].generateNextQuestion('default', state.businessUnits);
            dispatch({
                type: 'ADD_MESSAGE',
                payload: {
                    id: crypto.randomUUID(),
                    role: 'assistant',
                    content: `✅ **Creating Line of Business**\n\n${nextQuestion}`,
                    agentType: 'onboarding'
                }
            });
        }
    };
    // Handle information provision in ongoing conversations
    const handleInfoProvisionCommand = async (command, originalMessage)=>{
        const conversationState = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chat$2d$command$2d$processor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatCommandProcessor"].getConversationState('default');
        if (!conversationState) {
            // No ongoing conversation, process normally
            await continueWithAnalysis(originalMessage);
            return;
        }
        // Update conversation with provided information
        const entity = command.entities[0];
        if (entity) {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chat$2d$command$2d$processor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatCommandProcessor"].updateConversation('default', entity.type, entity.value);
        }
        // Continue with the appropriate creation flow
        if (conversationState.currentIntent === 'create_bu') {
            await handleBUCreationCommand(command, originalMessage);
        } else if (conversationState.currentIntent === 'create_lob') {
            await handleLOBCreationCommand(command, originalMessage);
        }
    };
    // Handle data upload through chat
    const handleDataUploadCommand = async (command, originalMessage)=>{
        if (!state.selectedLob) {
            dispatch({
                type: 'ADD_MESSAGE',
                payload: {
                    id: crypto.randomUUID(),
                    role: 'assistant',
                    content: `❌ **No Line of Business Selected**\n\nPlease select a Line of Business first before uploading data.\n\nYou can:\n• Select an existing LOB from the dropdown\n• Create a new LOB by saying "create line of business"`,
                    suggestions: [
                        'Create Line of Business',
                        'Help me select LOB'
                    ],
                    agentType: 'onboarding'
                }
            });
            return;
        }
        // Trigger file upload dialog
        dispatch({
            type: 'ADD_MESSAGE',
            payload: {
                id: crypto.randomUUID(),
                role: 'assistant',
                content: `📤 **Ready to Upload Data**\n\nI'll help you upload data to **${state.selectedLob.name}**.\n\nPlease click the "Upload Data" button below or drag and drop your CSV/Excel file.\n\n**Required columns:**\n• Date\n• Value (Target column)\n• Orders (Exogenous column - optional)\n• Forecast (optional)`,
                suggestions: [
                    'Upload Data',
                    'Download Template',
                    'What format do I need?'
                ],
                agentType: 'onboarding'
            }
        });
        // Auto-trigger file input after a short delay
        setTimeout(()=>{
            const fileInput = document.querySelector('input[type="file"]');
            if (fileInput) {
                fileInput.click();
            }
        }, 1000);
    };
    // Process business follow-up questions with context
    const processBusinessQuestion = async (messageText, hints)=>{
        dispatch({
            type: 'SET_PROCESSING',
            payload: true
        });
        try {
            const agent = ENHANCED_AGENTS['business_insights'];
            // Build enhanced context with forecast and actual data
            const forecastData = state.selectedLob?.timeSeriesData?.filter((d)=>d.Forecast && d.Forecast > 0) || [];
            const actualData = state.selectedLob?.timeSeriesData?.filter((d)=>!d.Forecast || d.Forecast === 0) || [];
            const forecastMetrics = state.selectedLob?.forecastMetrics;
            const contextPrompt = `
CONTEXT:
Business Unit: ${state.selectedBu?.name || 'N/A'}
Line of Business: ${state.selectedLob?.name || 'N/A'}

FORECAST RESULTS:
${forecastMetrics ? `
• Model: ${forecastMetrics.modelName}
• Accuracy: ${forecastMetrics.accuracy.toFixed(1)}%
• MAPE: ${forecastMetrics.mape.toFixed(1)}%
• Forecast Horizon: ${forecastMetrics.forecastHorizon}
• Confidence Level: ${forecastMetrics.confidenceLevel}%
` : 'No forecast generated yet'}

FORECAST DATA:
${forecastData.length > 0 ? `
• Forecast Points: ${forecastData.length}
• Forecast Range: ${Math.min(...forecastData.map((d)=>d.Forecast || 0)).toFixed(0)} - ${Math.max(...forecastData.map((d)=>d.Forecast || 0)).toFixed(0)}
• Trend: ${forecastData[forecastData.length - 1]?.Forecast > forecastData[0]?.Forecast ? 'Increasing' : 'Decreasing'}
` : 'No forecast data available'}

ACTUAL DATA:
${actualData.length > 0 ? `
• Historical Points: ${actualData.length}
• Value Range: ${Math.min(...actualData.map((d)=>d.Value || 0)).toFixed(0)} - ${Math.max(...actualData.map((d)=>d.Value || 0)).toFixed(0)}
• Latest Value: ${actualData[actualData.length - 1]?.Value || 0}
` : 'No actual data available'}

ANALYSIS HINTS:
${hints.map((h)=>`• ${h.replace(/_/g, ' ')}`).join('\n')}

USER QUESTION:
${messageText}

Provide a specific, actionable response based on the actual data and forecast results above.`;
            // Call API with business insights agent
            const completion = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$enhanced$2d$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enhancedAPIClient"].createChatCompletion({
                messages: [
                    {
                        role: 'system',
                        content: agent.systemPrompt
                    },
                    {
                        role: 'user',
                        content: contextPrompt
                    }
                ],
                model: 'gpt-4o-mini',
                temperature: 0.7,
                max_tokens: 1500,
                useCache: false // Don't cache business questions as they're context-specific
            });
            const response = completion.choices[0].message.content ?? "";
            // Add response with suggestions
            dispatch({
                type: 'ADD_MESSAGE',
                payload: {
                    id: crypto.randomUUID(),
                    role: 'assistant',
                    content: response,
                    agentType: 'business_insights',
                    suggestions: [
                        'What if demand increases 20%?',
                        'Compare forecast vs actual',
                        'Show me business outcomes',
                        'What decisions should I take?',
                        'Run scenario analysis',
                        'Visualize actual vs forecast'
                    ]
                }
            });
        } catch (error) {
            console.error('Business question error:', error);
            dispatch({
                type: 'ADD_MESSAGE',
                payload: {
                    id: crypto.randomUUID(),
                    role: 'assistant',
                    content: `❌ **Error Processing Question**\n\n${error.message}\n\nPlease try rephrasing your question or check your API configuration.`,
                    suggestions: [
                        'Try again',
                        'Check API settings',
                        'Get help'
                    ],
                    agentType: 'general'
                }
            });
        } finally{
            dispatch({
                type: 'SET_PROCESSING',
                payload: false
            });
        }
    };
    // Enhanced submit message handler with follow-up questions and chat commands
    const submitMessage = async (messageText)=>{
        if (!messageText.trim()) return;
        // Add user message ONCE at the start (before any branching)
        dispatch({
            type: 'ADD_MESSAGE',
            payload: {
                id: crypto.randomUUID(),
                role: 'user',
                content: messageText
            }
        });
        // Check if this is a forecast generation request - show model training form
        if (/(run|start|generate|create|complete).*forecast/i.test(messageText) || /forecast.*(workflow|analysis)/i.test(messageText)) {
            setPendingForecastMessage(messageText);
            setShowModelTrainingForm(true);
            dispatch({
                type: 'ADD_MESSAGE',
                payload: {
                    id: crypto.randomUUID(),
                    role: 'assistant',
                    content: `📋 **Forecast Configuration**\n\nBefore we run the complete 6-agent forecasting workflow, let's configure your forecast parameters. Please fill out the form below to customize your analysis.`,
                    agentType: 'onboarding'
                }
            });
            return; // Don't proceed yet - wait for form submission
        }
        // Check if this is a business follow-up question (decisions, outcomes, what-if scenarios)
        const businessQuestionRouter = await __turbopack_context__.r("[project]/src/lib/business-question-router.ts [app-client] (ecmascript, async loader)")(__turbopack_context__.i).then((m)=>m.businessQuestionRouter);
        const questionContext = {
            hasForecastResults: state.analyzedData?.hasForecasting || false,
            hasActualData: state.selectedLob?.hasData || false,
            forecastMetrics: state.selectedLob?.forecastMetrics,
            lastAnalysisType: state.analyzedData?.lastAnalysisType
        };
        const routing = businessQuestionRouter.route(messageText, questionContext);
        // If it's a business question, check if we have required context
        if (routing.agent === 'business_insights') {
            const contextCheck = businessQuestionRouter.hasRequiredContext(routing, questionContext);
            if (!contextCheck.sufficient) {
                // Missing required context - inform user
                dispatch({
                    type: 'ADD_MESSAGE',
                    payload: {
                        id: crypto.randomUUID(),
                        role: 'assistant',
                        content: `💼 **Business Analysis Request**\n\n${businessQuestionRouter.generateMissingContextMessage(contextCheck.missing)}`,
                        suggestions: contextCheck.missing.includes('forecast results') ? [
                            'Generate forecast',
                            'Upload data',
                            'Help me get started'
                        ] : [
                            'Upload data',
                            'Select different LOB',
                            'Help me get started'
                        ],
                        agentType: 'onboarding'
                    }
                });
                return;
            }
            // We have context - route to business insights agent
            // Process with business insights agent
            await processBusinessQuestion(messageText, routing.hints);
            return;
        }
        // Check for capacity planning requests
        const capacityPlanningKeywords = /calculate\s+(required\s+)?(head\s?count|hc|capacity)|plan\s+capacity|capacity\s+planning|workforce\s+planning|staffing\s+needs/i;
        if (capacityPlanningKeywords.test(messageText)) {
            // Check if capacity planning is enabled
            if (!state.capacityPlanning.enabled) {
                dispatch({
                    type: 'ADD_MESSAGE',
                    payload: {
                        id: crypto.randomUUID(),
                        role: 'assistant',
                        content: `📊 **Capacity Planning Request**\n\nI can help you calculate required headcount based on your forecast! However, capacity planning requires forecasted data first.\n\n**Current Status:**\n• Forecasting: ${state.analyzedData.hasForecasting ? '✅ Complete' : '❌ Not completed'}\n• Capacity Planning: ${state.capacityPlanning.enabled ? '✅ Ready' : '⏳ Waiting for forecast'}\n\n**Next Steps:**\n${state.analyzedData.hasForecasting ? '• Scroll down to the **"📊 Step 7: Capacity Planning"** section below\n• Review the default assumptions or customize them\n• Click **"Calculate Required HC"** to get your staffing needs' : '• First, run a forecast analysis to predict future volumes\n• Then capacity planning will unlock automatically'}`,
                        suggestions: state.analyzedData.hasForecasting ? [
                            'Show me the capacity planning section',
                            'What assumptions can I configure?',
                            'Explain the HC formula'
                        ] : [
                            'Run forecast analysis',
                            'Generate predictions',
                            'Help me get started'
                        ],
                        agentType: 'onboarding'
                    }
                });
                return;
            }
            // Capacity planning is enabled - show inline component
            dispatch({
                type: 'ADD_MESSAGE',
                payload: {
                    id: crypto.randomUUID(),
                    role: 'assistant',
                    content: `📊 **Capacity Planning Ready!**\n\nYour forecast is complete! Use the interactive capacity planning tool below to calculate required headcount.\n\n**What you can do:**\n• Review and customize the pre-configured assumptions\n• Adjust parameters like AHT, Occupancy, Backlog, etc.\n• Calculate required HC based on your forecasted volumes\n• Export results as CSV for further analysis\n\n**Date Range:** ${state.capacityPlanning.dateRange.startDate ? new Date(state.capacityPlanning.dateRange.startDate).toLocaleDateString() : 'Auto-populated'} - ${state.capacityPlanning.dateRange.endDate ? new Date(state.capacityPlanning.dateRange.endDate).toLocaleDateString() : 'Auto-populated'}`,
                    suggestions: [
                        'Explain the HC formula',
                        'What assumptions should I customize?',
                        'Show example calculation'
                    ],
                    showCapacityPlanning: true,
                    agentType: 'onboarding'
                }
            });
            return;
        }
        // First, check for chat commands (BU/LOB creation, data upload)
        const chatCommand = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chat$2d$command$2d$processor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatCommandProcessor"].parseCommand(messageText, 'default');
        if (chatCommand.intent !== 'unknown' && chatCommand.confidence > 0.7) {
            await handleChatCommand(chatCommand, messageText);
            return;
        }
        // Check if follow-up questions are needed (only for customizable scenarios)
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$follow$2d$up$2d$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["followUpQuestionsService"].needsFollowUpQuestions(messageText, state)) {
            const requirements = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$follow$2d$up$2d$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["followUpQuestionsService"].generateFollowUpQuestions(messageText, state);
            if (requirements) {
                // Show follow-up questions instead of proceeding directly
                setFollowUpRequirements(requirements);
                setPendingUserMessage(messageText);
                setShowFollowUpQuestions(true);
                // Add assistant response explaining follow-up questions with better context
                const analysisTypeFormatted = requirements.analysisType.replace('_', ' ').charAt(0).toUpperCase() + requirements.analysisType.replace('_', ' ').slice(1);
                // Customize message based on analysis type
                let customizationOptions = '';
                if (requirements.analysisType === 'forecasting') {
                    customizationOptions = `**What I can customize:**
• Model selection (Prophet, XGBoost, LightGBM, etc.)
• Forecast horizon and confidence levels
• Feature engineering approaches
• Business context and objectives`;
                } else if (requirements.analysisType === 'data_exploration') {
                    customizationOptions = `**What I can customize:**
• Analysis depth (basic overview vs detailed insights)
• Specific metrics to focus on
• Outlier detection sensitivity
• Visualization preferences`;
                } else if (requirements.analysisType === 'business_insights') {
                    customizationOptions = `**What I can customize:**
• Business objectives and KPIs
• Decision-making criteria
• Risk tolerance levels
• Strategic focus areas`;
                } else {
                    customizationOptions = `**What I can customize:**
• Analysis parameters and thresholds
• Output format and detail level
• Specific areas of focus
• Business context`;
                }
                dispatch({
                    type: 'ADD_MESSAGE',
                    payload: {
                        id: crypto.randomUUID(),
                        role: 'assistant',
                        content: `I see you're requesting **${analysisTypeFormatted}** - this has several customization options that can significantly improve your results!

${customizationOptions}

**Estimated Time:** ${requirements.estimatedTime}

Would you like to customize these parameters, or should I use smart defaults?`,
                        agentType: 'onboarding',
                        suggestions: [
                            'Customize parameters',
                            'Use smart defaults',
                            'Tell me more about options'
                        ]
                    }
                });
                return;
            }
        }
        dispatch({
            type: 'SET_PROCESSING',
            payload: true
        });
        dispatch({
            type: 'CLEAR_THINKING_STEPS'
        });
        // If no follow-up questions, proceed with regular analysis
        await continueWithAnalysis(messageText);
    };
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userInput = formData.get('message');
        e.currentTarget.reset();
        submitMessage(userInput);
    };
    const handleFollowUpSubmit = async (responses)=>{
        if (!followUpRequirements || !pendingUserMessage) return;
        // Generate enhanced prompt with follow-up responses
        const enhancedPrompt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$follow$2d$up$2d$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["followUpQuestionsService"].generateAnalysisPrompt(followUpRequirements.analysisType, responses, pendingUserMessage);
        // Close dialog and proceed with analysis
        setShowFollowUpQuestions(false);
        setFollowUpRequirements(null);
        // Add response summary to chat
        const responseCount = responses.length;
        dispatch({
            type: 'ADD_MESSAGE',
            payload: {
                id: crypto.randomUUID(),
                role: 'assistant',
                content: `✅ Thank you! I've received your ${responseCount} response${responseCount !== 1 ? 's' : ''}. Now proceeding with your customized **${followUpRequirements.analysisType.replace('_', ' ')}** analysis...`,
                agentType: 'onboarding'
            }
        });
        // Clear state and proceed with enhanced analysis
        setPendingUserMessage('');
        await continueWithAnalysis(enhancedPrompt);
    };
    const handleFollowUpSkip = async ()=>{
        if (!pendingUserMessage) return;
        setShowFollowUpQuestions(false);
        setFollowUpRequirements(null);
        // Add skip message to chat
        dispatch({
            type: 'ADD_MESSAGE',
            payload: {
                id: crypto.randomUUID(),
                role: 'assistant',
                content: `Proceeding with default analysis settings for your **${followUpRequirements?.analysisType.replace('_', ' ')}** request...`,
                agentType: 'onboarding'
            }
        });
        // Continue with original message
        await continueWithAnalysis(pendingUserMessage);
        setPendingUserMessage('');
    };
    const handleModelConfigSubmit = async (config)=>{
        setModelConfig(config);
        setShowModelTrainingForm(false);
        // Now proceed with the forecast using the config
        await proceedWithForecast(pendingForecastMessage, config);
    };
    const proceedWithForecast = async (messageText, config)=>{
        dispatch({
            type: 'SET_PROCESSING',
            payload: true
        });
        dispatch({
            type: 'CLEAR_THINKING_STEPS'
        });
        // Add loading status message with reduced opacity
        const loadingMessageId = crypto.randomUUID();
        dispatch({
            type: 'ADD_MESSAGE',
            payload: {
                id: loadingMessageId,
                role: 'assistant',
                content: `⏳ **Preparing Forecast Analysis...**

<div style="opacity: 0.6;">

**Configuration:**
• Models: ${config.models.map((m)=>m.charAt(0).toUpperCase() + m.slice(1)).join(', ')}
• Forecast Horizon: ${config.forecastHorizon} ${config.forecastUnit}
• Confidence Levels: ${config.confidenceLevels.join('%, ')}%
• Features: ${[
                    config.includeHolidayEffects && 'Holiday Effects',
                    config.includeSeasonality && 'Seasonality',
                    config.featureEngineering.lagFeatures && 'Lag Features',
                    config.featureEngineering.rollingAverages && 'Rolling Averages',
                    config.featureEngineering.trendFeatures && 'Trend Features'
                ].filter(Boolean).join(', ')}

**Workflow Steps:**
• Step 1: Analyzing data patterns and quality...
• Step 2: Preprocessing and feature engineering...
• Step 3: Training ${config.models.length} model(s)...
• Step 4: Evaluating model performance...
• Step 5: Generating ${config.forecastHorizon} ${config.forecastUnit} forecast...
• Step 6: Creating insights and visualizations...

</div>

*This may take 2-3 minutes. Please wait...*`,
                agentType: 'onboarding',
                isLoading: true
            }
        });
        // Set up 6-step workflow
        const workflow = [
            {
                id: 'step-1',
                name: 'Data Analysis (EDA)',
                status: 'pending',
                dependencies: [],
                estimatedTime: '30s',
                details: 'Analyzing patterns, trends, and data quality',
                agent: 'Data Explorer'
            },
            {
                id: 'step-2',
                name: 'Data Preprocessing',
                status: 'pending',
                dependencies: [
                    'step-1'
                ],
                estimatedTime: '25s',
                details: 'Cleaning data, handling missing values, feature engineering',
                agent: 'Data Engineer'
            },
            {
                id: 'step-3',
                name: 'Model Training',
                status: 'pending',
                dependencies: [
                    'step-2'
                ],
                estimatedTime: '90s',
                details: `Training models: ${config.models.join(', ')}`,
                agent: 'ML Engineer'
            },
            {
                id: 'step-4',
                name: 'Model Testing & Evaluation',
                status: 'pending',
                dependencies: [
                    'step-3'
                ],
                estimatedTime: '30s',
                details: 'Testing accuracy and calculating MAPE, RMSE, R² scores',
                agent: 'Model Validator'
            },
            {
                id: 'step-5',
                name: 'Generate Forecast',
                status: 'pending',
                dependencies: [
                    'step-4'
                ],
                estimatedTime: '35s',
                details: `Creating ${config.forecastHorizon} ${config.forecastUnit} forecast with ${config.confidenceLevels.join('%, ')}% confidence intervals`,
                agent: 'Forecast Analyst'
            },
            {
                id: 'step-6',
                name: 'Dashboard Generation',
                status: 'pending',
                dependencies: [
                    'step-5'
                ],
                estimatedTime: '15s',
                details: 'Preparing visualizations and business insights',
                agent: 'Business Analyst'
            }
        ];
        dispatch({
            type: 'SET_WORKFLOW',
            payload: workflow
        });
        try {
            // Get LOB data
            const selectedLob = state.selectedLob;
            if (!selectedLob?.timeSeriesData || selectedLob.timeSeriesData.length === 0) {
                throw new Error('No data available for forecasting. Please upload data first.');
            }
            const filteredData = selectedLob.timeSeriesData;
            // USE SEQUENTIAL WORKFLOW - This ensures all 6 agents run together properly
            dispatch({
                type: 'ADD_THINKING_STEP',
                payload: '🚀 Initializing 6-agent sequential workflow...'
            });
            const sequentialWorkflow = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sequential$2d$workflow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SequentialAgentWorkflow"](state, filteredData);
            // Update workflow steps as they progress
            for(let i = 0; i < workflow.length; i++){
                dispatch({
                    type: 'UPDATE_WORKFLOW_STEP',
                    payload: {
                        id: workflow[i].id,
                        status: 'active'
                    }
                });
                dispatch({
                    type: 'ADD_THINKING_STEP',
                    payload: `${workflow[i].agent} working...`
                });
                await new Promise((resolve)=>setTimeout(resolve, 800)); // Visual feedback
                dispatch({
                    type: 'UPDATE_WORKFLOW_STEP',
                    payload: {
                        id: workflow[i].id,
                        status: 'completed'
                    }
                });
                dispatch({
                    type: 'ADD_THINKING_STEP',
                    payload: `✅ ${workflow[i].agent} complete`
                });
            }
            const workflowResult = await sequentialWorkflow.executeCompleteWorkflow();
            // Extract forecast metrics from workflow results
            const modelResults = workflowResult.workflowState.modelResults;
            const forecastResults = workflowResult.workflowState.forecastResults;
            // Update LOB with forecast metrics from the actual workflow
            if (modelResults && forecastResults && state.selectedLob) {
                // Use actual metrics from forecast results
                const forecastMetrics = {
                    modelName: forecastResults.metrics?.modelName || modelResults.bestModel || 'XGBoost',
                    accuracy: Math.max(85, Math.min(98, 100 - (forecastResults.metrics?.mape || parseFloat(modelResults.performance.mape)))),
                    mape: forecastResults.metrics?.mape || parseFloat(modelResults.performance.mape),
                    rmse: forecastResults.metrics?.rmse || Math.floor((state.selectedLob.timeSeriesData?.[0]?.Value || 1000) * 0.15),
                    r2: forecastResults.metrics?.r2 || parseFloat(modelResults.performance.r2),
                    forecastHorizon: `${config.forecastHorizon} ${config.forecastUnit}`,
                    trainedDate: new Date(),
                    confidenceLevel: forecastResults.metrics?.confidenceLevel || config.confidenceLevels[0] || 95
                };
                // Generate forecast time series data
                const actualData = state.selectedLob.timeSeriesData || [];
                const lastDate = new Date(actualData[actualData.length - 1]?.Date || new Date());
                const lastValue = actualData[actualData.length - 1]?.Value || 1000;
                // Generate forecast points based on config
                const forecastPoints = [];
                const daysToForecast = config.forecastUnit === 'days' ? config.forecastHorizon : config.forecastHorizon * 7;
                const trendFactor = forecastResults.pointForecast.changePercent / 100 / daysToForecast;
                for(let i = 1; i <= daysToForecast; i++){
                    const forecastDate = new Date(lastDate);
                    forecastDate.setDate(forecastDate.getDate() + i);
                    const forecastValue = lastValue * (1 + trendFactor * i);
                    const lowerBound = forecastValue * 0.85;
                    const upperBound = forecastValue * 1.15;
                    forecastPoints.push({
                        Date: forecastDate.toISOString().split('T')[0],
                        Value: Math.round(forecastValue),
                        Forecast: Math.round(forecastValue),
                        ForecastLower: Math.round(lowerBound),
                        ForecastUpper: Math.round(upperBound),
                        LowerBound: Math.round(lowerBound),
                        UpperBound: Math.round(upperBound),
                        isForecast: true
                    });
                }
                // Combine actual and forecast data
                const combinedData = [
                    ...actualData.map((d)=>({
                            ...d,
                            isForecast: false,
                            Forecast: 0
                        })),
                    ...forecastPoints
                ];
                console.log('📊 Updating LOB with forecast data:', {
                    lobId: state.selectedLob.id,
                    forecastPoints: forecastPoints.length,
                    combinedDataLength: combinedData.length,
                    forecastMetrics: forecastMetrics
                });
                // Use the new action that properly updates dashboard
                dispatch({
                    type: 'UPDATE_LOB_WITH_FORECAST_DATA',
                    payload: {
                        lobId: state.selectedLob.id,
                        forecastData: combinedData,
                        forecastMetrics: forecastMetrics
                    }
                });
                console.log('✅ Forecast data dispatched successfully with metrics:', forecastMetrics);
            }
            // Remove loading message
            dispatch({
                type: 'REMOVE_MESSAGE',
                payload: loadingMessageId
            });
            // Add final response with suggested next steps
            const buName = state.selectedBu?.name || 'Business Unit';
            const lobName = state.selectedLob?.name || 'Line of Business';
            dispatch({
                type: 'ADD_MESSAGE',
                payload: {
                    id: crypto.randomUUID(),
                    role: 'assistant',
                    content: workflowResult.finalResponse,
                    agentType: 'forecasting',
                    reportData: {
                        title: 'Complete Forecasting Analysis',
                        workflowState: workflowResult.workflowState,
                        stepResults: workflowResult.stepByStepResults
                    },
                    suggestions: [
                        'Calculate required headcount',
                        'Plan capacity needs',
                        'Generate business insights',
                        'Analyze forecast confidence',
                        'Visualize actual vs forecast',
                        'Export forecast results'
                    ]
                }
            });
            dispatch({
                type: 'ADD_THINKING_STEP',
                payload: '✅ 6-agent workflow completed successfully!'
            });
        } catch (error) {
            console.error('Forecast workflow error:', error);
            // Remove loading message
            dispatch({
                type: 'REMOVE_MESSAGE',
                payload: loadingMessageId
            });
            dispatch({
                type: 'ADD_MESSAGE',
                payload: {
                    id: crypto.randomUUID(),
                    role: 'assistant',
                    content: `❌ **Forecasting Error**

${error.message}

**Troubleshooting:**
• Ensure your data has at least 30 data points
• Check that Date and Value columns are present
• Verify data quality (no excessive missing values)
• Try with a shorter forecast horizon

Would you like to try again with different settings?`,
                    suggestions: [
                        'Configure forecast again',
                        'Check data quality',
                        'Upload different data',
                        'Get help'
                    ],
                    agentType: 'general'
                }
            });
        } finally{
            dispatch({
                type: 'SET_PROCESSING',
                payload: false
            });
            setPendingForecastMessage('');
        }
    };
    const continueWithAnalysis = async (messageText)=>{
        dispatch({
            type: 'SET_PROCESSING',
            payload: true
        });
        dispatch({
            type: 'CLEAR_THINKING_STEPS'
        });
        // Add enhanced typing indicator
        dispatch({
            type: 'ADD_MESSAGE',
            payload: {
                id: crypto.randomUUID(),
                role: 'assistant',
                content: '',
                isTyping: true
            }
        });
        try {
            const result = await enhancedChatHandler.generateEnhancedResponse(messageText, {
                selectedBu: state.selectedBu,
                selectedLob: state.selectedLob,
                businessUnits: state.businessUnits,
                userPrompt: messageText,
                conversationHistory: state.messages.slice(-5),
                conversationContext: state.conversationContext // Include conversation context
            });
            const { response: responseText, agentType, reportData, performance: perfMetrics, multiAgent, tokenUsage, visualization: resultVisualization } = result;
            setPerformance(perfMetrics);
            dispatch({
                type: 'SET_PROCESSING',
                payload: false
            });
            // Enhanced suggestion parsing
            const suggestionMatch = responseText.match(/\*\*(?:What can you do next\?|Next Steps?:?|Suggested Actions:?)\*\*([\s\S]*?)(?=\n\n|\n$|$)/i);
            let content = responseText;
            let suggestions = [];
            if (suggestionMatch?.[1]) {
                content = responseText.replace(/\*\*(?:What can you do next\?|Next Steps?:?|Suggested Actions:?)\*\*([\s\S]*?)(?=\n\n|\n$|$)/i, '').trim();
                suggestions = suggestionMatch[1].split(/[\n•-]/).map((s)=>s.trim().replace(/^"|"$/g, '')).filter((s)=>s.length > 5 && s.length < 100).slice(0, 4);
            }
            // Track user activity based on agent type FIRST (before generating suggestions)
            const updatedActivity = {
                ...state.userActivity
            };
            // For multi-agent workflows, check the response content to set all appropriate flags
            if (multiAgent) {
                // Check what was actually done based on response content
                if (/(explore|eda|data quality|pattern|distribution)/i.test(responseText)) {
                    updatedActivity.hasPerformedEDA = true;
                }
                if (/(clean|preprocess|outlier|missing value|feature)/i.test(responseText)) {
                    updatedActivity.hasPreprocessed = true;
                }
                if (/(train|model|xgboost|prophet|lstm|algorithm)/i.test(responseText)) {
                    updatedActivity.hasTrainedModels = true;
                }
                if (/(forecast|predict|30-day|4 weeks)/i.test(responseText)) {
                    updatedActivity.hasGeneratedForecast = true;
                }
                if (/(business insight|opportunity|recommendation|action)/i.test(responseText)) {
                    updatedActivity.hasViewedInsights = true;
                }
                updatedActivity.lastAction = 'forecasting';
                updatedActivity.lastAgentType = agentType;
                // Dispatch all completed activities
                dispatch({
                    type: 'TRACK_ACTIVITY',
                    payload: updatedActivity
                });
            } else {
                // Single agent - track specific activity
                if (agentType === 'eda') {
                    updatedActivity.hasPerformedEDA = true;
                    updatedActivity.lastAction = 'eda';
                    updatedActivity.lastAgentType = 'eda';
                    dispatch({
                        type: 'TRACK_ACTIVITY',
                        payload: {
                            hasPerformedEDA: true,
                            lastAction: 'eda',
                            lastAgentType: 'eda'
                        }
                    });
                } else if (agentType === 'preprocessing') {
                    updatedActivity.hasPreprocessed = true;
                    updatedActivity.lastAction = 'preprocessing';
                    updatedActivity.lastAgentType = 'preprocessing';
                    dispatch({
                        type: 'TRACK_ACTIVITY',
                        payload: {
                            hasPreprocessed: true,
                            lastAction: 'preprocessing',
                            lastAgentType: 'preprocessing'
                        }
                    });
                } else if (agentType === 'modeling') {
                    updatedActivity.hasTrainedModels = true;
                    updatedActivity.lastAction = 'modeling';
                    updatedActivity.lastAgentType = 'modeling';
                    dispatch({
                        type: 'TRACK_ACTIVITY',
                        payload: {
                            hasTrainedModels: true,
                            lastAction: 'modeling',
                            lastAgentType: 'modeling'
                        }
                    });
                } else if (agentType === 'forecasting') {
                    updatedActivity.hasGeneratedForecast = true;
                    updatedActivity.lastAction = 'forecasting';
                    updatedActivity.lastAgentType = 'forecasting';
                    dispatch({
                        type: 'TRACK_ACTIVITY',
                        payload: {
                            hasGeneratedForecast: true,
                            lastAction: 'forecasting',
                            lastAgentType: 'forecasting'
                        }
                    });
                } else if (agentType === 'insights') {
                    updatedActivity.hasViewedInsights = true;
                    updatedActivity.lastAction = 'insights';
                    updatedActivity.lastAgentType = 'insights';
                    dispatch({
                        type: 'TRACK_ACTIVITY',
                        payload: {
                            hasViewedInsights: true,
                            lastAction: 'insights',
                            lastAgentType: 'insights'
                        }
                    });
                }
            }
            // Generate dynamic suggestions based on UPDATED user activity
            if (suggestions.length === 0) {
                suggestions = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dynamic$2d$suggestions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dynamicSuggestionGenerator"].generateSuggestions({
                    userActivity: updatedActivity,
                    currentRequest: messageText,
                    currentResponse: responseText,
                    agentType: agentType,
                    hasErrors: false
                });
            }
            // Use visualization from result if available, otherwise create one
            let visualization;
            if (resultVisualization) {
                // Use the visualization data from the agent response (includes forecast if available)
                visualization = resultVisualization;
            } else {
                // Fallback: create visualization if conditions are met
                const shouldVisualize = state.selectedLob?.hasData && state.selectedLob?.mockData && (/(visuali[sz]e|chart|plot|graph|trend|distribution|eda|explore)/i.test(messageText + content) || agentType === 'eda' && /pattern|trend|seasonality|statistical/i.test(content));
                if (shouldVisualize) {
                    const isRevenue = /(revenue|sales|amount|gmv|income|value)/i.test(messageText + content);
                    const shouldShowOutliers = agentType === 'eda' || agentType === 'preprocessing' || /(outlier|anomal|quality|clean|preprocess|explore)/i.test(messageText);
                    visualization = {
                        data: state.selectedLob.mockData,
                        target: isRevenue ? 'Value' : 'Orders',
                        isShowing: false,
                        showOutliers: shouldShowOutliers
                    };
                }
            }
            // Update message with enhanced features
            dispatch({
                type: 'UPDATE_LAST_MESSAGE',
                payload: {
                    content,
                    suggestions,
                    isTyping: false,
                    visualization,
                    agentType,
                    canGenerateReport: !!reportData || multiAgent,
                    reportData,
                    tokenUsage
                }
            });
        } catch (error) {
            console.error("Enhanced AI Error:", error);
            const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.';
            // Check if this is an API key related error
            const isAPIKeyError = errorMessage.includes('🔑') || errorMessage.includes('API key');
            let suggestions = [
                'Try a simpler query',
                'Check your connection',
                'Upload data first'
            ];
            if (isAPIKeyError) {
                suggestions = [
                    'Open API Settings',
                    'Configure OpenAI API key',
                    'Test API Connection'
                ];
            }
            dispatch({
                type: 'UPDATE_LAST_MESSAGE',
                payload: {
                    content: `⚠️ ${errorMessage}${isAPIKeyError ? '\n\n**Next Steps:**\n1. Click the Settings button below\n2. Add your OpenAI API key\n3. Test the connection\n4. Try your request again' : ''}`,
                    isTyping: false,
                    agentType: 'general',
                    suggestions,
                    requiresAPISetup: isAPIKeyError
                }
            });
            dispatch({
                type: 'SET_PROCESSING',
                payload: false
            });
        }
    };
    const handleSuggestionClick = (suggestion)=>{
        // Handle special API setup suggestions
        if (suggestion === 'Open API Settings') {
            setShowAPISettings(true);
            return;
        }
        if (suggestion === 'Configure OpenAI API key' || suggestion === 'Open API Settings') {
            setShowAPISettings(true);
            return;
        }
        if (suggestion === 'Test API Connection') {
            setShowAPISettings(true);
            return;
        }
        // Handle follow-up question responses
        if (suggestion === 'Customize parameters') {
            // Dialog is already open, user will see the questions
            return;
        }
        if (suggestion === 'Use smart defaults') {
            handleFollowUpSkip();
            return;
        }
        if (suggestion === 'Tell me more about options') {
            if (followUpRequirements) {
                dispatch({
                    type: 'ADD_MESSAGE',
                    payload: {
                        id: crypto.randomUUID(),
                        role: 'assistant',
                        content: `Here are the key customization options for **${followUpRequirements.analysisType.replace('_', ' ')}**:

**🤖 Model Selection:**
• **Prophet:** Best for seasonal data with holidays/events
• **XGBoost:** Excellent for complex patterns with many features  
• **LightGBM:** Fast and accurate for most business scenarios
• **Ensemble:** Combines multiple models for maximum accuracy

**📊 Forecast Configuration:**
• **Horizon:** 7 days to 12 months (your choice)
• **Confidence Levels:** 80%, 90%, 95%, or 99%
• **Business Context:** Inventory, budgeting, staffing, marketing

**🔧 Advanced Features:**
• **Seasonal Adjustments:** Holiday effects, weekly patterns
• **Feature Engineering:** Rolling averages, lag variables
• **Validation Strategy:** Cross-validation approaches

Ready to customize, or should I proceed with intelligent defaults?`,
                        agentType: 'onboarding',
                        suggestions: [
                            'Customize parameters',
                            'Use smart defaults'
                        ]
                    }
                });
            }
            return;
        }
        if (suggestion === 'Answer the questions above') {
            // Legacy support - dialog is already open
            return;
        }
        if (suggestion === 'Skip questions and use defaults') {
            handleFollowUpSkip();
            return;
        }
        if (suggestion === 'Cancel analysis') {
            setShowFollowUpQuestions(false);
            setFollowUpRequirements(null);
            setPendingUserMessage('');
            return;
        }
        // Handle regular suggestions
        submitMessage(suggestion);
    };
    const handleVisualizeClick = (messageId)=>{
        const msg = state.messages.find((m)=>m.id === messageId);
        const target = msg?.visualization?.target === "Orders" ? "revenue" : "units";
        dispatch({
            type: 'SET_DATA_PANEL_TARGET',
            payload: target
        });
        dispatch({
            type: 'SET_DATA_PANEL_MODE',
            payload: 'chart'
        });
        dispatch({
            type: 'SET_DATA_PANEL_OPEN',
            payload: true
        });
        dispatch({
            type: 'TOGGLE_VISUALIZATION',
            payload: {
                messageId
            }
        });
    };
    const handleGenerateReport = (messageId)=>{
        const msg = state.messages.find((m)=>m.id === messageId);
        if (msg?.reportData && msg.agentType) {
            dispatch({
                type: 'GENERATE_REPORT',
                payload: {
                    messageId,
                    reportData: msg.reportData,
                    agentType: msg.agentType,
                    timestamp: new Date().toISOString()
                }
            });
        }
    };
    const isAssistantTyping = state.isProcessing || state.messages[state.messages.length - 1]?.isTyping;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col h-full border-0 shadow-none rounded-none', className),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "flex-1 p-0 overflow-hidden relative",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col h-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                                className: "flex-1",
                                ref: scrollAreaRef,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 space-y-6",
                                    children: state.messages.map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EnhancedChatBubble, {
                                            message: message,
                                            onSuggestionClick: handleSuggestionClick,
                                            onVisualizeClick: ()=>handleVisualizeClick(message.id),
                                            onGenerateReport: handleGenerateReport,
                                            thinkingSteps: state.thinkingSteps,
                                            performance: performance
                                        }, message.id, false, {
                                            fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                            lineNumber: 3061,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                    lineNumber: 3059,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                lineNumber: 3058,
                                columnNumber: 13
                            }, this),
                            showScrollButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-24 left-1/2 -translate-x-1/2 z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: hasNewResponse ? "sm" : "icon",
                                    variant: "secondary",
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-full shadow-lg hover:shadow-xl transition-all", hasNewResponse ? "h-9 px-4 bg-primary text-primary-foreground hover:bg-primary/90 animate-pulse" : "h-10 w-10"),
                                    onClick: ()=>{
                                        scrollToBottom();
                                        setHasNewResponse(false);
                                    },
                                    title: hasNewResponse ? "Response ready - Click to view" : "Scroll to bottom",
                                    children: hasNewResponse ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "16",
                                                height: "16",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                className: "mr-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M12 5v14M19 12l-7 7-7-7"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                    lineNumber: 3106,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                lineNumber: 3094,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium",
                                                children: "Response ready"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                lineNumber: 3108,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "20",
                                        height: "20",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12 5v14M19 12l-7 7-7-7"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                            lineNumber: 3122,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                        lineNumber: 3111,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                    lineNumber: 3077,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                lineNumber: 3076,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t p-4 bg-card/50 backdrop-blur-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleFormSubmit,
                                    className: "flex flex-col gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-end gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                                    className: "flex-1 min-h-[40px] max-h-[120px] resize-none bg-background/80",
                                                    name: "message",
                                                    placeholder: "Ask about data exploration, forecasting, business insights, or get started with onboarding...",
                                                    autoComplete: "off",
                                                    disabled: isAssistantTyping,
                                                    rows: 1,
                                                    onKeyDown: (e)=>{
                                                        if (e.key === 'Enter' && !e.shiftKey) {
                                                            e.preventDefault();
                                                            const form = e.currentTarget.closest('form');
                                                            if (form) {
                                                                const formData = new FormData(form);
                                                                const userInput = formData.get('message');
                                                                if (userInput.trim()) {
                                                                    form.reset();
                                                                    submitMessage(userInput);
                                                                }
                                                            }
                                                        }
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                    lineNumber: 3132,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    type: "submit",
                                                    size: "icon",
                                                    disabled: isAssistantTyping,
                                                    className: "h-10 w-10 shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                        lineNumber: 3160,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                    lineNumber: 3154,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                            lineNumber: 3131,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "ghost",
                                                            size: "sm",
                                                            type: "button",
                                                            onClick: ()=>fileInputRef.current?.click(),
                                                            title: "Upload data (CSV, Excel)",
                                                            disabled: isAssistantTyping,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__["Paperclip"], {
                                                                    className: "h-4 w-4 mr-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                                    lineNumber: 3173,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "Upload Data"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                            lineNumber: 3165,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "ghost",
                                                            size: "sm",
                                                            type: "button",
                                                            onClick: ()=>dispatch({
                                                                    type: 'SET_DATA_PANEL_OPEN',
                                                                    payload: true
                                                                }),
                                                            title: "Open insights panel",
                                                            disabled: isAssistantTyping,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2d$increasing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart$3e$__["BarChart"], {
                                                                    className: "h-4 w-4 mr-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                                    lineNumber: 3184,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "Insights Panel"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                            lineNumber: 3176,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "ghost",
                                                            size: "sm",
                                                            type: "button",
                                                            onClick: ()=>setShowAPISettings(true),
                                                            title: "API Settings",
                                                            disabled: isAssistantTyping,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                                    className: "h-4 w-4 mr-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                                    lineNumber: 3195,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "Settings"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                            lineNumber: 3187,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                    lineNumber: 3164,
                                                    columnNumber: 19
                                                }, this),
                                                performance && performance.totalTokensUsed > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 text-xs text-muted-foreground",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                            className: "h-3 w-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                            lineNumber: 3203,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "Session: ",
                                                                performance.totalTokensUsed.toLocaleString(),
                                                                " tokens"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                            lineNumber: 3204,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground/60",
                                                            children: "•"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                            lineNumber: 3205,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "Avg: ",
                                                                Math.round(performance.avgTokensPerRequest || 0),
                                                                "/req"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                            lineNumber: 3206,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                    lineNumber: 3202,
                                                    columnNumber: 21
                                                }, this),
                                                performance && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-muted-foreground flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                            className: "h-3 w-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                            lineNumber: 3212,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Cache: ",
                                                        (performance.cacheHitRate * 100).toFixed(0),
                                                        "% | Avg: ",
                                                        performance.avgResponseTime,
                                                        "ms"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                                    lineNumber: 3211,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                            lineNumber: 3163,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            ref: fileInputRef,
                                            onChange: handleFileUpload,
                                            className: "hidden",
                                            accept: ".csv,.xlsx,.xls"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                            lineNumber: 3219,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                    lineNumber: 3130,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                lineNumber: 3129,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                        lineNumber: 3057,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                    lineNumber: 3056,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                lineNumber: 3055,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: state.agentMonitor.isOpen,
                onOpenChange: (isOpen)=>dispatch({
                        type: 'SET_AGENT_MONITOR_OPEN',
                        payload: isOpen
                    }),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "max-w-6xl h-[85vh] flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                        lineNumber: 3239,
                                        columnNumber: 15
                                    }, this),
                                    "Enhanced Agent Intelligence Monitor"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                                lineNumber: 3238,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                            lineNumber: 3237,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$enhanced$2d$agent$2d$monitor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "flex-1 min-h-0"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                            lineNumber: 3243,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                    lineNumber: 3236,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                lineNumber: 3232,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$api$2d$settings$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: showAPISettings,
                onOpenChange: setShowAPISettings
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                lineNumber: 3247,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$follow$2d$up$2d$questions$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: showFollowUpQuestions,
                onOpenChange: setShowFollowUpQuestions,
                requirements: followUpRequirements,
                onSubmit: handleFollowUpSubmit,
                onSkip: handleFollowUpSkip
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                lineNumber: 3252,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$model$2d$training$2d$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: showModelTrainingForm,
                onOpenChange: setShowModelTrainingForm,
                onSubmit: handleModelConfigSubmit
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/enhanced-chat-panel.tsx",
                lineNumber: 3260,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s1(EnhancedChatPanel, "cuyGxrOwzH6on1s1UbWWuuDld6E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$app$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"]
    ];
});
_c1 = EnhancedChatPanel;
var _c, _c1;
__turbopack_context__.k.register(_c, "EnhancedChatBubble");
__turbopack_context__.k.register(_c1, "EnhancedChatPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_dashboard_enhanced-chat-panel_tsx_8bd10232._.js.map
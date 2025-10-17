module.exports = {

"[project]/src/components/theme-context.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ThemeProvider": (()=>ThemeProvider),
    "useTheme": (()=>useTheme)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
// Create the context with a default value
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    themeMode: "system",
    colorTheme: "default",
    fontFamily: "gotham-book",
    isDarkTheme: false,
    setThemeMode: ()=>{},
    setColorTheme: ()=>{},
    setFontFamily: ()=>{}
});
const ThemeProvider = ({ children })=>{
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [themeMode, setThemeMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("system");
    const [colorTheme, setColorTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("default");
    const [fontFamily, setFontFamily] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("gotham-book");
    const [isDarkTheme, setIsDarkTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Initialize state after mounting
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
        const savedThemeMode = localStorage.getItem("themeMode") || "system";
        const savedColorTheme = localStorage.getItem("colorTheme") || "default";
        const savedFontFamily = localStorage.getItem("fontFamily") || "gotham-book";
        setThemeMode(savedThemeMode);
        setColorTheme(savedColorTheme);
        setFontFamily(savedFontFamily);
        // Determine if dark theme should be active
        let isDark = false;
        if (savedThemeMode === "system") {
            isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        } else {
            isDark = savedThemeMode === "dark";
        }
        setIsDarkTheme(isDark);
    }, []);
    // Apply theme and listen for system changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mounted) return;
        // Encapsulated applyTheme logic
        const currentMode = themeMode;
        const currentColor = colorTheme;
        const currentFont = fontFamily;
        document.documentElement.classList.remove("light-default", "light-blue", "light-teal", "light-green", "light-purple", "light-orange", "light-gray", "light-red", "dark-default", "dark-blue", "dark-teal", "dark-green", "dark-purple", "dark-orange", "dark-gray", "dark-red");
        let isDark = false;
        if (currentMode === "system") {
            isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        } else {
            isDark = currentMode === "dark";
        }
        document.documentElement.classList.toggle("dark", isDark);
        document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
        const themeClass = `${isDark ? "dark" : "light"}-${currentColor}`;
        document.documentElement.classList.add(themeClass);
        // Apply font family
        document.documentElement.style.setProperty('--font-family', fontFamily === 'gotham-book' ? '"Gotham Book", sans-serif' : 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"');
        localStorage.setItem("themeMode", currentMode);
        localStorage.setItem("colorTheme", currentColor);
        localStorage.setItem("fontFamily", fontFamily);
        setIsDarkTheme(isDark);
        // Listener for system theme changes
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleSystemThemeChange = (e)=>{
            if (themeMode === "system") {
                document.documentElement.classList.remove("light-default", "light-blue", "light-teal", "light-green", "light-purple", "light-orange", "light-red", "dark-default", "dark-blue", "dark-teal", "dark-green", "dark-purple", "dark-orange", "dark-red");
                document.documentElement.classList.toggle("dark", e.matches);
                document.documentElement.setAttribute("data-theme", e.matches ? "dark" : "light");
                const newSystemThemeClass = `${e.matches ? "dark" : "light"}-${colorTheme}`;
                document.documentElement.classList.add(newSystemThemeClass);
                setIsDarkTheme(e.matches);
                localStorage.setItem("themeMode", "system");
            }
        };
        mediaQuery.addEventListener("change", handleSystemThemeChange);
        return ()=>mediaQuery.removeEventListener("change", handleSystemThemeChange);
    }, [
        mounted,
        themeMode,
        colorTheme,
        fontFamily
    ]);
    const handleModeChange = (mode)=>{
        setThemeMode(mode);
    };
    const handleColorThemeChange = (color)=>{
        setColorTheme(color);
    };
    const handleFontFamilyChange = (font)=>{
        setFontFamily(font);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            themeMode,
            colorTheme,
            fontFamily,
            isDarkTheme,
            setThemeMode: handleModeChange,
            setColorTheme: handleColorThemeChange,
            setFontFamily: handleFontFamilyChange
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/theme-context.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, this);
};
const useTheme = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    return context;
};
}}),

};

//# sourceMappingURL=src_components_theme-context_tsx_1ae15177._.js.map
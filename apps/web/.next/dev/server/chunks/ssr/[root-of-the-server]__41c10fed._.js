module.exports = [
"[project]/apps/web/src/components/ShareButton.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShareButton",
    ()=>ShareButton
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
"use client";
;
;
function ShareButton({ shareToken }) {
    const [hasCopied, setHasCopied] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const handleCopy = async ()=>{
        const url = `${window.location.origin}/q/${shareToken}`;
        try {
            await navigator.clipboard.writeText(url);
            setHasCopied(true);
            setTimeout(()=>setHasCopied(false), 2000);
        } catch (error) {
            console.error("Failed to copy URL.", error);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
        onClick: handleCopy,
        className: "flex items-center gap-2 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors",
        children: hasCopied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "w-4 h-4 text-green-500 dark:text-green-400",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M5 13l4 4L19 7"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ShareButton.tsx",
                        lineNumber: 38,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/ShareButton.tsx",
                    lineNumber: 31,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                    className: "text-green-600 dark:text-green-400",
                    children: "Copied!"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/ShareButton.tsx",
                    lineNumber: 45,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "w-4 h-4",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ShareButton.tsx",
                        lineNumber: 56,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/ShareButton.tsx",
                    lineNumber: 49,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                    children: "Share"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/ShareButton.tsx",
                    lineNumber: 63,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ShareButton.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/packages/data-loaders/src/index.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useQueue",
    ()=>useQueue,
    "useQueues",
    ()=>useQueues,
    "useSlackStatus",
    ()=>useSlackStatus
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$swr__$5b$external$5d$__$28$swr$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$swr$29$__ = __turbopack_context__.i("[externals]/swr [external] (swr, esm_import, [project]/node_modules/swr)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$swr__$5b$external$5d$__$28$swr$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$swr$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$swr__$5b$external$5d$__$28$swr$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$swr$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const fetcher = (url)=>fetch(url).then((response)=>response.json());
function useQueues() {
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$swr__$5b$external$5d$__$28$swr$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$swr$29$__["default"])("/api/queues", fetcher);
}
function useQueue({ shareToken }) {
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$swr__$5b$external$5d$__$28$swr$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$swr$29$__["default"])(shareToken ? `/api/queues/${shareToken}` : null, fetcher);
}
function useSlackStatus() {
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$swr__$5b$external$5d$__$28$swr$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$swr$29$__["default"])("/api/slack/status", fetcher);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/web/src/components/SlackConnectButton.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "SlackConnectButton",
    ()=>SlackConnectButton
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$data$2d$loaders$2f$src$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/data-loaders/src/index.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$data$2d$loaders$2f$src$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$data$2d$loaders$2f$src$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
"use client";
;
;
;
function SlackConnectButton() {
    const { data: status, isLoading, mutate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$data$2d$loaders$2f$src$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSlackStatus"])();
    const [isDisconnecting, setIsDisconnecting] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const handleConnect = ()=>{
        window.location.href = "/api/slack/connect";
    };
    const handleDisconnect = async ()=>{
        setIsDisconnecting(true);
        try {
            const response = await fetch("/api/slack/disconnect", {
                method: "POST",
                credentials: "include"
            });
            if (response.ok) {
                mutate({
                    connected: false,
                    slackTeamId: null,
                    connectedAt: null
                });
            }
        } catch (error) {
            console.error("Failed to disconnect Slack.", error);
        } finally{
            setIsDisconnecting(false);
        }
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 px-4 py-2 text-sm text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "w-4 h-4 border-2 border-gray-300 dark:border-gray-600 border-t-gray-500 dark:border-t-gray-400 rounded-full animate-spin"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/SlackConnectButton.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/SlackConnectButton.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/SlackConnectButton.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this);
    }
    if (status?.connected) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 px-3 py-2 text-sm text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "w-4 h-4",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M5 13l4 4L19 7"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SlackConnectButton.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/SlackConnectButton.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            children: "Slack connected"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/SlackConnectButton.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/SlackConnectButton.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                    onClick: handleDisconnect,
                    disabled: isDisconnecting,
                    className: "px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors disabled:opacity-50",
                    children: isDisconnecting ? "Disconnecting..." : "Disconnect"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/SlackConnectButton.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/SlackConnectButton.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
        onClick: handleConnect,
        className: "flex items-center gap-2 px-4 py-2 text-sm text-white bg-[#4A154B] hover:bg-[#3e1240] rounded-lg transition-colors",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: "w-4 h-4",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/SlackConnectButton.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/SlackConnectButton.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                children: "Connect Slack"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/SlackConnectButton.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/SlackConnectButton.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/web/src/components/QueueItemCard.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueueItemCard",
    ()=>QueueItemCard
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$sortable__$5b$external$5d$__$2840$dnd$2d$kit$2f$sortable$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$29$__ = __turbopack_context__.i("[externals]/@dnd-kit/sortable [external] (@dnd-kit/sortable, cjs, [project]/node_modules/@dnd-kit/sortable)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$utilities__$5b$external$5d$__$2840$dnd$2d$kit$2f$utilities$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$utilities$29$__ = __turbopack_context__.i("[externals]/@dnd-kit/utilities [external] (@dnd-kit/utilities, cjs, [project]/node_modules/@dnd-kit/utilities)");
"use client";
;
;
;
;
function renderTextWithLinks(text, isCompleted) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);
    return parts.map((part, index)=>{
        if (urlRegex.test(part)) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                href: part,
                target: "_blank",
                rel: "noopener noreferrer",
                className: `text-blue-600 hover:text-blue-800 underline ${isCompleted ? "line-through" : ""}`,
                onClick: (event)=>event.stopPropagation(),
                children: part
            }, index, false, {
                fileName: "[project]/apps/web/src/components/QueueItemCard.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this);
        }
        return part;
    });
}
function QueueItemCard({ item, isFirst, isOwner, onUpdate, onDelete }) {
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [editTitle, setEditTitle] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(item.title);
    const [editDescription, setEditDescription] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(item.description ?? "");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$sortable__$5b$external$5d$__$2840$dnd$2d$kit$2f$sortable$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$29$__["useSortable"])({
        id: item.id,
        disabled: !isOwner
    });
    const style = {
        transform: __TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$utilities__$5b$external$5d$__$2840$dnd$2d$kit$2f$utilities$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$utilities$29$__["CSS"].Transform.toString(transform),
        transition
    };
    const handleSaveEdit = async ()=>{
        if (editTitle.trim().length === 0) {
            setEditTitle(item.title);
            setEditDescription(item.description ?? "");
            setIsEditing(false);
            return;
        }
        setIsLoading(true);
        setIsEditing(false);
        const descriptionToSave = editDescription.trim().length > 0 ? editDescription.trim() : null;
        try {
            await onUpdate(item.id, {
                title: editTitle,
                description: descriptionToSave
            });
        } catch (error) {
            setEditTitle(item.title);
            setEditDescription(item.description ?? "");
            console.error("Failed to update item.", error);
        } finally{
            setIsLoading(false);
        }
    };
    const handleDelete = async ()=>{
        const isConfirmed = window.confirm(`Are you sure you want to delete "${item.title}"?`);
        if (!isConfirmed) {
            return;
        }
        try {
            await onDelete(item.id);
        } catch (error) {
            console.error("Failed to delete item.", error);
        }
    };
    const handleToggleStatus = async ()=>{
        if (!isOwner) return;
        const newStatus = item.status === "completed" ? "pending" : "completed";
        try {
            await onUpdate(item.id, {
                status: newStatus
            });
        } catch (error) {
            console.error("Failed to update status.", error);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        ref: setNodeRef,
        style: style,
        className: `p-4 bg-white dark:bg-gray-900 border rounded-lg ${isFirst ? "border-blue-400 ring-2 ring-blue-100 dark:ring-blue-900" : "border-gray-200 dark:border-gray-700"} ${isDragging ? "opacity-50 shadow-lg" : ""}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4",
            children: [
                isOwner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                    ...attributes,
                    ...listeners,
                    className: "cursor-grab active:cursor-grabbing p-1 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "w-5 h-5",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M4 8h16M4 16h16"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/QueueItemCard.tsx",
                            lineNumber: 142,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/QueueItemCard.tsx",
                        lineNumber: 135,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/QueueItemCard.tsx",
                    lineNumber: 130,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                    onClick: handleToggleStatus,
                    disabled: !isOwner,
                    className: `w-5 h-5 rounded-full border-2 flex items-center justify-center ${item.status === "completed" ? "bg-green-500 border-green-500" : "border-gray-300 dark:border-gray-600"} ${isOwner ? "hover:border-gray-400 cursor-pointer" : "cursor-default"}`,
                    children: item.status === "completed" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "w-3 h-3 text-white",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 3,
                            d: "M5 13l4 4L19 7"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/QueueItemCard.tsx",
                            lineNumber: 169,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/QueueItemCard.tsx",
                        lineNumber: 162,
                        columnNumber: 13
                    }, this) : null
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/QueueItemCard.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex-1 min-w-0",
                    children: isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: editTitle,
                                        onChange: (event)=>setEditTitle(event.target.value),
                                        onKeyDown: (event)=>{
                                            if (event.key === "Enter") {
                                                handleSaveEdit();
                                            } else if (event.key === "Escape") {
                                                setEditTitle(item.title);
                                                setEditDescription(item.description ?? "");
                                                setIsEditing(false);
                                            }
                                        },
                                        className: "flex-1 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400 dark:placeholder:text-gray-500 text-gray-900 dark:text-gray-100 dark:bg-gray-800",
                                        autoFocus: true,
                                        disabled: isLoading
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/QueueItemCard.tsx",
                                        lineNumber: 183,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: handleSaveEdit,
                                        disabled: isLoading,
                                        className: "px-2 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50",
                                        children: "Save"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/QueueItemCard.tsx",
                                        lineNumber: 200,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setEditTitle(item.title);
                                            setEditDescription(item.description ?? "");
                                            setIsEditing(false);
                                        },
                                        className: "px-2 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/QueueItemCard.tsx",
                                        lineNumber: 207,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/QueueItemCard.tsx",
                                lineNumber: 182,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("textarea", {
                                value: editDescription,
                                onChange: (event)=>setEditDescription(event.target.value),
                                placeholder: "Description (optional)...",
                                className: "px-2 py-1 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400 dark:placeholder:text-gray-500 text-gray-900 dark:text-gray-100 dark:bg-gray-800 resize-none",
                                disabled: isLoading,
                                rows: 2
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/QueueItemCard.tsx",
                                lineNumber: 218,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/QueueItemCard.tsx",
                        lineNumber: 181,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: `break-words ${item.status === "completed" ? "line-through text-gray-400 dark:text-gray-500" : "text-gray-900 dark:text-gray-100"}`,
                                children: renderTextWithLinks(item.title, item.status === "completed")
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/QueueItemCard.tsx",
                                lineNumber: 229,
                                columnNumber: 15
                            }, this),
                            item.description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: `break-words text-sm ${item.status === "completed" ? "line-through text-gray-300 dark:text-gray-600" : "text-gray-500 dark:text-gray-400"}`,
                                children: renderTextWithLinks(item.description, item.status === "completed")
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/QueueItemCard.tsx",
                                lineNumber: 239,
                                columnNumber: 17
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/QueueItemCard.tsx",
                        lineNumber: 228,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/QueueItemCard.tsx",
                    lineNumber: 179,
                    columnNumber: 9
                }, this),
                isOwner && !isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setEditTitle(item.title);
                                setEditDescription(item.description ?? "");
                                setIsEditing(true);
                            },
                            className: "p-1 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300",
                            title: "Edit",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "w-4 h-4",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/QueueItemCard.tsx",
                                    lineNumber: 271,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/QueueItemCard.tsx",
                                lineNumber: 264,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/QueueItemCard.tsx",
                            lineNumber: 255,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            onClick: handleDelete,
                            className: "p-1 text-gray-400 dark:text-gray-500 hover:text-red-500",
                            title: "Delete",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "w-4 h-4",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/QueueItemCard.tsx",
                                    lineNumber: 291,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/QueueItemCard.tsx",
                                lineNumber: 284,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/QueueItemCard.tsx",
                            lineNumber: 279,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/QueueItemCard.tsx",
                    lineNumber: 254,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/QueueItemCard.tsx",
            lineNumber: 128,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/QueueItemCard.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/components/AddItemForm.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddItemForm",
    ()=>AddItemForm
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
"use client";
;
;
function AddItemForm({ onAddItem }) {
    const [itemTitle, setItemTitle] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [itemDescription, setItemDescription] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const handleSubmit = async (event)=>{
        event.preventDefault();
        if (itemTitle.trim().length === 0) {
            return;
        }
        const titleToAdd = itemTitle;
        const descriptionToAdd = itemDescription.trim().length > 0 ? itemDescription.trim() : null;
        setItemTitle("");
        setItemDescription("");
        setIsLoading(true);
        try {
            await onAddItem(titleToAdd, descriptionToAdd);
        } catch (error) {
            setItemTitle(titleToAdd);
            setItemDescription(descriptionToAdd ?? "");
            console.error("Failed to add item.", error);
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "flex flex-col gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: itemTitle,
                        onChange: (event)=>setItemTitle(event.target.value),
                        placeholder: "Add a new item...",
                        className: "flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400 dark:placeholder:text-gray-500 text-gray-900 dark:text-gray-100 dark:bg-gray-800",
                        disabled: isLoading
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/AddItemForm.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: isLoading || itemTitle.trim().length === 0,
                        className: "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                        children: isLoading ? "Adding..." : "Add"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/AddItemForm.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/AddItemForm.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("textarea", {
                value: itemDescription,
                onChange: (event)=>setItemDescription(event.target.value),
                placeholder: "Add a description (optional)...",
                className: "px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400 dark:placeholder:text-gray-500 text-gray-900 dark:text-gray-100 dark:bg-gray-800 resize-none",
                disabled: isLoading,
                rows: 2
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/AddItemForm.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/AddItemForm.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}),
"[project]/packages/constants/src/index.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SLACK_OAUTH_SCOPES",
    ()=>SLACK_OAUTH_SCOPES,
    "SLACK_STATUS_CHAR_LIMIT",
    ()=>SLACK_STATUS_CHAR_LIMIT,
    "TEMP_ID_PREFIX",
    ()=>TEMP_ID_PREFIX,
    "VALID_ITEM_STATUSES",
    ()=>VALID_ITEM_STATUSES
]);
const SLACK_OAUTH_SCOPES = [
    "users.profile:write"
];
const SLACK_STATUS_CHAR_LIMIT = 100;
const TEMP_ID_PREFIX = "temp_";
const VALID_ITEM_STATUSES = [
    "pending",
    "in-progress",
    "completed"
];
}),
"[project]/apps/web/src/components/QueueItemsList.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueueItemsList",
    ()=>QueueItemsList
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$core__$5b$external$5d$__$2840$dnd$2d$kit$2f$core$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$29$__ = __turbopack_context__.i("[externals]/@dnd-kit/core [external] (@dnd-kit/core, cjs, [project]/node_modules/@dnd-kit/core)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$sortable__$5b$external$5d$__$2840$dnd$2d$kit$2f$sortable$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$29$__ = __turbopack_context__.i("[externals]/@dnd-kit/sortable [external] (@dnd-kit/sortable, cjs, [project]/node_modules/@dnd-kit/sortable)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$QueueItemCard$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/QueueItemCard.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$AddItemForm$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/AddItemForm.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$constants$2f$src$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/constants/src/index.ts [ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const generateTempId = ()=>`${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$constants$2f$src$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["TEMP_ID_PREFIX"]}${crypto.randomUUID()}`;
const isTempId = (id)=>id.startsWith(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$constants$2f$src$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["TEMP_ID_PREFIX"]);
const sortItemsByStatus = (items)=>[
        ...items
    ].sort((a, b)=>{
        const aCompleted = a.status === "completed" ? 1 : 0;
        const bCompleted = b.status === "completed" ? 1 : 0;
        if (aCompleted !== bCompleted) return aCompleted - bCompleted;
        return a.position - b.position;
    });
function QueueItemsList({ shareToken, initialItems, isOwner }) {
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(initialItems);
    const sortedItems = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>sortItemsByStatus(items), [
        items
    ]);
    const pendingCreatesRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(new Set());
    const sensors = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$core__$5b$external$5d$__$2840$dnd$2d$kit$2f$core$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$29$__["useSensors"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$core__$5b$external$5d$__$2840$dnd$2d$kit$2f$core$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$29$__["useSensor"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$core__$5b$external$5d$__$2840$dnd$2d$kit$2f$core$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$29$__["PointerSensor"]), (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$core__$5b$external$5d$__$2840$dnd$2d$kit$2f$core$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$29$__["useSensor"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$core__$5b$external$5d$__$2840$dnd$2d$kit$2f$core$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$29$__["KeyboardSensor"], {
        coordinateGetter: __TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$sortable__$5b$external$5d$__$2840$dnd$2d$kit$2f$sortable$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$29$__["sortableKeyboardCoordinates"]
    }));
    const handleDragEnd = async (event)=>{
        const { active, over } = event;
        if (!over || active.id === over.id) {
            return;
        }
        const oldIndex = sortedItems.findIndex((item)=>item.id === active.id);
        const newIndex = sortedItems.findIndex((item)=>item.id === over.id);
        const previousItems = items;
        const newItems = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$sortable__$5b$external$5d$__$2840$dnd$2d$kit$2f$sortable$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$29$__["arrayMove"])(sortedItems, oldIndex, newIndex).map((item, index)=>({
                ...item,
                position: index
            }));
        setItems(newItems);
        const reorderData = newItems.filter((item)=>!isTempId(item.id)).map((item, index)=>({
                id: item.id,
                position: index
            }));
        try {
            await fetch(`/api/queues/${shareToken}/items/reorder`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    items: reorderData
                })
            });
        } catch (error) {
            console.error("Failed to reorder items.", error);
            setItems(previousItems);
        }
    };
    const handleAddItem = async (title, description)=>{
        const tempId = generateTempId();
        const optimisticItem = {
            id: tempId,
            title,
            description,
            position: items.length,
            status: "pending",
            queueId: items[0]?.queueId ?? shareToken,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        setItems((current)=>[
                ...current,
                optimisticItem
            ]);
        pendingCreatesRef.current.add(tempId);
        try {
            const response = await fetch(`/api/queues/${shareToken}/items`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title,
                    description
                })
            });
            if (!pendingCreatesRef.current.has(tempId)) return;
            if (response.ok) {
                const realItem = await response.json();
                setItems((current)=>current.map((item)=>item.id === tempId ? realItem : item));
            } else {
                throw new Error("API request failed.");
            }
        } catch (error) {
            console.error("Failed to create item.", error);
            setItems((current)=>current.filter((item)=>item.id !== tempId));
        } finally{
            pendingCreatesRef.current.delete(tempId);
        }
    };
    const handleUpdateItem = async (itemId, updates)=>{
        const originalItem = items.find((item)=>item.id === itemId);
        if (!originalItem) return;
        setItems((current)=>current.map((item)=>item.id === itemId ? {
                    ...item,
                    ...updates
                } : item));
        try {
            const response = await fetch(`/api/queues/${shareToken}/items/${itemId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updates)
            });
            if (response.ok) {
                const updatedItem = await response.json();
                setItems((current)=>current.map((item)=>item.id === itemId ? updatedItem : item));
            } else {
                throw new Error("API request failed.");
            }
        } catch (error) {
            console.error("Failed to update item.", error);
            setItems((current)=>current.map((item)=>item.id === itemId ? originalItem : item));
        }
    };
    const handleDeleteItem = async (itemId)=>{
        if (isTempId(itemId)) {
            pendingCreatesRef.current.delete(itemId);
            setItems((current)=>current.filter((item)=>item.id !== itemId));
            return;
        }
        const deletedItem = items.find((item)=>item.id === itemId);
        const deletedIndex = items.findIndex((item)=>item.id === itemId);
        if (!deletedItem) return;
        setItems((current)=>current.filter((item)=>item.id !== itemId));
        try {
            const response = await fetch(`/api/queues/${shareToken}/items/${itemId}`, {
                method: "DELETE"
            });
            if (!response.ok) {
                throw new Error("API request failed.");
            }
        } catch (error) {
            console.error("Failed to delete item.", error);
            setItems((current)=>{
                const restored = [
                    ...current
                ];
                restored.splice(deletedIndex, 0, deletedItem);
                return restored;
            });
        }
    };
    if (!isOwner) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-6",
            children: items.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "text-center py-12 text-gray-500 dark:text-gray-400",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "text-lg",
                    children: "No items in this queue"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/QueueItemsList.tsx",
                    lineNumber: 208,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/QueueItemsList.tsx",
                lineNumber: 207,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4",
                children: sortedItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$QueueItemCard$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["QueueItemCard"], {
                        item: item,
                        isFirst: index === 0,
                        isOwner: false,
                        onUpdate: handleUpdateItem,
                        onDelete: handleDeleteItem
                    }, item.id, false, {
                        fileName: "[project]/apps/web/src/components/QueueItemsList.tsx",
                        lineNumber: 213,
                        columnNumber: 15
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/QueueItemsList.tsx",
                lineNumber: 211,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/QueueItemsList.tsx",
            lineNumber: 205,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$AddItemForm$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["AddItemForm"], {
                onAddItem: handleAddItem
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/QueueItemsList.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this),
            items.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "text-center py-12 text-gray-500 dark:text-gray-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "text-lg",
                        children: "No items in this queue"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/QueueItemsList.tsx",
                        lineNumber: 234,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "text-sm",
                        children: "Add your first item above"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/QueueItemsList.tsx",
                        lineNumber: 235,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/QueueItemsList.tsx",
                lineNumber: 233,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$core__$5b$external$5d$__$2840$dnd$2d$kit$2f$core$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$29$__["DndContext"], {
                sensors: sensors,
                collisionDetection: __TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$core__$5b$external$5d$__$2840$dnd$2d$kit$2f$core$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$29$__["closestCenter"],
                onDragEnd: handleDragEnd,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$sortable__$5b$external$5d$__$2840$dnd$2d$kit$2f$sortable$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$29$__["SortableContext"], {
                    items: sortedItems.map((item)=>item.id),
                    strategy: __TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$sortable__$5b$external$5d$__$2840$dnd$2d$kit$2f$sortable$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$29$__["verticalListSortingStrategy"],
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4",
                        children: sortedItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$QueueItemCard$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["QueueItemCard"], {
                                item: item,
                                isFirst: index === 0,
                                isOwner: true,
                                onUpdate: handleUpdateItem,
                                onDelete: handleDeleteItem
                            }, item.id, false, {
                                fileName: "[project]/apps/web/src/components/QueueItemsList.tsx",
                                lineNumber: 249,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/QueueItemsList.tsx",
                        lineNumber: 247,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/QueueItemsList.tsx",
                    lineNumber: 243,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/QueueItemsList.tsx",
                lineNumber: 238,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/QueueItemsList.tsx",
        lineNumber: 229,
        columnNumber: 5
    }, this);
}
}),
"[project]/packages/db-client/src/index.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/node_modules/@prisma/client)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$adapter$2d$pg__$5b$external$5d$__$2840$prisma$2f$adapter$2d$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$29$__ = __turbopack_context__.i("[externals]/@prisma/adapter-pg [external] (@prisma/adapter-pg, esm_import, [project]/node_modules/@prisma/adapter-pg)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import, [project]/node_modules/pg)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$adapter$2d$pg__$5b$external$5d$__$2840$prisma$2f$adapter$2d$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$adapter$2d$pg__$5b$external$5d$__$2840$prisma$2f$adapter$2d$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const globalForPrisma = globalThis;
function createPrismaClient() {
    const connectionString = process.env.POSTGRES_PRISMA_URL;
    if (!connectionString) {
        throw new Error("POSTGRES_PRISMA_URL environment variable is required.");
    }
    const pool = new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["Pool"]({
        connectionString
    });
    const adapter = new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$adapter$2d$pg__$5b$external$5d$__$2840$prisma$2f$adapter$2d$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$29$__["PrismaPg"](pool);
    return new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClient"]({
        adapter
    });
}
const prisma = globalForPrisma.prisma ?? createPrismaClient();
if ("TURBOPACK compile-time truthy", 1) {
    globalForPrisma.prisma = prisma;
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/web/src/lib/auth.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "auth",
    ()=>auth
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$auth__$5b$external$5d$__$28$better$2d$auth$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$better$2d$auth$29$__ = __turbopack_context__.i("[externals]/better-auth [external] (better-auth, esm_import, [project]/node_modules/better-auth)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$auth$2f$adapters$2f$prisma__$5b$external$5d$__$28$better$2d$auth$2f$adapters$2f$prisma$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$better$2d$auth$29$__ = __turbopack_context__.i("[externals]/better-auth/adapters/prisma [external] (better-auth/adapters/prisma, esm_import, [project]/node_modules/better-auth)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2d$client$2f$src$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/db-client/src/index.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$auth__$5b$external$5d$__$28$better$2d$auth$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$better$2d$auth$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$auth$2f$adapters$2f$prisma__$5b$external$5d$__$28$better$2d$auth$2f$adapters$2f$prisma$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$better$2d$auth$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2d$client$2f$src$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$auth__$5b$external$5d$__$28$better$2d$auth$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$better$2d$auth$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$auth$2f$adapters$2f$prisma__$5b$external$5d$__$28$better$2d$auth$2f$adapters$2f$prisma$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$better$2d$auth$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2d$client$2f$src$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const auth = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$auth__$5b$external$5d$__$28$better$2d$auth$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$better$2d$auth$29$__["betterAuth"])({
    database: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$auth$2f$adapters$2f$prisma__$5b$external$5d$__$28$better$2d$auth$2f$adapters$2f$prisma$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$better$2d$auth$29$__["prismaAdapter"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2d$client$2f$src$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["prisma"], {
        provider: "postgresql"
    }),
    emailAndPassword: {
        enabled: true
    }
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/web/helpers/api/auth.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "getSession",
    ()=>getSession,
    "isQueueOwner",
    ()=>isQueueOwner,
    "requireAuth",
    ()=>requireAuth,
    "requireQueueOwnership",
    ()=>requireQueueOwnership
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$auth$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/auth.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2d$client$2f$src$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/db-client/src/index.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$auth$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2d$client$2f$src$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$auth$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2d$client$2f$src$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
function toHeaders({ req }) {
    const headerEntries = {};
    for (const [key, value] of Object.entries(req.headers)){
        if (value) {
            headerEntries[key] = Array.isArray(value) ? value.join(", ") : value;
        }
    }
    return new Headers(headerEntries);
}
async function getSession({ req }) {
    const session = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$auth$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["auth"].api.getSession({
        headers: toHeaders({
            req
        })
    });
    return session;
}
async function requireAuth({ req }) {
    const session = await getSession({
        req
    });
    if (!session) {
        throw new Error("Unauthorized");
    }
    return session;
}
async function requireQueueOwnership({ req, shareToken }) {
    const session = await requireAuth({
        req
    });
    const queue = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2d$client$2f$src$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["prisma"].queue.findUnique({
        where: {
            shareToken
        },
        select: {
            userId: true
        }
    });
    if (!queue) {
        throw new Error("Queue not found");
    }
    if (queue.userId !== session.user.id) {
        throw new Error("Forbidden");
    }
    return session;
}
async function isQueueOwner({ req, shareToken }) {
    const session = await getSession({
        req
    });
    if (!session) {
        return false;
    }
    const queue = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2d$client$2f$src$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["prisma"].queue.findUnique({
        where: {
            shareToken
        },
        select: {
            userId: true
        }
    });
    if (!queue) {
        return false;
    }
    return queue.userId === session.user.id;
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/packages/utils/src/index.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateShareToken",
    ()=>generateShareToken
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
function generateShareToken() {
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomBytes"])(8).toString("base64url");
}
}),
"[project]/apps/web/helpers/api/db/queues.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "createQueue",
    ()=>createQueue,
    "deleteQueue",
    ()=>deleteQueue,
    "fetchQueueByToken",
    ()=>fetchQueueByToken,
    "fetchQueueWithUser",
    ()=>fetchQueueWithUser,
    "fetchUserQueues",
    ()=>fetchUserQueues,
    "updateQueue",
    ()=>updateQueue,
    "verifyQueueOwnership",
    ()=>verifyQueueOwnership
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2d$client$2f$src$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/db-client/src/index.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$utils$2f$src$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/utils/src/index.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2d$client$2f$src$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2d$client$2f$src$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
function fetchUserQueues({ userId }) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2d$client$2f$src$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["prisma"].queue.findMany({
        where: {
            userId
        },
        include: {
            _count: {
                select: {
                    items: true
                }
            }
        },
        orderBy: {
            createdAt: "desc"
        }
    });
}
function fetchQueueByToken({ shareToken }) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2d$client$2f$src$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["prisma"].queue.findUnique({
        where: {
            shareToken
        },
        include: {
            items: {
                orderBy: {
                    position: "asc"
                }
            }
        }
    });
}
function fetchQueueWithUser({ shareToken }) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2d$client$2f$src$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["prisma"].queue.findUnique({
        where: {
            shareToken
        },
        include: {
            items: {
                orderBy: {
                    position: "asc"
                }
            },
            user: {
                select: {
                    id: true,
                    name: true
                }
            }
        }
    });
}
function createQueue({ name, userId }) {
    const shareToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$utils$2f$src$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["generateShareToken"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2d$client$2f$src$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["prisma"].queue.create({
        data: {
            name: name.trim(),
            shareToken,
            userId
        }
    });
}
function updateQueue({ shareToken, name }) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2d$client$2f$src$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["prisma"].queue.update({
        where: {
            shareToken
        },
        data: {
            name: name.trim()
        }
    });
}
function deleteQueue({ shareToken }) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2d$client$2f$src$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["prisma"].queue.delete({
        where: {
            shareToken
        }
    });
}
async function verifyQueueOwnership({ shareToken, userId }) {
    const queue = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2d$client$2f$src$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["prisma"].queue.findUnique({
        where: {
            shareToken
        },
        select: {
            userId: true
        }
    });
    if (!queue) {
        return null;
    }
    if (queue.userId !== userId) {
        return null;
    }
    return queue;
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/web/pages/q/[token].tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>QueuePage,
    "getServerSideProps",
    ()=>getServerSideProps
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ShareButton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ShareButton.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$SlackConnectButton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/SlackConnectButton.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$QueueItemsList$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/QueueItemsList.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$helpers$2f$api$2f$auth$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/helpers/api/auth.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$helpers$2f$api$2f$db$2f$queues$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/helpers/api/db/queues.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$SlackConnectButton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$helpers$2f$api$2f$auth$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$helpers$2f$api$2f$db$2f$queues$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$SlackConnectButton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$helpers$2f$api$2f$auth$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$helpers$2f$api$2f$db$2f$queues$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
const getServerSideProps = async ({ req, query })=>{
    const token = query.token;
    const queue = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$helpers$2f$api$2f$db$2f$queues$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["fetchQueueWithUser"])({
        shareToken: token
    });
    if (!queue) {
        return {
            notFound: true
        };
    }
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$helpers$2f$api$2f$auth$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getSession"])({
        req
    });
    const isOwner = session?.user.id === queue.userId;
    return {
        props: {
            queue: JSON.parse(JSON.stringify(queue)),
            isOwner
        }
    };
};
function QueuePage({ queue, isOwner }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                    children: [
                        queue.name,
                        " - Queue Manager"
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/pages/q/[token].tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/pages/q/[token].tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-gray-50 dark:bg-gray-950",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "max-w-2xl mx-auto px-4 py-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                className: "text-sm text-blue-600 hover:text-blue-700",
                                                children: "← Back to all queues"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/pages/q/[token].tsx",
                                                lineNumber: 50,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "text-3xl font-bold text-gray-900 dark:text-gray-100",
                                                children: queue.name
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/pages/q/[token].tsx",
                                                lineNumber: 56,
                                                columnNumber: 17
                                            }, this),
                                            !isOwner && queue.user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "text-gray-600 dark:text-gray-400",
                                                children: [
                                                    "by ",
                                                    queue.user.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/pages/q/[token].tsx",
                                                lineNumber: 60,
                                                columnNumber: 19
                                            }, this),
                                            !isOwner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30 px-3 py-1 rounded-md inline-block",
                                                children: "View only"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/pages/q/[token].tsx",
                                                lineNumber: 65,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/pages/q/[token].tsx",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this),
                                    isOwner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$SlackConnectButton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["SlackConnectButton"], {}, void 0, false, {
                                                fileName: "[project]/apps/web/pages/q/[token].tsx",
                                                lineNumber: 72,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ShareButton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["ShareButton"], {
                                                shareToken: queue.shareToken
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/pages/q/[token].tsx",
                                                lineNumber: 73,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/pages/q/[token].tsx",
                                        lineNumber: 71,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/pages/q/[token].tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$QueueItemsList$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["QueueItemsList"], {
                                shareToken: queue.shareToken,
                                initialItems: queue.items ?? [],
                                isOwner: isOwner
                            }, void 0, false, {
                                fileName: "[project]/apps/web/pages/q/[token].tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/pages/q/[token].tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/pages/q/[token].tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/pages/q/[token].tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__41c10fed._.js.map
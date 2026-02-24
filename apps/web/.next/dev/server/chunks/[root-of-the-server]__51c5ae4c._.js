module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/packages/db-client/src/index.ts [api] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/apps/web/src/lib/auth.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "auth",
    ()=>auth
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$auth__$5b$external$5d$__$28$better$2d$auth$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$better$2d$auth$29$__ = __turbopack_context__.i("[externals]/better-auth [external] (better-auth, esm_import, [project]/node_modules/better-auth)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$auth$2f$adapters$2f$prisma__$5b$external$5d$__$28$better$2d$auth$2f$adapters$2f$prisma$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$better$2d$auth$29$__ = __turbopack_context__.i("[externals]/better-auth/adapters/prisma [external] (better-auth/adapters/prisma, esm_import, [project]/node_modules/better-auth)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2d$client$2f$src$2f$index$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/db-client/src/index.ts [api] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$auth__$5b$external$5d$__$28$better$2d$auth$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$better$2d$auth$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$auth$2f$adapters$2f$prisma__$5b$external$5d$__$28$better$2d$auth$2f$adapters$2f$prisma$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$better$2d$auth$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2d$client$2f$src$2f$index$2e$ts__$5b$api$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$auth__$5b$external$5d$__$28$better$2d$auth$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$better$2d$auth$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$auth$2f$adapters$2f$prisma__$5b$external$5d$__$28$better$2d$auth$2f$adapters$2f$prisma$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$better$2d$auth$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2d$client$2f$src$2f$index$2e$ts__$5b$api$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const auth = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$auth__$5b$external$5d$__$28$better$2d$auth$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$better$2d$auth$29$__["betterAuth"])({
    database: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$auth$2f$adapters$2f$prisma__$5b$external$5d$__$28$better$2d$auth$2f$adapters$2f$prisma$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$better$2d$auth$29$__["prismaAdapter"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2d$client$2f$src$2f$index$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["prisma"], {
        provider: "postgresql"
    }),
    emailAndPassword: {
        enabled: true
    }
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/web/helpers/api/auth.ts [api] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$auth$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/auth.ts [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2d$client$2f$src$2f$index$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/db-client/src/index.ts [api] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$auth$2e$ts__$5b$api$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2d$client$2f$src$2f$index$2e$ts__$5b$api$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$auth$2e$ts__$5b$api$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2d$client$2f$src$2f$index$2e$ts__$5b$api$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
    const session = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$auth$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["auth"].api.getSession({
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
    const queue = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2d$client$2f$src$2f$index$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["prisma"].queue.findUnique({
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
    const queue = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2d$client$2f$src$2f$index$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["prisma"].queue.findUnique({
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
"[project]/apps/web/pages/api/slack/status.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2d$client$2f$src$2f$index$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/db-client/src/index.ts [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$helpers$2f$api$2f$auth$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/helpers/api/auth.ts [api] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2d$client$2f$src$2f$index$2e$ts__$5b$api$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$helpers$2f$api$2f$auth$2e$ts__$5b$api$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2d$client$2f$src$2f$index$2e$ts__$5b$api$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$helpers$2f$api$2f$auth$2e$ts__$5b$api$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
async function handler(req, res) {
    if (req.method !== "GET") {
        res.setHeader("Allow", [
            "GET"
        ]);
        return res.status(405).end();
    }
    try {
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$helpers$2f$api$2f$auth$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["getSession"])({
            req
        });
        if (!session) {
            return res.status(401).json({
                error: "Unauthorized"
            });
        }
        const slackIntegration = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2d$client$2f$src$2f$index$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["prisma"].slackIntegration.findUnique({
            where: {
                userId: session.user.id
            },
            select: {
                slackTeamId: true,
                createdAt: true
            }
        });
        return res.status(200).json({
            connected: slackIntegration !== null,
            slackTeamId: slackIntegration?.slackTeamId ?? null,
            connectedAt: slackIntegration?.createdAt ?? null
        });
    } catch (error) {
        console.error("Failed to get Slack status.", error);
        return res.status(500).json({
            error: "Failed to get Slack status."
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__51c5ae4c._.js.map
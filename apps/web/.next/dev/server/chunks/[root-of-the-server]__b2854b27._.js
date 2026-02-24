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
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/packages/utils/src/index.ts [api] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/apps/web/helpers/api/db/queues.ts [api] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2d$client$2f$src$2f$index$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/db-client/src/index.ts [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$utils$2f$src$2f$index$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/utils/src/index.ts [api] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2d$client$2f$src$2f$index$2e$ts__$5b$api$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2d$client$2f$src$2f$index$2e$ts__$5b$api$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
function fetchUserQueues({ userId }) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2d$client$2f$src$2f$index$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["prisma"].queue.findMany({
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2d$client$2f$src$2f$index$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["prisma"].queue.findUnique({
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2d$client$2f$src$2f$index$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["prisma"].queue.findUnique({
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
    const shareToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$utils$2f$src$2f$index$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["generateShareToken"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2d$client$2f$src$2f$index$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["prisma"].queue.create({
        data: {
            name: name.trim(),
            shareToken,
            userId
        }
    });
}
function updateQueue({ shareToken, name }) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2d$client$2f$src$2f$index$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["prisma"].queue.update({
        where: {
            shareToken
        },
        data: {
            name: name.trim()
        }
    });
}
function deleteQueue({ shareToken }) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2d$client$2f$src$2f$index$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["prisma"].queue.delete({
        where: {
            shareToken
        }
    });
}
async function verifyQueueOwnership({ shareToken, userId }) {
    const queue = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2d$client$2f$src$2f$index$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["prisma"].queue.findUnique({
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
"[project]/apps/web/pages/api/queues/index.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$helpers$2f$api$2f$auth$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/helpers/api/auth.ts [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$helpers$2f$api$2f$db$2f$queues$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/helpers/api/db/queues.ts [api] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$helpers$2f$api$2f$auth$2e$ts__$5b$api$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$helpers$2f$api$2f$db$2f$queues$2e$ts__$5b$api$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$helpers$2f$api$2f$auth$2e$ts__$5b$api$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$helpers$2f$api$2f$db$2f$queues$2e$ts__$5b$api$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$helpers$2f$api$2f$auth$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["getSession"])({
                req
            });
            if (!session) {
                return res.status(401).json({
                    error: "Unauthorized"
                });
            }
            const queues = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$helpers$2f$api$2f$db$2f$queues$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["fetchUserQueues"])({
                userId: session.user.id
            });
            return res.status(200).json(queues);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Unknown error";
            console.error("Failed to fetch queues:", errorMessage, error);
            return res.status(500).json({
                error: "Failed to fetch queues.",
                details: errorMessage
            });
        }
    }
    if (req.method === "POST") {
        try {
            const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$helpers$2f$api$2f$auth$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["getSession"])({
                req
            });
            if (!session) {
                return res.status(401).json({
                    error: "Unauthorized"
                });
            }
            const { name } = req.body;
            if (!name || name.trim().length === 0) {
                return res.status(400).json({
                    error: "Queue name is required."
                });
            }
            const queue = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$helpers$2f$api$2f$db$2f$queues$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["createQueue"])({
                name,
                userId: session.user.id
            });
            return res.status(201).json(queue);
        } catch (error) {
            console.error("Failed to create queue.", error);
            return res.status(500).json({
                error: "Failed to create queue."
            });
        }
    }
    res.setHeader("Allow", [
        "GET",
        "POST"
    ]);
    return res.status(405).end();
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b2854b27._.js.map
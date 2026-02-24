self.__BUILD_MANIFEST = {
  "/": [
    "static/chunks/pages/index.js"
  ],
  "/q/[token]": [
    "static/chunks/pages/q/[token].js"
  ],
  "__rewrites": {
    "afterFiles": [],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/",
    "/_app",
    "/_error",
    "/api/auth/[...all]",
    "/api/queues",
    "/api/queues/[token]",
    "/api/queues/[token]/items",
    "/api/queues/[token]/items/reorder",
    "/api/queues/[token]/items/[id]",
    "/api/slack/callback",
    "/api/slack/connect",
    "/api/slack/disconnect",
    "/api/slack/status",
    "/q/[token]",
    "/sign-in",
    "/sign-up"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()
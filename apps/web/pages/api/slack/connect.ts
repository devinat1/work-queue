import type { NextApiRequest, NextApiResponse } from "next";
import { randomBytes } from "crypto";
import { serialize } from "cookie";
import { getSession } from "@helpers/api/auth";
import { getSlackOAuthUrl } from "@helpers/api/slack";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end();
  }

  try {
    const session = await getSession({ req });

    if (!session) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const state = randomBytes(16).toString("hex");

    res.setHeader(
      "Set-Cookie",
      serialize("slack_oauth_state", state, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 10,
        path: "/",
      })
    );

    return res.redirect(
      302,
      getSlackOAuthUrl({ state: `${session.user.id}:${state}` })
    );
  } catch (error) {
    console.error("Failed to initiate Slack OAuth.", error);
    return res
      .status(500)
      .json({ error: "Failed to initiate Slack OAuth." });
  }
}

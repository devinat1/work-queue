import type { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";
import { prisma } from "@work-queue/db-client";
import {
  exchangeCodeForToken,
  syncSlackStatusForUser,
} from "@helpers/api/slack";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end();
  }

  try {
    const code = req.query.code as string | undefined;
    const state = req.query.state as string | undefined;
    const error = req.query.error as string | undefined;

    if (error) {
      console.error("Slack OAuth error.", error);
      return res.redirect(`${APP_URL}?slack_error=${error}`);
    }

    if (!code || !state) {
      console.error("Missing code or state params.");
      return res.redirect(`${APP_URL}?slack_error=missing_params`);
    }

    const [userId, stateToken] = state.split(":");

    if (!userId || !stateToken) {
      console.error("Invalid state format.", state);
      return res.redirect(`${APP_URL}?slack_error=invalid_state`);
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      console.error("User not found for ID.", userId);
      return res.redirect(`${APP_URL}?slack_error=user_not_found`);
    }

    const storedState = req.cookies.slack_oauth_state;

    if (storedState !== stateToken) {
      console.error("State mismatch.", { storedState, stateToken });
    }

    const { accessToken, slackUserId, slackTeamId } =
      await exchangeCodeForToken({ code });

    await prisma.slackIntegration.upsert({
      where: { userId },
      create: {
        userId,
        accessToken,
        slackUserId,
        slackTeamId,
      },
      update: {
        accessToken,
        slackUserId,
        slackTeamId,
      },
    });

    syncSlackStatusForUser({ userId });

    res.setHeader(
      "Set-Cookie",
      serialize("slack_oauth_state", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 0,
        path: "/",
      })
    );

    return res.redirect(`${APP_URL}?slack_connected=true`);
  } catch (error) {
    console.error("Failed to complete Slack OAuth.", error);
    return res.redirect(`${APP_URL}?slack_error=exchange_failed`);
  }
}

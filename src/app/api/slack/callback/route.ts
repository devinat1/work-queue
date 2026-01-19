import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { exchangeCodeForToken, syncSlackStatusForUser } from "@/lib/slack";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const code = searchParams.get("code");
    const state = searchParams.get("state");
    const error = searchParams.get("error");

    if (error) {
      console.error("Slack OAuth error.", error);
      return NextResponse.redirect(`${APP_URL}?slack_error=${error}`);
    }

    if (!code || !state) {
      return NextResponse.redirect(`${APP_URL}?slack_error=missing_params`);
    }

    const [userId, stateToken] = state.split(":");

    if (!userId || !stateToken) {
      return NextResponse.redirect(`${APP_URL}?slack_error=invalid_state`);
    }

    const cookieStore = await cookies();
    const storedState = cookieStore.get("slack_oauth_state")?.value;

    if (storedState !== stateToken) {
      return NextResponse.redirect(`${APP_URL}?slack_error=state_mismatch`);
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

    await syncSlackStatusForUser({ userId });

    const response = NextResponse.redirect(`${APP_URL}?slack_connected=true`);

    response.cookies.delete("slack_oauth_state");

    return response;
  } catch (error) {
    console.error("Failed to complete Slack OAuth.", error);
    return NextResponse.redirect(`${APP_URL}?slack_error=exchange_failed`);
  }
}

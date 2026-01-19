import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth-helpers";
import { getSlackOAuthUrl } from "@/lib/slack";
import { randomBytes } from "crypto";

export async function GET() {
  try {
    const session = await getSession();

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const state = randomBytes(16).toString("hex");

    const response = NextResponse.redirect(
      getSlackOAuthUrl({ state: `${session.user.id}:${state}` })
    );

    response.cookies.set("slack_oauth_state", state, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 10,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Failed to initiate Slack OAuth.", error);
    return NextResponse.json(
      { error: "Failed to initiate Slack OAuth." },
      { status: 500 }
    );
  }
}

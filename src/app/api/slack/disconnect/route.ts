import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth-helpers";
import { setSlackStatus } from "@/lib/slack";

export async function POST() {
  try {
    const session = await getSession();

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const slackIntegration = await prisma.slackIntegration.findUnique({
      where: { userId: session.user.id },
    });

    if (!slackIntegration) {
      return NextResponse.json(
        { error: "No Slack integration found." },
        { status: 404 }
      );
    }

    try {
      await setSlackStatus({
        accessToken: slackIntegration.accessToken,
        status: { text: "", emoji: "" },
      });
    } catch (error) {
      console.error("Failed to clear Slack status.", error);
    }

    await prisma.slackIntegration.delete({
      where: { userId: session.user.id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to disconnect Slack.", error);
    return NextResponse.json(
      { error: "Failed to disconnect Slack." },
      { status: 500 }
    );
  }
}

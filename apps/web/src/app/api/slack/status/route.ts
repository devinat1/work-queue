import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth-helpers";

export async function GET() {
  try {
    const session = await getSession();

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const slackIntegration = await prisma.slackIntegration.findUnique({
      where: { userId: session.user.id },
      select: {
        slackTeamId: true,
        createdAt: true,
      },
    });

    return NextResponse.json({
      connected: slackIntegration !== null,
      slackTeamId: slackIntegration?.slackTeamId ?? null,
      connectedAt: slackIntegration?.createdAt ?? null,
    });
  } catch (error) {
    console.error("Failed to get Slack status.", error);
    return NextResponse.json(
      { error: "Failed to get Slack status." },
      { status: 500 }
    );
  }
}

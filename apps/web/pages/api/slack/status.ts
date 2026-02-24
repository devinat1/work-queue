import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@work-queue/db-client";
import { getSession } from "@helpers/api/auth";

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

    const slackIntegration = await prisma.slackIntegration.findUnique({
      where: { userId: session.user.id },
      select: {
        slackTeamId: true,
        createdAt: true,
      },
    });

    return res.status(200).json({
      connected: slackIntegration !== null,
      slackTeamId: slackIntegration?.slackTeamId ?? null,
      connectedAt: slackIntegration?.createdAt ?? null,
    });
  } catch (error) {
    console.error("Failed to get Slack status.", error);
    return res.status(500).json({ error: "Failed to get Slack status." });
  }
}

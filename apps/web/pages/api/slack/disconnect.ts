import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@work-queue/db-client";
import { getSession } from "@helpers/api/auth";
import { setSlackStatus } from "@helpers/api/slack";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end();
  }

  try {
    const session = await getSession({ req });

    if (!session) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const slackIntegration = await prisma.slackIntegration.findUnique({
      where: { userId: session.user.id },
    });

    if (!slackIntegration) {
      return res.status(404).json({ error: "No Slack integration found." });
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

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Failed to disconnect Slack.", error);
    return res.status(500).json({ error: "Failed to disconnect Slack." });
  }
}

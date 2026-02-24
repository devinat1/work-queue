import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@work-queue/db-client";
import { getSession } from "@helpers/api/auth";
import { reorderQueueItems } from "@helpers/api/db/queueItems";
import { syncSlackStatusForQueue } from "@helpers/api/slack";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "PATCH") {
    res.setHeader("Allow", ["PATCH"]);
    return res.status(405).end();
  }

  try {
    const session = await getSession({ req });

    if (!session) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const token = req.query.token as string;
    const { items } = req.body as {
      items: { id: string; position: number }[];
    };

    if (!items || !Array.isArray(items)) {
      return res.status(400).json({ error: "Items array is required." });
    }

    const queue = await prisma.queue.findUnique({
      where: { shareToken: token },
    });

    if (!queue) {
      return res.status(404).json({ error: "Queue not found." });
    }

    if (queue.userId !== session.user.id) {
      return res.status(403).json({ error: "Forbidden" });
    }

    const updatedItems = await reorderQueueItems({
      queueId: queue.id,
      items,
    });

    syncSlackStatusForQueue({ queueId: queue.id });

    return res.status(200).json(updatedItems);
  } catch (error) {
    console.error("Failed to reorder items.", error);
    return res.status(500).json({ error: "Failed to reorder items." });
  }
}

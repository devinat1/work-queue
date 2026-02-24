import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@work-queue/db-client";
import { getSession } from "@helpers/api/auth";
import { createQueueItem } from "@helpers/api/db/queueItems";
import { syncSlackStatusForQueue } from "@helpers/api/slack";

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

    const token = req.query.token as string;
    const { title, description } = req.body as {
      title: string;
      description?: string;
    };

    if (!title || title.trim().length === 0) {
      return res.status(400).json({ error: "Item title is required." });
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

    const item = await createQueueItem({
      queueId: queue.id,
      title,
      description,
    });

    syncSlackStatusForQueue({ queueId: queue.id });

    return res.status(201).json(item);
  } catch (error) {
    console.error("Failed to create item.", error);
    return res.status(500).json({ error: "Failed to create item." });
  }
}

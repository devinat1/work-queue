import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@work-queue/db-client";
import { VALID_ITEM_STATUSES } from "@work-queue/constants";
import { getSession } from "@helpers/api/auth";
import {
  findQueueItem,
  updateQueueItem,
  deleteQueueItem,
} from "@helpers/api/db/queueItems";
import { syncSlackStatusForQueue } from "@helpers/api/slack";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = req.query.token as string;
  const id = req.query.id as string;

  if (req.method === "PUT") {
    try {
      const session = await getSession({ req });

      if (!session) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      const { title, description, status } = req.body as {
        title?: string;
        description?: string;
        status?: string;
      };

      const queue = await prisma.queue.findUnique({
        where: { shareToken: token },
      });

      if (!queue) {
        return res.status(404).json({ error: "Queue not found." });
      }

      if (queue.userId !== session.user.id) {
        return res.status(403).json({ error: "Forbidden" });
      }

      const existingItem = await findQueueItem({
        itemId: id,
        queueId: queue.id,
      });

      if (!existingItem) {
        return res.status(404).json({ error: "Item not found." });
      }

      const updateData: {
        title?: string;
        description?: string | null;
        status?: string;
      } = {};

      if (title !== undefined) {
        if (title.trim().length === 0) {
          return res
            .status(400)
            .json({ error: "Item title cannot be empty." });
        }
        updateData.title = title.trim();
      }

      if (description !== undefined) {
        updateData.description = description.trim() || null;
      }

      if (status !== undefined) {
        if (!VALID_ITEM_STATUSES.includes(status)) {
          return res.status(400).json({ error: "Invalid status value." });
        }
        updateData.status = status;
      }

      const item = await updateQueueItem({
        itemId: id,
        queueId: queue.id,
        updates: updateData,
      });

      syncSlackStatusForQueue({ queueId: queue.id });

      return res.status(200).json(item);
    } catch (error) {
      console.error("Failed to update item.", error);
      return res.status(500).json({ error: "Failed to update item." });
    }
  }

  if (req.method === "DELETE") {
    try {
      const session = await getSession({ req });

      if (!session) {
        return res.status(401).json({ error: "Unauthorized" });
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

      const existingItem = await findQueueItem({
        itemId: id,
        queueId: queue.id,
      });

      if (!existingItem) {
        return res.status(404).json({ error: "Item not found." });
      }

      await deleteQueueItem({ itemId: id });

      syncSlackStatusForQueue({ queueId: queue.id });

      return res.status(200).json({ success: true });
    } catch (error) {
      console.error("Failed to delete item.", error);
      return res.status(500).json({ error: "Failed to delete item." });
    }
  }

  res.setHeader("Allow", ["PUT", "DELETE"]);
  return res.status(405).end();
}

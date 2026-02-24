import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "@helpers/api/auth";
import {
  fetchQueueByToken,
  updateQueue,
  deleteQueue,
  verifyQueueOwnership,
} from "@helpers/api/db/queues";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = req.query.token as string;

  if (req.method === "GET") {
    try {
      const queue = await fetchQueueByToken({ shareToken: token });

      if (!queue) {
        return res.status(404).json({ error: "Queue not found." });
      }

      return res.status(200).json(queue);
    } catch (error) {
      console.error("Failed to fetch queue.", error);
      return res.status(500).json({ error: "Failed to fetch queue." });
    }
  }

  if (req.method === "PUT") {
    try {
      const session = await getSession({ req });

      if (!session) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      const ownership = await verifyQueueOwnership({
        shareToken: token,
        userId: session.user.id,
      });

      if (!ownership) {
        return res
          .status(404)
          .json({ error: "Queue not found or forbidden." });
      }

      const { name } = req.body as { name: string };

      if (!name || name.trim().length === 0) {
        return res.status(400).json({ error: "Queue name is required." });
      }

      const queue = await updateQueue({ shareToken: token, name });

      return res.status(200).json(queue);
    } catch (error) {
      console.error("Failed to update queue.", error);
      return res.status(500).json({ error: "Failed to update queue." });
    }
  }

  if (req.method === "DELETE") {
    try {
      const session = await getSession({ req });

      if (!session) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      const ownership = await verifyQueueOwnership({
        shareToken: token,
        userId: session.user.id,
      });

      if (!ownership) {
        return res
          .status(404)
          .json({ error: "Queue not found or forbidden." });
      }

      await deleteQueue({ shareToken: token });

      return res.status(200).json({ success: true });
    } catch (error) {
      console.error("Failed to delete queue.", error);
      return res.status(500).json({ error: "Failed to delete queue." });
    }
  }

  res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
  return res.status(405).end();
}

import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "@helpers/api/auth";
import { fetchUserQueues, createQueue } from "@helpers/api/db/queues";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const session = await getSession({ req });

      if (!session) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      const queues = await fetchUserQueues({ userId: session.user.id });

      return res.status(200).json(queues);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      console.error("Failed to fetch queues:", errorMessage, error);
      return res
        .status(500)
        .json({ error: "Failed to fetch queues.", details: errorMessage });
    }
  }

  if (req.method === "POST") {
    try {
      const session = await getSession({ req });

      if (!session) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      const { name } = req.body as { name: string };

      if (!name || name.trim().length === 0) {
        return res.status(400).json({ error: "Queue name is required." });
      }

      const queue = await createQueue({ name, userId: session.user.id });

      return res.status(201).json(queue);
    } catch (error) {
      console.error("Failed to create queue.", error);
      return res.status(500).json({ error: "Failed to create queue." });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).end();
}

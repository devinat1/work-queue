import type { IncomingMessage } from "http";
import { auth } from "@/lib/auth";
import { prisma } from "@work-queue/db-client";

function toHeaders({ req }: { req: IncomingMessage }): Headers {
  const headerEntries: Record<string, string> = {};
  for (const [key, value] of Object.entries(req.headers)) {
    if (value) {
      headerEntries[key] = Array.isArray(value) ? value.join(", ") : value;
    }
  }
  return new Headers(headerEntries);
}

export async function getSession({ req }: { req: IncomingMessage }) {
  const session = await auth.api.getSession({
    headers: toHeaders({ req }),
  });
  return session;
}

export async function requireAuth({ req }: { req: IncomingMessage }) {
  const session = await getSession({ req });
  if (!session) {
    throw new Error("Unauthorized");
  }
  return session;
}

export async function requireQueueOwnership({
  req,
  shareToken,
}: {
  req: IncomingMessage;
  shareToken: string;
}) {
  const session = await requireAuth({ req });

  const queue = await prisma.queue.findUnique({
    where: { shareToken },
    select: { userId: true },
  });

  if (!queue) {
    throw new Error("Queue not found");
  }

  if (queue.userId !== session.user.id) {
    throw new Error("Forbidden");
  }

  return session;
}

export async function isQueueOwner({
  req,
  shareToken,
}: {
  req: IncomingMessage;
  shareToken: string;
}): Promise<boolean> {
  const session = await getSession({ req });
  if (!session) {
    return false;
  }

  const queue = await prisma.queue.findUnique({
    where: { shareToken },
    select: { userId: true },
  });

  if (!queue) {
    return false;
  }

  return queue.userId === session.user.id;
}

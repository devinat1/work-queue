import { headers } from "next/headers";
import { auth } from "./auth";
import { prisma } from "./prisma";

export async function getSession() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return session;
}

export async function requireAuth() {
  const session = await getSession();
  if (!session) {
    throw new Error("Unauthorized");
  }
  return session;
}

export async function requireQueueOwnership(shareToken: string) {
  const session = await requireAuth();

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

export async function isQueueOwner(shareToken: string): Promise<boolean> {
  const session = await getSession();
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

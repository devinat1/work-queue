import { prisma } from "@work-queue/db-client";
import { generateShareToken } from "@work-queue/utils";

export function fetchUserQueues({ userId }: { userId: string }) {
  return prisma.queue.findMany({
    where: { userId },
    include: {
      _count: {
        select: { items: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });
}

export function fetchQueueByToken({ shareToken }: { shareToken: string }) {
  return prisma.queue.findUnique({
    where: { shareToken },
    include: {
      items: {
        orderBy: { position: "asc" },
      },
    },
  });
}

export function fetchQueueWithUser({ shareToken }: { shareToken: string }) {
  return prisma.queue.findUnique({
    where: { shareToken },
    include: {
      items: {
        orderBy: { position: "asc" },
      },
      user: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
}

export function createQueue({
  name,
  userId,
}: {
  name: string;
  userId: string;
}) {
  const shareToken = generateShareToken();
  return prisma.queue.create({
    data: {
      name: name.trim(),
      shareToken,
      userId,
    },
  });
}

export function updateQueue({
  shareToken,
  name,
}: {
  shareToken: string;
  name: string;
}) {
  return prisma.queue.update({
    where: { shareToken },
    data: { name: name.trim() },
  });
}

export function deleteQueue({ shareToken }: { shareToken: string }) {
  return prisma.queue.delete({
    where: { shareToken },
  });
}

export async function verifyQueueOwnership({
  shareToken,
  userId,
}: {
  shareToken: string;
  userId: string;
}) {
  const queue = await prisma.queue.findUnique({
    where: { shareToken },
    select: { userId: true },
  });

  if (!queue) {
    return null;
  }

  if (queue.userId !== userId) {
    return null;
  }

  return queue;
}

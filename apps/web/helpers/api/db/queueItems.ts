import { prisma } from "@work-queue/db-client";

export async function createQueueItem({
  queueId,
  title,
  description,
}: {
  queueId: string;
  title: string;
  description?: string | null;
}) {
  const lastItem = await prisma.queueItem.findFirst({
    where: { queueId },
    orderBy: { position: "desc" },
    select: { position: true },
  });

  const nextPosition = lastItem ? lastItem.position + 1 : 0;

  return prisma.queueItem.create({
    data: {
      title: title.trim(),
      description: description?.trim() ?? null,
      position: nextPosition,
      queueId,
    },
  });
}

export function updateQueueItem({
  itemId,
  queueId,
  updates,
}: {
  itemId: string;
  queueId: string;
  updates: {
    title?: string;
    description?: string | null;
    status?: string;
  };
}) {
  return prisma.queueItem.update({
    where: { id: itemId },
    data: updates,
  });
}

export function deleteQueueItem({
  itemId,
}: {
  itemId: string;
}) {
  return prisma.queueItem.delete({
    where: { id: itemId },
  });
}

export async function findQueueItem({
  itemId,
  queueId,
}: {
  itemId: string;
  queueId: string;
}) {
  return prisma.queueItem.findFirst({
    where: { id: itemId, queueId },
  });
}

export async function reorderQueueItems({
  queueId,
  items,
}: {
  queueId: string;
  items: { id: string; position: number }[];
}) {
  const updatePromises = items.map((item) =>
    prisma.queueItem.update({
      where: { id: item.id },
      data: { position: item.position },
    })
  );

  await Promise.all(updatePromises);

  return prisma.queueItem.findMany({
    where: { queueId },
    orderBy: { position: "asc" },
  });
}

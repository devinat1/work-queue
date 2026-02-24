import type { Queue, QueueItem } from "@work-queue/types";

export const createQueue = async ({
  name,
}: {
  name: string;
}): Promise<Queue> => {
  const response = await fetch("/api/queues", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.error || "Failed to create queue.");
  }

  return response.json();
};

export const deleteQueue = async ({
  shareToken,
}: {
  shareToken: string;
}): Promise<void> => {
  const response = await fetch(`/api/queues/${shareToken}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete queue.");
  }
};

export const reorderQueueItems = async ({
  shareToken,
  items,
}: {
  shareToken: string;
  items: { id: string; position: number }[];
}): Promise<void> => {
  await fetch(`/api/queues/${shareToken}/items/reorder`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items }),
  });
};

export const createQueueItem = async ({
  shareToken,
  title,
  description,
}: {
  shareToken: string;
  title: string;
  description: string | null;
}): Promise<QueueItem> => {
  const response = await fetch(`/api/queues/${shareToken}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description }),
  });

  if (!response.ok) {
    throw new Error("API request failed.");
  }

  return response.json();
};

export const updateQueueItem = async ({
  shareToken,
  itemId,
  updates,
}: {
  shareToken: string;
  itemId: string;
  updates: Partial<Pick<QueueItem, "title" | "description" | "status">>;
}): Promise<QueueItem> => {
  const response = await fetch(
    `/api/queues/${shareToken}/items/${itemId}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    }
  );

  if (!response.ok) {
    throw new Error("API request failed.");
  }

  return response.json();
};

export const deleteQueueItem = async ({
  shareToken,
  itemId,
}: {
  shareToken: string;
  itemId: string;
}): Promise<void> => {
  const response = await fetch(
    `/api/queues/${shareToken}/items/${itemId}`,
    { method: "DELETE" }
  );

  if (!response.ok) {
    throw new Error("API request failed.");
  }
};

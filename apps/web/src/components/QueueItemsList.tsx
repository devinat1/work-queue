"use client";

import { useState, useRef, useMemo } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { QueueItemCard } from "./QueueItemCard";
import { AddItemForm } from "./AddItemForm";
import type { QueueItem } from "@work-queue/types";
import { TEMP_ID_PREFIX } from "@work-queue/constants";
const generateTempId = (): string => `${TEMP_ID_PREFIX}${crypto.randomUUID()}`;
const isTempId = (id: string): boolean => id.startsWith(TEMP_ID_PREFIX);

const sortItemsByStatus = (items: QueueItem[]): QueueItem[] =>
  [...items].sort((a, b) => {
    const aCompleted = a.status === "completed" ? 1 : 0;
    const bCompleted = b.status === "completed" ? 1 : 0;
    if (aCompleted !== bCompleted) return aCompleted - bCompleted;
    return a.position - b.position;
  });

interface QueueItemsListProps {
  shareToken: string;
  initialItems: QueueItem[];
  isOwner: boolean;
}

export function QueueItemsList({
  shareToken,
  initialItems,
  isOwner,
}: QueueItemsListProps) {
  const [items, setItems] = useState<QueueItem[]>(initialItems);
  const sortedItems = useMemo(() => sortItemsByStatus(items), [items]);
  const pendingCreatesRef = useRef<Set<string>>(new Set());

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) {
      return;
    }

    const oldIndex = sortedItems.findIndex((item) => item.id === active.id);
    const newIndex = sortedItems.findIndex((item) => item.id === over.id);

    const previousItems = items;
    const newItems = arrayMove(sortedItems, oldIndex, newIndex).map(
      (item, index) => ({ ...item, position: index })
    );
    setItems(newItems);

    const reorderData = newItems
      .filter((item) => !isTempId(item.id))
      .map((item, index) => ({
        id: item.id,
        position: index,
      }));

    try {
      await fetch(`/api/queues/${shareToken}/items/reorder`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: reorderData }),
      });
    } catch (error) {
      console.error("Failed to reorder items.", error);
      setItems(previousItems);
    }
  };

  const handleAddItem = async (title: string, description: string | null): Promise<void> => {
    const tempId = generateTempId();
    const optimisticItem: QueueItem = {
      id: tempId,
      title,
      description,
      position: items.length,
      status: "pending",
      queueId: items[0]?.queueId ?? shareToken,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setItems((current) => [...current, optimisticItem]);
    pendingCreatesRef.current.add(tempId);

    try {
      const response = await fetch(`/api/queues/${shareToken}/items`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      });

      if (!pendingCreatesRef.current.has(tempId)) return;

      if (response.ok) {
        const realItem = await response.json();
        setItems((current) =>
          current.map((item) => (item.id === tempId ? realItem : item))
        );
      } else {
        throw new Error("API request failed.");
      }
    } catch (error) {
      console.error("Failed to create item.", error);
      setItems((current) => current.filter((item) => item.id !== tempId));
    } finally {
      pendingCreatesRef.current.delete(tempId);
    }
  };

  const handleUpdateItem = async (
    itemId: string,
    updates: Partial<Pick<QueueItem, "title" | "description" | "status">>
  ): Promise<void> => {
    const originalItem = items.find((item) => item.id === itemId);
    if (!originalItem) return;

    setItems((current) =>
      current.map((item) =>
        item.id === itemId ? { ...item, ...updates } : item
      )
    );

    try {
      const response = await fetch(
        `/api/queues/${shareToken}/items/${itemId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updates),
        }
      );

      if (response.ok) {
        const updatedItem = await response.json();
        setItems((current) =>
          current.map((item) => (item.id === itemId ? updatedItem : item))
        );
      } else {
        throw new Error("API request failed.");
      }
    } catch (error) {
      console.error("Failed to update item.", error);
      setItems((current) =>
        current.map((item) => (item.id === itemId ? originalItem : item))
      );
    }
  };

  const handleDeleteItem = async (itemId: string): Promise<void> => {
    if (isTempId(itemId)) {
      pendingCreatesRef.current.delete(itemId);
      setItems((current) => current.filter((item) => item.id !== itemId));
      return;
    }

    const deletedItem = items.find((item) => item.id === itemId);
    const deletedIndex = items.findIndex((item) => item.id === itemId);
    if (!deletedItem) return;

    setItems((current) => current.filter((item) => item.id !== itemId));

    try {
      const response = await fetch(
        `/api/queues/${shareToken}/items/${itemId}`,
        { method: "DELETE" }
      );

      if (!response.ok) {
        throw new Error("API request failed.");
      }
    } catch (error) {
      console.error("Failed to delete item.", error);
      setItems((current) => {
        const restored = [...current];
        restored.splice(deletedIndex, 0, deletedItem);
        return restored;
      });
    }
  };

  if (!isOwner) {
    return (
      <div className="flex flex-col gap-6">
        {items.length === 0 ? (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            <div className="text-lg">No items in this queue</div>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {sortedItems.map((item, index) => (
              <QueueItemCard
                key={item.id}
                item={item}
                isFirst={index === 0}
                isOwner={false}
                onUpdate={handleUpdateItem}
                onDelete={handleDeleteItem}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <AddItemForm onAddItem={handleAddItem} />

      {items.length === 0 ? (
        <div className="text-center py-12 text-gray-500 dark:text-gray-400">
          <div className="text-lg">No items in this queue</div>
          <div className="text-sm">Add your first item above</div>
        </div>
      ) : (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={sortedItems.map((item) => item.id)}
            strategy={verticalListSortingStrategy}
          >
            <div className="flex flex-col gap-4">
              {sortedItems.map((item, index) => (
                <QueueItemCard
                  key={item.id}
                  item={item}
                  isFirst={index === 0}
                  isOwner={true}
                  onUpdate={handleUpdateItem}
                  onDelete={handleDeleteItem}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      )}
    </div>
  );
}

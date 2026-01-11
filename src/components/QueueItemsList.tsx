"use client";

import { useState } from "react";
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
import type { QueueItem } from "@/lib/types";

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

    const oldIndex = items.findIndex((item) => item.id === active.id);
    const newIndex = items.findIndex((item) => item.id === over.id);

    const newItems = arrayMove(items, oldIndex, newIndex);
    setItems(newItems);

    const reorderData = newItems.map((item, index) => ({
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
      setItems(initialItems);
    }
  };

  const handleItemAdded = (newItem: QueueItem) => {
    setItems((currentItems) => [...currentItems, newItem]);
  };

  const handleItemUpdate = (updatedItem: QueueItem) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      )
    );
  };

  const handleItemDelete = (itemId: string) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.id !== itemId)
    );
  };

  if (!isOwner) {
    return (
      <div className="flex flex-col gap-6">
        {items.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <div className="text-lg">No items in this queue</div>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {items.map((item, index) => (
              <QueueItemCard
                key={item.id}
                item={item}
                shareToken={shareToken}
                isFirst={index === 0}
                isOwner={false}
                onUpdate={handleItemUpdate}
                onDelete={handleItemDelete}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <AddItemForm shareToken={shareToken} onItemAdded={handleItemAdded} />

      {items.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
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
            items={items.map((item) => item.id)}
            strategy={verticalListSortingStrategy}
          >
            <div className="flex flex-col gap-2">
              {items.map((item, index) => (
                <QueueItemCard
                  key={item.id}
                  item={item}
                  shareToken={shareToken}
                  isFirst={index === 0}
                  isOwner={true}
                  onUpdate={handleItemUpdate}
                  onDelete={handleItemDelete}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      )}
    </div>
  );
}

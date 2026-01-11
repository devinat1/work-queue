"use client";

import { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { QueueItem } from "@/lib/types";

function renderTextWithLinks(text: string, isCompleted: boolean): React.ReactNode[] {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);

  return parts.map((part, index) => {
    if (urlRegex.test(part)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-blue-600 hover:text-blue-800 underline ${isCompleted ? "line-through" : ""}`}
          onClick={(event) => event.stopPropagation()}
        >
          {part}
        </a>
      );
    }
    return part;
  });
}

interface QueueItemCardProps {
  item: QueueItem;
  shareToken: string;
  isFirst: boolean;
  isOwner: boolean;
  onUpdate: (updatedItem: QueueItem) => void;
  onDelete: (itemId: string) => void;
}

export function QueueItemCard({
  item,
  shareToken,
  isFirst,
  isOwner,
  onUpdate,
  onDelete,
}: QueueItemCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(item.title);
  const [isLoading, setIsLoading] = useState(false);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id, disabled: !isOwner });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleSaveEdit = async () => {
    if (editTitle.trim().length === 0) {
      setEditTitle(item.title);
      setIsEditing(false);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        `/api/queues/${shareToken}/items/${item.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title: editTitle }),
        }
      );

      if (response.ok) {
        const updatedItem = await response.json();
        onUpdate(updatedItem);
        setIsEditing(false);
      }
    } catch (error) {
      console.error("Failed to update item.", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    const isConfirmed = window.confirm(
      `Are you sure you want to delete "${item.title}"?`
    );

    if (!isConfirmed) {
      return;
    }

    try {
      const response = await fetch(
        `/api/queues/${shareToken}/items/${item.id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        onDelete(item.id);
      }
    } catch (error) {
      console.error("Failed to delete item.", error);
    }
  };

  const handleToggleStatus = async () => {
    if (!isOwner) return;

    const newStatus = item.status === "completed" ? "pending" : "completed";

    try {
      const response = await fetch(
        `/api/queues/${shareToken}/items/${item.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: newStatus }),
        }
      );

      if (response.ok) {
        const updatedItem = await response.json();
        onUpdate(updatedItem);
      }
    } catch (error) {
      console.error("Failed to update status.", error);
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`p-4 bg-white border rounded-lg ${
        isFirst ? "border-blue-400 ring-2 ring-blue-100" : "border-gray-200"
      } ${isDragging ? "opacity-50 shadow-lg" : ""}`}
    >
      <div className="flex items-center gap-4">
        {isOwner && (
          <button
            {...attributes}
            {...listeners}
            className="cursor-grab active:cursor-grabbing p-1 text-gray-400 hover:text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            </svg>
          </button>
        )}

        <button
          onClick={handleToggleStatus}
          disabled={!isOwner}
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
            item.status === "completed"
              ? "bg-green-500 border-green-500"
              : "border-gray-300"
          } ${isOwner ? "hover:border-gray-400 cursor-pointer" : "cursor-default"}`}
        >
          {item.status === "completed" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : null}
        </button>

        <div className="flex-1 min-w-0">
          {isEditing ? (
            <div className="flex gap-2">
              <input
                type="text"
                value={editTitle}
                onChange={(event) => setEditTitle(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleSaveEdit();
                  } else if (event.key === "Escape") {
                    setEditTitle(item.title);
                    setIsEditing(false);
                  }
                }}
                className="flex-1 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400 text-gray-900"
                autoFocus
                disabled={isLoading}
              />
              <button
                onClick={handleSaveEdit}
                disabled={isLoading}
                className="px-2 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
              >
                Save
              </button>
              <button
                onClick={() => {
                  setEditTitle(item.title);
                  setIsEditing(false);
                }}
                className="px-2 py-1 text-sm text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
            </div>
          ) : (
            <span
              className={`break-words ${
                item.status === "completed"
                  ? "line-through text-gray-400"
                  : "text-gray-900"
              }`}
            >
              {renderTextWithLinks(item.title, item.status === "completed")}
            </span>
          )}
        </div>

        {isOwner && !isEditing && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="p-1 text-gray-400 hover:text-gray-600"
              title="Edit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </button>
            <button
              onClick={handleDelete}
              className="p-1 text-gray-400 hover:text-red-500"
              title="Delete"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

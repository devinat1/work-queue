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
  isFirst: boolean;
  isOwner: boolean;
  onUpdate: (
    itemId: string,
    updates: Partial<Pick<QueueItem, "title" | "description" | "status">>
  ) => Promise<void>;
  onDelete: (itemId: string) => Promise<void>;
}

export function QueueItemCard({
  item,
  isFirst,
  isOwner,
  onUpdate,
  onDelete,
}: QueueItemCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(item.title);
  const [editDescription, setEditDescription] = useState(item.description ?? "");
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
      setEditDescription(item.description ?? "");
      setIsEditing(false);
      return;
    }

    setIsLoading(true);
    setIsEditing(false);

    const descriptionToSave = editDescription.trim().length > 0 ? editDescription.trim() : null;

    try {
      await onUpdate(item.id, { title: editTitle, description: descriptionToSave });
    } catch (error) {
      setEditTitle(item.title);
      setEditDescription(item.description ?? "");
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
      await onDelete(item.id);
    } catch (error) {
      console.error("Failed to delete item.", error);
    }
  };

  const handleToggleStatus = async () => {
    if (!isOwner) return;

    const newStatus = item.status === "completed" ? "pending" : "completed";

    try {
      await onUpdate(item.id, { status: newStatus });
    } catch (error) {
      console.error("Failed to update status.", error);
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`p-4 bg-white dark:bg-gray-900 border rounded-lg ${
        isFirst ? "border-blue-400 ring-2 ring-blue-100 dark:ring-blue-900" : "border-gray-200 dark:border-gray-700"
      } ${isDragging ? "opacity-50 shadow-lg" : ""}`}
    >
      <div className="flex items-center gap-4">
        {isOwner && (
          <button
            {...attributes}
            {...listeners}
            className="cursor-grab active:cursor-grabbing p-1 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
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
              : "border-gray-300 dark:border-gray-600"
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
            <div className="flex flex-col gap-2">
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
                      setEditDescription(item.description ?? "");
                      setIsEditing(false);
                    }
                  }}
                  className="flex-1 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400 dark:placeholder:text-gray-500 text-gray-900 dark:text-gray-100 dark:bg-gray-800"
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
                    setEditDescription(item.description ?? "");
                    setIsEditing(false);
                  }}
                  className="px-2 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                >
                  Cancel
                </button>
              </div>
              <textarea
                value={editDescription}
                onChange={(event) => setEditDescription(event.target.value)}
                placeholder="Description (optional)..."
                className="px-2 py-1 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400 dark:placeholder:text-gray-500 text-gray-900 dark:text-gray-100 dark:bg-gray-800 resize-none"
                disabled={isLoading}
                rows={2}
              />
            </div>
          ) : (
            <div className="flex flex-col gap-1">
              <span
                className={`break-words ${
                  item.status === "completed"
                    ? "line-through text-gray-400 dark:text-gray-500"
                    : "text-gray-900 dark:text-gray-100"
                }`}
              >
                {renderTextWithLinks(item.title, item.status === "completed")}
              </span>
              {item.description ? (
                <span
                  className={`break-words text-sm ${
                    item.status === "completed"
                      ? "line-through text-gray-300 dark:text-gray-600"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {renderTextWithLinks(item.description, item.status === "completed")}
                </span>
              ) : null}
            </div>
          )}
        </div>

        {isOwner && !isEditing && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setEditTitle(item.title);
                setEditDescription(item.description ?? "");
                setIsEditing(true);
              }}
              className="p-1 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
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
              className="p-1 text-gray-400 dark:text-gray-500 hover:text-red-500"
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

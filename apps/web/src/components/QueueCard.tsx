"use client";

import Link from "next/link";
import type { Queue } from "@work-queue/types";

interface QueueCardProps {
  queue: Queue;
  onDelete: (shareToken: string) => void;
}

export function QueueCard({ queue, onDelete }: QueueCardProps) {
  const handleDelete = async (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    const isConfirmed = window.confirm(
      `Are you sure you want to delete "${queue.name}"? This will also delete all items in the queue.`
    );

    if (!isConfirmed) {
      return;
    }

    try {
      const response = await fetch(`/api/queues/${queue.shareToken}`, {
        method: "DELETE",
      });

      if (response.ok) {
        onDelete(queue.shareToken);
      }
    } catch (error) {
      console.error("Failed to delete queue.", error);
    }
  };

  return (
    <Link href={`/q/${queue.shareToken}`} className="block">
      <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-400 hover:shadow-md dark:hover:shadow-gray-900/50 transition-all bg-white dark:bg-gray-900">
        <div className="flex items-center justify-between gap-4">
          <div className="font-medium text-gray-900 dark:text-gray-100 truncate min-w-0">
            {queue.name}
          </div>
          <button
            onClick={handleDelete}
            className="p-2 text-gray-400 dark:text-gray-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors"
            title="Delete queue"
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
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </Link>
  );
}

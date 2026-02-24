"use client";

import { useState } from "react";
import { QueueCard } from "./QueueCard";
import type { Queue } from "@work-queue/types";

interface QueueListHomeProps {
  initialQueues: Queue[];
}

export function QueueListHome({ initialQueues }: QueueListHomeProps) {
  const [queues, setQueues] = useState<Queue[]>(initialQueues);

  const handleDelete = (shareToken: string) => {
    setQueues((currentQueues) =>
      currentQueues.filter((queue) => queue.shareToken !== shareToken)
    );
  };

  if (queues.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500 dark:text-gray-400">
        <div className="text-lg">No queues yet</div>
        <div className="text-sm">Create your first queue above</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {queues.map((queue) => (
        <QueueCard key={queue.id} queue={queue} onDelete={handleDelete} />
      ))}
    </div>
  );
}

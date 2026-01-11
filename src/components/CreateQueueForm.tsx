"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function CreateQueueForm() {
  const [queueName, setQueueName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMessage("");

    if (queueName.trim().length === 0) {
      setErrorMessage("Queue name is required.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/queues", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: queueName }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to create queue.");
      }

      const queue = await response.json();
      router.push(`/q/${queue.shareToken}`);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to create queue.";
      setErrorMessage(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={queueName}
          onChange={(event) => setQueueName(event.target.value)}
          placeholder="Enter queue name..."
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400 text-gray-900"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? "Creating..." : "Create Queue"}
        </button>
      </div>
      {errorMessage.length > 0 ? (
        <div className="text-red-500 text-sm">{errorMessage}</div>
      ) : null}
    </form>
  );
}

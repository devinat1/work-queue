"use client";

import { useState } from "react";

interface AddItemFormProps {
  onAddItem: (title: string) => Promise<void>;
}

export function AddItemForm({ onAddItem }: AddItemFormProps) {
  const [itemTitle, setItemTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (itemTitle.trim().length === 0) {
      return;
    }

    const titleToAdd = itemTitle;
    setItemTitle("");
    setIsLoading(true);

    try {
      await onAddItem(titleToAdd);
    } catch (error) {
      setItemTitle(titleToAdd);
      console.error("Failed to add item.", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={itemTitle}
        onChange={(event) => setItemTitle(event.target.value)}
        placeholder="Add a new item..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400 text-gray-900"
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={isLoading || itemTitle.trim().length === 0}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isLoading ? "Adding..." : "Add"}
      </button>
    </form>
  );
}

"use client";

import { useState, useEffect } from "react";

interface SlackStatus {
  connected: boolean;
  slackTeamId: string | null;
  connectedAt: string | null;
}

export function SlackConnectButton() {
  const [status, setStatus] = useState<SlackStatus | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDisconnecting, setIsDisconnecting] = useState(false);

  const fetchStatus = async () => {
    try {
      const response = await fetch("/api/slack/status");
      if (response.ok) {
        const data = (await response.json()) as SlackStatus;
        setStatus(data);
      }
    } catch (error) {
      console.error("Failed to fetch Slack status.", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  const handleConnect = () => {
    window.location.href = "/api/slack/connect";
  };

  const handleDisconnect = async () => {
    setIsDisconnecting(true);
    try {
      const response = await fetch("/api/slack/disconnect", {
        method: "POST",
      });
      if (response.ok) {
        setStatus({ connected: false, slackTeamId: null, connectedAt: null });
      }
    } catch (error) {
      console.error("Failed to disconnect Slack.", error);
    } finally {
      setIsDisconnecting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 bg-gray-100 border border-gray-200 rounded-lg">
        <div className="w-4 h-4 border-2 border-gray-300 border-t-gray-500 rounded-full animate-spin" />
        <span>Loading...</span>
      </div>
    );
  }

  if (status?.connected) {
    return (
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 px-3 py-2 text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg">
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
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>Slack connected</span>
        </div>
        <button
          onClick={handleDisconnect}
          disabled={isDisconnecting}
          className="px-3 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
        >
          {isDisconnecting ? "Disconnecting..." : "Disconnect"}
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={handleConnect}
      className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-[#4A154B] hover:bg-[#3e1240] rounded-lg transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
      </svg>
      <span>Connect Slack</span>
    </button>
  );
}

import useSWR from "swr";
import type { Queue } from "@work-queue/types";

const fetcher = (url: string) => fetch(url).then((response) => response.json());

export function useQueues() {
  return useSWR<Queue[]>("/api/queues", fetcher);
}

export function useQueue({ shareToken }: { shareToken: string }) {
  return useSWR<Queue>(shareToken ? `/api/queues/${shareToken}` : null, fetcher);
}

export function useSlackStatus() {
  return useSWR<{
    connected: boolean;
    slackTeamId: string | null;
    connectedAt: string | null;
  }>("/api/slack/status", fetcher);
}

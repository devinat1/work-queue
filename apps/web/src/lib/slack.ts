import { prisma } from "./prisma";
import { QueueItem } from "./types";

const SLACK_CLIENT_ID = process.env.SLACK_CLIENT_ID;
const SLACK_CLIENT_SECRET = process.env.SLACK_CLIENT_SECRET;
const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

const SLACK_OAUTH_SCOPES = ["users.profile:write"];
const SLACK_STATUS_CHAR_LIMIT = 100;

interface SlackOAuthResponse {
  ok: boolean;
  access_token?: string;
  authed_user?: {
    id: string;
    access_token: string;
  };
  team?: {
    id: string;
  };
  error?: string;
}

interface SlackProfileSetResponse {
  ok: boolean;
  error?: string;
}

interface SlackStatus {
  text: string;
  emoji: string;
}

export function getSlackOAuthUrl({ state }: { state: string }): string {
  const redirectUri = `${APP_URL}/api/slack/callback`;
  const params = new URLSearchParams({
    client_id: SLACK_CLIENT_ID ?? "",
    user_scope: SLACK_OAUTH_SCOPES.join(","),
    redirect_uri: redirectUri,
    state,
  });

  return `https://slack.com/oauth/v2/authorize?${params.toString()}`;
}

export async function exchangeCodeForToken({
  code,
}: {
  code: string;
}): Promise<{ accessToken: string; slackUserId: string; slackTeamId: string }> {
  const redirectUri = `${APP_URL}/api/slack/callback`;

  const response = await fetch("https://slack.com/api/oauth.v2.access", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: SLACK_CLIENT_ID ?? "",
      client_secret: SLACK_CLIENT_SECRET ?? "",
      code,
      redirect_uri: redirectUri,
    }),
  });

  const data = (await response.json()) as SlackOAuthResponse;

  if (!data.ok || !data.authed_user?.access_token) {
    throw new Error(data.error ?? "Failed to exchange code for token.");
  }

  return {
    accessToken: data.authed_user.access_token,
    slackUserId: data.authed_user.id,
    slackTeamId: data.team?.id ?? "",
  };
}

export function getSlackStatusFromQueue({
  items,
}: {
  items: QueueItem[];
}): SlackStatus {
  const pendingItems = items
    .filter((item) => item.status !== "completed")
    .sort((a, b) => a.position - b.position);

  const currentItem = pendingItems[0];
  const nextItem = pendingItems[1];

  if (!currentItem) {
    return { text: "", emoji: "" };
  }

  const statusText = nextItem
    ? `${currentItem.title} | Next: ${nextItem.title}`
    : currentItem.title;

  return {
    text: statusText.slice(0, SLACK_STATUS_CHAR_LIMIT),
    emoji: ":clipboard:",
  };
}

export async function setSlackStatus({
  accessToken,
  status,
}: {
  accessToken: string;
  status: SlackStatus;
}): Promise<void> {
  const response = await fetch("https://slack.com/api/users.profile.set", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      profile: {
        status_text: status.text,
        status_emoji: status.emoji,
        status_expiration: 0,
      },
    }),
  });

  const data = (await response.json()) as SlackProfileSetResponse;

  if (!data.ok) {
    throw new Error(data.error ?? "Failed to set Slack status.");
  }
}

export async function syncSlackStatusForUser({
  userId,
}: {
  userId: string;
}): Promise<void> {
  const slackIntegration = await prisma.slackIntegration.findUnique({
    where: { userId },
  });

  if (!slackIntegration) {
    return;
  }

  const queues = await prisma.queue.findMany({
    where: { userId },
    include: {
      items: {
        orderBy: { position: "asc" },
      },
    },
    orderBy: { updatedAt: "desc" },
    take: 1,
  });

  const mostRecentQueue = queues[0];
  const items = mostRecentQueue?.items ?? [];

  const status = getSlackStatusFromQueue({ items });

  try {
    await setSlackStatus({
      accessToken: slackIntegration.accessToken,
      status,
    });
  } catch (error) {
    console.error("Failed to sync Slack status.", error);
  }
}

export async function syncSlackStatusForQueue({
  queueId,
}: {
  queueId: string;
}): Promise<void> {
  const queue = await prisma.queue.findUnique({
    where: { id: queueId },
    include: {
      items: {
        orderBy: { position: "asc" },
      },
    },
  });

  if (!queue) {
    return;
  }

  const slackIntegration = await prisma.slackIntegration.findUnique({
    where: { userId: queue.userId },
  });

  if (!slackIntegration) {
    return;
  }

  const status = getSlackStatusFromQueue({ items: queue.items });

  try {
    await setSlackStatus({
      accessToken: slackIntegration.accessToken,
      status,
    });
  } catch (error) {
    console.error("Failed to sync Slack status.", error);
  }
}

export const disconnectSlack = async (): Promise<Response> => {
  const response = await fetch("/api/slack/disconnect", {
    method: "POST",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to disconnect Slack.");
  }

  return response;
};

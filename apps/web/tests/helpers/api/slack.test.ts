jest.mock("@work-queue/db-client", () => ({
  prisma: {},
}));

import { getSlackStatusFromQueue } from "@/lib/slack";
import {
  SLACK_OAUTH_SCOPES,
  SLACK_STATUS_CHAR_LIMIT,
} from "@work-queue/constants";
import type { QueueItem } from "@work-queue/types";

describe("SLACK_OAUTH_SCOPES", () => {
  it("should include users.profile:write scope", () => {
    expect(SLACK_OAUTH_SCOPES).toContain("users.profile:write");
  });
});

describe("SLACK_STATUS_CHAR_LIMIT", () => {
  it("should be 100", () => {
    expect(SLACK_STATUS_CHAR_LIMIT).toBe(100);
  });
});

describe("getSlackStatusFromQueue", () => {
  const makeItem = (overrides: Partial<QueueItem> = {}): QueueItem => ({
    id: "1",
    title: "Test item",
    description: null,
    position: 0,
    status: "pending",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    queueId: "queue-1",
    ...overrides,
  });

  it("should return empty status for empty queue", () => {
    const result = getSlackStatusFromQueue({ items: [] });
    expect(result.text).toBe("");
    expect(result.emoji).toBe("");
  });

  it("should return current item title for single item", () => {
    const items = [makeItem({ title: "Do something" })];
    const result = getSlackStatusFromQueue({ items });
    expect(result.text).toBe("Do something");
    expect(result.emoji).toBe(":clipboard:");
  });

  it("should include next item in status", () => {
    const items = [
      makeItem({ title: "First", position: 0 }),
      makeItem({ id: "2", title: "Second", position: 1 }),
    ];
    const result = getSlackStatusFromQueue({ items });
    expect(result.text).toBe("First | Next: Second");
  });

  it("should filter out completed items", () => {
    const items = [
      makeItem({ title: "Done", position: 0, status: "completed" }),
      makeItem({ id: "2", title: "Current", position: 1 }),
    ];
    const result = getSlackStatusFromQueue({ items });
    expect(result.text).toBe("Current");
  });

  it("should truncate long status text", () => {
    const longTitle = "A".repeat(120);
    const items = [makeItem({ title: longTitle })];
    const result = getSlackStatusFromQueue({ items });
    expect(result.text.length).toBeLessThanOrEqual(SLACK_STATUS_CHAR_LIMIT);
  });

  it("should return empty status when all items are completed", () => {
    const items = [
      makeItem({ title: "Done 1", status: "completed" }),
      makeItem({ id: "2", title: "Done 2", status: "completed" }),
    ];
    const result = getSlackStatusFromQueue({ items });
    expect(result.text).toBe("");
    expect(result.emoji).toBe("");
  });
});

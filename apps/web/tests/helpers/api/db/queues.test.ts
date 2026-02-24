import { generateShareToken } from "@work-queue/utils";
import { VALID_ITEM_STATUSES } from "@work-queue/constants";

describe("generateShareToken", () => {
  it("should return a non-empty string", () => {
    const token = generateShareToken();
    expect(token).toBeTruthy();
    expect(typeof token).toBe("string");
  });

  it("should return unique tokens on each call", () => {
    const token1 = generateShareToken();
    const token2 = generateShareToken();
    expect(token1).not.toBe(token2);
  });

  it("should return a base64url-encoded string", () => {
    const token = generateShareToken();
    expect(token).toMatch(/^[A-Za-z0-9_-]+$/);
  });
});

describe("VALID_ITEM_STATUSES", () => {
  it("should contain expected statuses", () => {
    expect(VALID_ITEM_STATUSES).toContain("pending");
    expect(VALID_ITEM_STATUSES).toContain("in-progress");
    expect(VALID_ITEM_STATUSES).toContain("completed");
  });

  it("should have exactly 3 statuses", () => {
    expect(VALID_ITEM_STATUSES).toHaveLength(3);
  });
});

import { TEMP_ID_PREFIX, VALID_ITEM_STATUSES } from "@work-queue/constants";

describe("TEMP_ID_PREFIX", () => {
  it("should be a defined string prefix", () => {
    expect(TEMP_ID_PREFIX).toBe("temp_");
  });

  it("should be usable for temp ID detection", () => {
    const tempId = `${TEMP_ID_PREFIX}abc123`;
    expect(tempId.startsWith(TEMP_ID_PREFIX)).toBe(true);
  });

  it("should not match non-temp IDs", () => {
    const realId = "cuid-abc123";
    expect(realId.startsWith(TEMP_ID_PREFIX)).toBe(false);
  });
});

describe("VALID_ITEM_STATUSES", () => {
  it("should not include invalid statuses", () => {
    expect(VALID_ITEM_STATUSES).not.toContain("active");
    expect(VALID_ITEM_STATUSES).not.toContain("done");
    expect(VALID_ITEM_STATUSES).not.toContain("cancelled");
  });
});

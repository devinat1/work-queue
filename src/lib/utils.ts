import { randomBytes } from "crypto";

export function generateShareToken(): string {
  return randomBytes(8).toString("base64url");
}

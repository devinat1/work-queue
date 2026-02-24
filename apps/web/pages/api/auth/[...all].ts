import type { NextApiRequest, NextApiResponse } from "next";
import { auth } from "@/lib/auth";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const protocol = req.headers["x-forwarded-proto"] || "http";
  const host = req.headers.host || "localhost:3000";
  const url = new URL(req.url ?? "/", `${protocol}://${host}`);

  const headers = new Headers();
  Object.entries(req.headers).forEach(([key, value]) => {
    if (typeof value === "string") {
      headers.append(key, value);
    } else if (Array.isArray(value)) {
      value.forEach((v) => headers.append(key, v));
    }
  });

  const hasBody = req.method !== "GET" && req.method !== "HEAD";
  const chunks: Buffer[] = [];

  if (hasBody) {
    await new Promise<void>((resolve) => {
      req.on("data", (chunk: Buffer) => chunks.push(chunk));
      req.on("end", resolve);
    });
  }

  const body = hasBody && chunks.length > 0 ? Buffer.concat(chunks) : undefined;

  const request = new Request(url.toString(), {
    method: req.method ?? "GET",
    headers,
    body,
  });

  const response = await auth.handler(request);

  response.headers.forEach((value, key) => {
    if (key === "set-cookie") {
      const cookies = response.headers.getSetCookie();
      cookies.forEach((cookie) => {
        res.appendHeader("set-cookie", cookie);
      });
    } else {
      res.setHeader(key, value);
    }
  });

  res.status(response.status);

  if (response.body) {
    const text = await response.text();
    res.send(text);
  } else {
    res.end();
  }
}

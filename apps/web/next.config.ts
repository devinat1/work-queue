import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@work-queue/types",
    "@work-queue/utils",
    "@work-queue/db-client",
    "@work-queue/constants",
    "@work-queue/hooks",
    "@work-queue/data-loaders",
  ],
};

export default nextConfig;

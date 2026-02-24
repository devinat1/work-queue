import type { Config } from "jest";

const config: Config = {
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@helpers/(.*)$": "<rootDir>/helpers/$1",
    "^@work-queue/(.*)$": "<rootDir>/../../packages/$1/src",
  },
  setupFiles: ["<rootDir>/tests/setup.ts"],
  testMatch: ["<rootDir>/tests/**/*.test.ts"],
};

export default config;

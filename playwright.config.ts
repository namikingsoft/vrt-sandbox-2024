import { defineConfig } from "@playwright/test";

export default defineConfig({
  testMatch: /.*\.e2e\.ts/,
  workers: process.env.CI ? 1 : undefined,
  webServer: {
    command: "yarn start-storybook-vrt",
    url: "http://127.0.0.1:8080",
  },
  expect: {
    timeout: 10 * 1000,
  },
  retries: 3,
});

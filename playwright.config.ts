import { defineConfig, devices } from "@playwright/test";
import * as envURLs from "./environments.json";

const env = {
  dev: envURLs.dev,
  prod: envURLs.prod,
  // test: envURLs.test,
};

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    baseURL: envURLs[process.env.ENV || "dev"],
    trace: "on",
    acceptDownloads: true,
    headless: false,
    screenshot: "on",
  },

  projects: [
    {
      name: "api",
      grep: [/@api/, /@Api/, /@API/],
    },
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
      grep: /@Desktop/,
      grepInvert: /@Mobile/,
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
      grep: /@Desktop/,
      grepInvert: /@Mobile/,
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
      grep: /@Desktop/,
      grepInvert: /@Mobile/,
    },
    {
      name: "mobile-chrome",
      use: { ...devices["Pixel 5"] },
      grep: /@Mobile/,
      grepInvert: /@Desktop/,
    },
    {
      name: "mobile-safari",
      use: { ...devices["iPhone 12"] },
      grep: /@Mobile/,
      grepInvert: /@Desktop/,
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

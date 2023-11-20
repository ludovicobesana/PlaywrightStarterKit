import { defineConfig, devices } from "@playwright/test";
import * as envURLs from "./environments.json";

const env = {
  dev: envURLs.dev,
  prod: envURLs.prod,
  // test: envURLs.test,
};

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL: envURLs[process.env.ENV || "dev"],
    trace: "on",
    acceptDownloads: true,
    headless: false,
    screenshot: "on",
  },

  /* Configure projects for major browsers */
  projects: [
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

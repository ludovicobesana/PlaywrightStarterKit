import { test, expect, type Page } from "@playwright/test";
import { LoginPage } from "@pages/login.page";
import LoginSteps from "@steps/login.steps";

test.describe("Lorem ipsum", () => {
  let loginPage: LoginPage;
  let loginPageSteps: LoginSteps;

  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
  });

  test("Lorem ipsum", async ({ page }) => {
    loginPage = new LoginPage(page);
    loginPageSteps = new LoginSteps(page, loginPage);

    await loginPageSteps.clickLoginButton();
  });
});

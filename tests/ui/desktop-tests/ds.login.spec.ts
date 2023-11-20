import { test, expect, type Page } from "@playwright/test";
import { LoginPage } from "@pages/login.page";
import LoginSteps from "@steps/login.steps";

test.describe("Login Feature @Desktop", () => {
  let loginPage: LoginPage;
  let loginPageSteps: LoginSteps;

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Failed login shows error message @Atomic", async ({ page }) => {
    loginPage = new LoginPage(page);
    loginPageSteps = new LoginSteps(page, loginPage);
    await loginPageSteps.clickLoginButton();
    await loginPageSteps.checkUsernameErrorMessage();
  });
});

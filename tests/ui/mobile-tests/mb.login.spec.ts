import { test } from "@playwright/test";
import { LoginPage } from "@pages/login.page";
import { PDPPage } from "@pages/pdp.page";
import LoginSteps from "@steps/login.steps";
import PDPSteps from "@steps/pdp.steps";

test.describe("Login Feature @Mobile", () => {
  let loginPage: LoginPage;
  let pdpPage: PDPPage;
  let loginPageSteps: LoginSteps;
  let pdpPageSteps: PDPSteps;

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Failed login shows error message @Atomic", async ({ page }) => {
    loginPage = new LoginPage(page);
    loginPageSteps = new LoginSteps(page, loginPage);
    await loginPageSteps.clickLoginButton();
    await loginPageSteps.checkUsernameErrorMessage();
  });

  test("User can complete login @Flow", async ({ page }) => {
    loginPage = new LoginPage(page);
    loginPageSteps = new LoginSteps(page, loginPage);
    pdpPageSteps = new PDPSteps(page, pdpPage);
    await loginPageSteps.typeUsername("standard_user");
    await loginPageSteps.typePassword("secret_sauce");
    await loginPageSteps.clickLoginButton();
    await pdpPageSteps.checkPDPPageTitle();
  });
});

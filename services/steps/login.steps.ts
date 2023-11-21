import { Page, expect } from "@playwright/test";
import { LoginPage } from "@pages/login.page";

export default class LoginSteps {
  private page: Page;
  private loginPage: LoginPage;

  constructor(page: Page, loginPage: LoginPage) {
    this.page = page;
    this.loginPage = new LoginPage(page);
  }

  async typeUsername(username: string) {
    await this.loginPage.getUsernameInput().fill(username);
  }

  async typePassword(password: string) {
    await this.loginPage.getPasswordInput().fill(password);
  }

  async clickLoginButton() {
    await this.loginPage.getLoginButton().click();
  }

  async checkUsernameErrorMessage() {
    await expect.soft(this.loginPage.getError()).toBeVisible();
    await expect(this.loginPage.getError()).toContainText("Epic sadface: Username is required");
  }
}

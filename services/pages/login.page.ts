import { expect, type Locator, type Page } from "@playwright/test";
import * as selectors from "@selectors/selectors.json";

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public getLoginButton(): Locator {
    return this.page.locator(selectors.LoginPage.loginButton);
  }
  public getError(): Locator {
    return this.page.locator(selectors.LoginPage.errorMessage);
  }
}

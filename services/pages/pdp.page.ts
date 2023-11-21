import { expect, type Locator, type Page } from "@playwright/test";
import * as selectors from "@selectors/selectors.json";

export class PDPPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}

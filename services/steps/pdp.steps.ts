import { Page, expect } from "@playwright/test";
import { PDPPage } from "@pages/pdp.page";

export default class PDPSteps {
  private page: Page;
  private pdpPage: PDPPage;

  constructor(page: Page, pdpPage: PDPPage) {
    this.page = page;
    this.pdpPage = new PDPPage(page);
  }

  async checkPDPPageTitle() {
    await expect(this.page).toHaveURL("/inventory.html");
  }
}

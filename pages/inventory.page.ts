import { Page, Locator } from "@playwright/test";

class InventoryPage {
  private page: Page;
  readonly ctnInventory: Locator;

  constructor(page: Page) {
    this.page = page;
    this.ctnInventory = page.locator(".inventory_container");
  }
}

export default InventoryPage;

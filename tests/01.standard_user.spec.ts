import { test, expect } from "@playwright/test";
import LoginPage from "../pages/login.page";
import { Account, Password } from "../utils/enums";
import InventoryPage from "../pages/inventory.page";

test.describe("Test Cases For Standard User", () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;

  test("01. Standard User can log in to the system", async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);

    await loginPage.goToLoginPage();
    await loginPage.login(Account.STANDARD, Password.ALL);

    await expect(loginPage.msgError).toBeHidden();
    await expect(page).toHaveURL(/inventory/);
    await expect(inventoryPage.ctnInventory).toBeVisible();
  });
});

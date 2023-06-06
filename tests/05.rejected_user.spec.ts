import { test, expect } from "@playwright/test";
import LoginPage from "../pages/login.page";
import { Account, Password, Message } from "../utils/enums";

test.describe("Test Cases For Rejected User", () => {
  let loginPage: LoginPage;

  test("01. Rejected User can not log in to the system", async ({ page }) => {
    loginPage = new LoginPage(page);

    await loginPage.goToLoginPage();
    await loginPage.login(Account.REJECTED, Password.ALL);

    await expect(loginPage.msgError).toBeVisible();
    await expect(loginPage.msgError).toHaveText(Message.LOGIN_FAIL);
  });

  test("02. User can not log in to the system without username", async ({
    page,
  }) => {
    loginPage = new LoginPage(page);

    await loginPage.goToLoginPage();
    await loginPage.login("", Password.ALL);

    await expect(loginPage.msgError).toBeVisible();
    await expect(loginPage.msgError).toHaveText(Message.LOGIN_WITHOUT_USERNAME);
  });

  test("03. User can not log in to the system without password", async ({
    page,
  }) => {
    loginPage = new LoginPage(page);

    await loginPage.goToLoginPage();
    await loginPage.login(Account.REJECTED, "");

    await expect(loginPage.msgError).toBeVisible();
    await expect(loginPage.msgError).toHaveText(Message.LOGIN_WITHOUT_PASSWORD);
  });
});

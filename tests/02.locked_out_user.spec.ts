import { test, expect } from "@playwright/test";
import LoginPage from "../pages/login.page";
import { Account, Password, Message } from "../utils/enums";

test.describe("Test Cases For Locked Out User", () => {
  let loginPage: LoginPage;

  test("01. Locked Out User can not log in to the system", async ({ page }) => {
    loginPage = new LoginPage(page);

    await loginPage.goToLoginPage();
    await loginPage.login(Account.LOCKED_OUT, Password.ALL);

    await expect(loginPage.msgError).toBeVisible();
    await expect(loginPage.msgError).toHaveText(
      Message.LOGIN_WITH_LOCKED_OUT_USER
    );
  });
});

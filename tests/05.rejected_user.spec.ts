import { test, expect } from "@playwright/test";
import LoginPage from "../pages/login.page";
import { Account, Password, Message } from "../utils/enums";

test.describe("Test Cases For Rejected User", () => {
  let loginPage: LoginPage;

  test("Rejected User can not log in to the system", async ({ page }) => {
    loginPage = new LoginPage(page);

    await loginPage.goToLoginPage();
    await loginPage.login({
      username: Account.REJECTED,
      password: Password.ALL,
    });

    await expect(loginPage.msgError).toBeVisible();
    await expect(loginPage.msgError).toHaveText(Message.LOGIN_FAIL);
  });

  test("User can not log in to the system without username", async ({
    page,
  }) => {
    loginPage = new LoginPage(page);

    await loginPage.goToLoginPage();
    await loginPage.login({
      username: "",
      password: Password.ALL,
    });

    await expect(loginPage.msgError).toBeVisible();
    await expect(loginPage.msgError).toHaveText(Message.LOGIN_WITHOUT_USERNAME);
  });

  test("User can not log in to the system without password", async ({
    page,
  }) => {
    loginPage = new LoginPage(page);

    await loginPage.goToLoginPage();
    await loginPage.login({
      username: Account.REJECTED,
      password: "",
    });

    await expect(loginPage.msgError).toBeVisible();
    await expect(loginPage.msgError).toHaveText(Message.LOGIN_WITHOUT_PASSWORD);
  });
});

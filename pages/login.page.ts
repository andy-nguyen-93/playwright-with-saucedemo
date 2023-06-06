import { Page, Locator } from "@playwright/test";

class LoginPage {
  private page: Page;
  readonly txtLogin: Locator;
  readonly txtPassword: Locator;
  readonly btnLogin: Locator;
  readonly msgError: Locator;

  constructor(page: Page) {
    this.page = page;
    this.txtLogin = page.locator("#user-name");
    this.txtPassword = page.locator("#password");
    this.btnLogin = page.locator("#login-button");
    this.msgError = page.locator("[data-test=error]");
  }

  async goToLoginPage() {
    await this.page.goto("/");
  }

  async login(username: string, password: string) {
    await this.txtLogin.fill(username);
    await this.txtPassword.fill(password);
    await this.btnLogin.click();
  }
}

export default LoginPage;

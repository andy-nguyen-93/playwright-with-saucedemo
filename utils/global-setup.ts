// import { chromium } from "@playwright/test";
// import { Account, Password } from "./enums";
// import LoginPage from "../pages/login.page";

// async function globalSetup() {
//   const browser = await chromium.launch();
//   const page = await browser.newPage();
//   const loginPage = new LoginPage(page);

//   await loginPage.goToLoginPage();
//   await loginPage.login(Account.STANDARD, Password.ALL);
//   await page.context().storageState({ path: "standardLoggedInState.json" });

//   await browser.close();
// }

// export default globalSetup;

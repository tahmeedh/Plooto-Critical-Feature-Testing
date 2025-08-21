import { Page, expect } from '@playwright/test';
import { LoginPage } from '../locators/login-page';
import { TestCredentials } from '../config/test-credentials';

export class LoginHelper {
  private loginPage: LoginPage;

  constructor(page: Page) {
    this.loginPage = new LoginPage(page);
  }

  async goto() {
    await this.loginPage.page.goto('https://cac-q2-plto-ui-app-01.azurewebsites.net/');
  }

  async login(email: string, password: string) {
    await this.loginPage.emailInput.fill(email);
    await this.loginPage.passwordInput.fill(password);
    await this.loginPage.loginButton.click();
  }

  async loginWithTestCredentials() {
    await this.login(TestCredentials.TEST_EMAIL, TestCredentials.TEST_PASSWORD);
  }

  async expectToBeLoggedIn() {
    await expect(this.loginPage.landingPageIndicator).toBeVisible();
  }

  get landingPageIndicator() {
    return this.loginPage.landingPageIndicator;
  }


}

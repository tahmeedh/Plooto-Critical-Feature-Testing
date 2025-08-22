import { Page, expect } from '@playwright/test';
import { LoginHelper } from './login-helper';
import { NavigationHelper } from './navigation-helper';
import { SettingsHelper } from './settings-helper';
import { UserManagementHelper } from './client-management/user-management-helper';
import { TestBasePage } from '../locators/test-base-page';

export class TestBase {
  readonly loginHelper: LoginHelper;
  readonly navigationHelper: NavigationHelper;
  readonly settingsHelper: SettingsHelper;
  readonly userManagementHelper: UserManagementHelper;
  readonly testBasePage: TestBasePage;

  constructor(page: Page) {
    this.loginHelper = new LoginHelper(page);
    this.navigationHelper = new NavigationHelper(page);
    this.settingsHelper = new SettingsHelper(page);
    this.userManagementHelper = new UserManagementHelper(page);
    this.testBasePage = new TestBasePage(page);
  }

  // Convenience methods for common workflows
  
  async loginAndNavigate() {
    await this.loginHelper.goto();
    await this.loginHelper.loginWithTestCredentials();
    await this.page.waitForTimeout(3000);
    await this.loginHelper.expectToBeLoggedIn();
    await this.navigationHelper.clickPlooto();
  }

  async loginWithCustomCredentials(email: string, password: string) {
    await this.loginHelper.goto();
    await this.loginHelper.login(email, password);
  }

  async clickAddDocumentButton() {
    await this.testBasePage.addDocumentButton.click();
  }

  async clickDropFilesInput(filePath: string) {
    await this.testBasePage.dropFilesInput.click();
    await this.testBasePage.dropFilesInput.fill(filePath);
  }

  async navigateToSection(section: string) {
    await this.navigationHelper.navigateTo(section);
  }

  async openCompanyDropdown(menuItem: string) {
    await this.navigationHelper.clickCompanyDropdown(menuItem);
  }

  // Assertion helpers
  async expectLoginSuccessful() {
    await this.loginHelper.expectToBeLoggedIn();
  }


  // Getter for page access if needed
  get page(): Page {
    return this.loginHelper.page;
  }
}

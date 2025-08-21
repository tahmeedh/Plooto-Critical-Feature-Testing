import { Page, expect } from '@playwright/test';
import { LoginHelper } from './login-helper';
import { NavigationHelper } from './navigation-helper';
import { SettingsHelper } from './settings-helper';
import { UserManagementHelper } from './client-management/user-management-helper';

export class TestBase {
  readonly loginHelper: LoginHelper;
  readonly navigationHelper: NavigationHelper;
  readonly settingsHelper: SettingsHelper;
  readonly userManagementHelper: UserManagementHelper;

  constructor(page: Page) {
    this.loginHelper = new LoginHelper(page);
    this.navigationHelper = new NavigationHelper(page);
    this.settingsHelper = new SettingsHelper(page);
    this.userManagementHelper = new UserManagementHelper(page);
  }

  // Convenience methods for common workflows
  
  async loginAndNavigate() {
    await this.loginHelper.goto();
    await this.loginHelper.loginWithTestCredentials();
    await this.loginHelper.expectToBeLoggedIn();
    await this.navigationHelper.clickPlooto();
  }

  async loginWithCustomCredentials(email: string, password: string) {
    await this.loginHelper.goto();
    await this.loginHelper.login(email, password);
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

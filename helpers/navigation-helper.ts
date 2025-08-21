import { Page, expect } from '@playwright/test';
import { NavigationPage } from '../locators/navigation-page';

export class NavigationHelper {
  private navigationPage: NavigationPage;

  constructor(page: Page) {
    this.navigationPage = new NavigationPage(page);
  }

  // Main navigation methods
  async clickPlooto() {
    await this.navigationPage.plootoButton.click();
  }

  async clickCapture() {
    await this.navigationPage.captureLink.click();
  }

  async clickPayables() {
    await this.navigationPage.payablesLink.click();
  }

  async clickReceivables() {
    await this.navigationPage.receivablesLink.click();
  }

  async clickContacts() {
    await this.navigationPage.contactsLink.click();
  }

  async clickAccounts() {
    await this.navigationPage.accountsLink.click();
  }

  async clickApprovals() {
    await this.navigationPage.approvalsLink.click();
  }

  async clickHelpCenter() {
    await this.navigationPage.helpCenterLink.click();
  }

  async clickSettings() {
    await this.navigationPage.settingsButton.click();
  }

  // Company dropdown methods
  async clickSwitchCompany() {
    await this.navigationPage.switchCompanyMenuItem.click();
  }

  async clickMyProfile() {
    await this.navigationPage.myProfileMenuItem.click();
  }

  async clickSettingsMenuItem() {
    await this.navigationPage.settingsMenuItem.click();
  }

  async clickLogout() {
    await this.navigationPage.logoutMenuItem.click();
  }

  // Generic navigation method
  async navigateTo(navigationItem: string) {
    await this.clickPlooto();
    switch (navigationItem.toLowerCase()) {
      case 'capture':
        await this.clickCapture();
        break;
      case 'payables':
        await this.clickPayables();
        break;
      case 'receivables':
        await this.clickReceivables();
        break;
      case 'contacts':
        await this.clickContacts();
        break;
      case 'accounts':
        await this.clickAccounts();
        break;
      case 'approvals':
        await this.clickApprovals();
        break;
      case 'help center':
        await this.clickHelpCenter();
        break;
      case 'settings':
        await this.clickSettings();
        break;
      default:
        throw new Error(`Navigation item '${navigationItem}' not found`);
    }
  }

  async clickCompanyDropdown(companyDropdownItem: string) {
    await this.clickSettings();
    switch (companyDropdownItem.toLowerCase()) {
      case 'switch company':
        await this.clickSwitchCompany();
        break;
      case 'my profile':
        await this.clickMyProfile();
        break;
      case 'settings':
        await this.clickSettingsMenuItem();
        break;
      case 'logout':
        await this.clickLogout();
        break;
      default:
        throw new Error(`Company dropdown item '${companyDropdownItem}' not found`);
    }
  }

  // Assertion methods
  async expectCaptureLinkVisible() {
    await expect(this.navigationPage.captureLink).toBeVisible();
  }

  async expectPayablesLinkVisible() {
    await expect(this.navigationPage.payablesLink).toBeVisible();
  }

  async expectReceivablesLinkVisible() {
    await expect(this.navigationPage.receivablesLink).toBeVisible();
  }

  async expectContactsLinkVisible() {
    await expect(this.navigationPage.contactsLink).toBeVisible();
  }

  async expectAccountsLinkVisible() {
    await expect(this.navigationPage.accountsLink).toBeVisible();
  }

  async expectApprovalsLinkVisible() {
    await expect(this.navigationPage.approvalsLink).toBeVisible();
  }

  async expectHelpCenterLinkVisible() {
    await expect(this.navigationPage.helpCenterLink).toBeVisible();
  }
}   
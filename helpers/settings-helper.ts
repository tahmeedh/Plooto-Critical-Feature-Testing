import { Page, expect } from '@playwright/test';
import { SettingsPage } from '../locators/settings-page';

export class SettingsHelper {
  private settingsPage: SettingsPage;

  constructor(page: Page) {
    this.settingsPage = new SettingsPage(page);
  }

  // Navigation methods
  async clickSingleSignOn(): Promise<void> {
    await this.settingsPage.singleSignOnLink.click();
  }

  async clickControls(): Promise<void> {
    await this.settingsPage.controlsLink.click();
  }

  async clickBillingSubscriptions(): Promise<void> {
    await this.settingsPage.billingSubscriptionsLink.click();
  }

  async clickCaptureSettings(): Promise<void> {
    await this.settingsPage.captureSettingsLink.click();
  }

  async clickAccountingSoftware(): Promise<void> {
    await this.settingsPage.accountingSoftwareLink.click();
  }

  async clickPaymentPreferences(): Promise<void> {
    await this.settingsPage.paymentPreferencesLink.click();
  }

  async clickUserManagement(): Promise<void> {
    await this.settingsPage.userManagementLink.click();
  }

  // Generic navigation method
  async navigateToSettingsPage(settingsPage: string): Promise<void> {
    switch (settingsPage.toLowerCase()) {
      case 'single sign-on':
        await this.clickSingleSignOn();
        break;
      case 'controls':
        await this.clickControls();
        break;
      case 'billing & subscriptions':
      case 'billing subscriptions':
        await this.clickBillingSubscriptions();
        break;
      case 'capture settings':
        await this.clickCaptureSettings();
        break;
      case 'accounting software':
        await this.clickAccountingSoftware();
        break;
      case 'payment preferences':
        await this.clickPaymentPreferences();
        break;
      case 'user management':
        await this.clickUserManagement();
        break;
      default:
        throw new Error(`Settings page '${settingsPage}' not found`);
    }
  }

  // Assertion methods
  async expectSingleSignOnLinkVisible(): Promise<void> {
    await expect(this.settingsPage.singleSignOnLink).toBeVisible();
  }

  async expectControlsLinkVisible(): Promise<void> {
    await expect(this.settingsPage.controlsLink).toBeVisible();
  }

  async expectBillingSubscriptionsLinkVisible(): Promise<void> {
    await expect(this.settingsPage.billingSubscriptionsLink).toBeVisible();
  }

  async expectCaptureSettingsLinkVisible(): Promise<void> {
    await expect(this.settingsPage.captureSettingsLink).toBeVisible();
  }

  async expectAccountingSoftwareLinkVisible(): Promise<void> {
    await expect(this.settingsPage.accountingSoftwareLink).toBeVisible();
  }

  async expectPaymentPreferencesLinkVisible(): Promise<void> {
    await expect(this.settingsPage.paymentPreferencesLink).toBeVisible();
  }

  async expectUserManagementLinkVisible(): Promise<void> {
    await expect(this.settingsPage.userManagementLink).toBeVisible();
  }

  // Generic assertion method
  async expectSettingsPageVisible(settingsPage: string): Promise<void> {
    switch (settingsPage.toLowerCase()) {
      case 'single sign-on':
        await this.expectSingleSignOnLinkVisible();
        break;
      case 'controls':
        await this.expectControlsLinkVisible();
        break;
      case 'billing & subscriptions':
      case 'billing subscriptions':
        await this.expectBillingSubscriptionsLinkVisible();
        break;
      case 'capture settings':
        await this.expectCaptureSettingsLinkVisible();
        break;
      case 'accounting software':
        await this.expectAccountingSoftwareLinkVisible();
        break;
      case 'payment preferences':
        await this.expectPaymentPreferencesLinkVisible();
        break;
      case 'user management':
        await this.expectUserManagementLinkVisible();
        break;
      default:
        throw new Error(`Settings page '${settingsPage}' not found for assertion`);
    }
  }
}
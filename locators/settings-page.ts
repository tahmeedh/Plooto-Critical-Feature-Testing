import { expect, type Locator, type Page } from '@playwright/test';

export class SettingsPage {
  readonly page: Page;
  readonly singleSignOnLink: Locator;
  readonly controlsLink: Locator;
  readonly billingSubscriptionsLink: Locator;
  readonly captureSettingsLink: Locator;
  readonly accountingSoftwareLink: Locator;
  readonly paymentPreferencesLink: Locator;
  readonly userManagementLink: Locator;

  constructor(page: Page) {
    this.page = page;
    
    // Settings navigation elements
    this.singleSignOnLink = page.getByRole('link', { name: 'Single Sign-On' });
    this.controlsLink = page.getByRole('link', { name: 'Controls' });
    this.billingSubscriptionsLink = page.getByRole('link', { name: 'Billing & Subscriptions' });
    this.captureSettingsLink = page.getByRole('link', { name: 'Capture Settings' });
    this.accountingSoftwareLink = page.getByRole('link', { name: 'Accounting Software' });
    this.paymentPreferencesLink = page.getByRole('link', { name: 'Payment Preferences' });
    this.userManagementLink = page.getByRole('link', { name: 'User Management' });
  }

}

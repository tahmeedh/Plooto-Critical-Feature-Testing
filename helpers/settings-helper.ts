import { Page, Locator } from '@playwright/test';
import { SettingsLocators } from '../locators/settings-locators';

export class SettingsHelper {
  private page: Page;

  async navigateToSettingsPage(settingsPage: keyof typeof SettingsLocators.SETTINGS_PAGES): Promise<void> {
    const selector = SettingsLocators.SETTINGS_PAGES[settingsPage];
    if (!selector) {
      throw new Error(`Settings page '${settingsPage}' not found. Available pages: ${Object.keys(SettingsLocators.SETTINGS_PAGES).join(', ')}`);
    }
    await this.page.click(selector);
  }

  constructor(page: Page) {
    this.page = page;
  }
}
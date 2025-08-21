import { Page, Locator } from '@playwright/test';
import { MainNavigationLocators } from '../locators/main-navigation-locators';

export class NavigationHelper {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigate to a specific main navigation item
   * @param navigationItem - The name of the navigation item (e.g., 'CAPTURE', 'PAYABLES', 'RECEIVABLES', etc.)
   */
  async navigateTo(navigationItem: keyof typeof MainNavigationLocators.MAIN_NAVIGATION): Promise<void> {
    this.clickPlooto()
    const selector = MainNavigationLocators.MAIN_NAVIGATION[navigationItem];
    if (!selector) {
      throw new Error(`Navigation item '${navigationItem}' not found. Available items: ${Object.keys(MainNavigationLocators.MAIN_NAVIGATION).join(', ')}`);
    }
    await this.page.click(selector);
  }

  async companyDropdown(companyDropdownItem: keyof typeof MainNavigationLocators.COMPANY_DROPDOWN): Promise<void> {
    const selector = MainNavigationLocators.COMPANY_DROPDOWN[companyDropdownItem];
    if (!selector) {
      throw new Error(`Company dropdown item '${companyDropdownItem}' not found. Available items: ${Object.keys(MainNavigationLocators.COMPANY_DROPDOWN).join(', ')}`);
    }
    await this.page.click(selector);
  }

  async clickPlooto(): Promise<void> {
    await this.page.click(MainNavigationLocators.MAIN_NAVIGATION.PLOOTO);
  }
}   
import { expect, type Locator, type Page } from '@playwright/test';

export class NavigationPage {
  readonly page: Page;
  readonly plootoButton: Locator;
  readonly captureLink: Locator;
  readonly payablesLink: Locator;
  readonly receivablesLink: Locator;
  readonly contactsLink: Locator;
  readonly accountsLink: Locator;
  readonly approvalsLink: Locator;
  readonly helpCenterLink: Locator;
  readonly settingsButton: Locator;
  readonly switchCompanyMenuItem: Locator;
  readonly myProfileMenuItem: Locator;
  readonly settingsMenuItem: Locator;
  readonly logoutMenuItem: Locator;

  constructor(page: Page) {
    this.page = page;
    
    // Main navigation elements
    this.plootoButton = page.getByTestId('navigation-logo-link');
    this.captureLink = page.getByRole('link', { name: 'Capture' });
    this.payablesLink = page.getByRole('link', { name: 'Payables' });
    this.receivablesLink = page.getByRole('link', { name: 'Receivables' });
    this.contactsLink = page.getByRole('link', { name: 'Contacts' });
    this.accountsLink = page.getByRole('link', { name: 'Accounts' });
    this.approvalsLink = page.getByRole('link', { name: 'Approvals' });
    this.helpCenterLink = page.getByRole('link', { name: 'Help Center' });
    this.settingsButton = page.getByRole('button', { name: 'QA Assignment 20250815' });
    
    // Company dropdown menu items
    this.switchCompanyMenuItem = page.getByRole('menuitem', { name: 'Switch Company' });
    this.myProfileMenuItem = page.getByRole('menuitem', { name: 'My Profile' });
    this.settingsMenuItem = page.getByRole('menuitem', { name: 'Settings' });
    this.logoutMenuItem = page.getByRole('menuitem', { name: 'Logout' });
  }


}

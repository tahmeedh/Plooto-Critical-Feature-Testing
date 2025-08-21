import { test, expect } from '@playwright/test';
import { TestBase } from '../../../helpers';

test.describe('Navigation Tests', () => {
  let testBase: TestBase;

  test.beforeEach(async ({ page }) => {
    testBase = new TestBase(page);
    // Login workflow
    await testBase.loginAndNavigate();
  });

  test('should navigate to Capture', async ({ page }) => {
    await testBase.navigateToSection('capture');

    await expect(testBase.page.getByRole('heading', { name: 'Welcome to Plooto Capture!' })).toBeVisible();
  });

  test('should navigate to Payables', async ({ page }) => {
    await testBase.navigateToSection('payables');

    await expect(testBase. page.getByRole('heading', { name: 'Payables Classic Experience' })).toBeVisible();

  });

  test('should navigate to Receivables', async ({ page }) => {
    await testBase.navigateToSection('receivables');

    await expect(testBase.page.getByRole('heading', { name: 'Receivables Classic' })).toBeVisible();

  });

  test('should navigate to Accounts', async ({ page }) => {
    await testBase.navigateToSection('accounts');

    await expect(testBase.page.getByRole('heading', { name: 'Your Accounts' })).toBeVisible();

  });

  test('should navigate to Contacts', async ({ page }) => {
    await testBase.navigateToSection('contacts');

    await expect(testBase.page.getByRole('heading', { name: 'Contacts Classic' })).toBeVisible();

  });

  test('should navigate to approvals', async ({ page }) => {
    await testBase.navigateToSection('approvals');

    await expect(testBase.page.getByRole('heading', { name: 'Approvals Classic Experience' })).toBeVisible();

  });

  test('should login and navigate', async ({ page }) => {
    // Navigation
    await testBase.openCompanyDropdown('settings');

    await testBase.settingsHelper.expectUserManagementLinkVisible();
  });
});
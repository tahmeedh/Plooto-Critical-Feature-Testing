import { test, expect } from '@playwright/test';
import { TestBase } from '../../../helpers';

test.describe('Add User', () => {
  let testBase: TestBase;

  test.beforeEach(async ({ page }) => {
    testBase = new TestBase(page);
    await testBase.loginAndNavigate();
  });

  test('should add a user fields should be visible', async ({ page }) => {
    await testBase.openCompanyDropdown('settings');
    await testBase.settingsHelper.expectUserManagementLinkVisible();
    await testBase.settingsHelper.navigateToSettingsPage("user management");
    await testBase.userManagementHelper.clickAddUserButton();
    await testBase.userManagementHelper.expectFirstNameFieldVisible();
    await testBase.userManagementHelper.expectLastNameFieldVisible();
    await testBase.userManagementHelper.expectEmailFieldVisible();
    await testBase.userManagementHelper.expectRoleSelectorVisible();
    await testBase.userManagementHelper.expectAddUserButtonVisible();
  });

  test('should add a viewer user', async ({ page }) => {
    await testBase.openCompanyDropdown('settings');
    await testBase.settingsHelper.expectUserManagementLinkVisible();
    await testBase.settingsHelper.navigateToSettingsPage("user management");
    await testBase.userManagementHelper.clickAddUserButton();
    await testBase.userManagementHelper.addUser("John", "Doe", "john.doe@example.com", "Viewer");
    
    expect(testBase.page.getByText('John Doe')).toBeVisible();
    expect(testBase.page.getByText('john.doe@example.com')).toBeVisible();
    expect(testBase.page.getByText('Viewer')).toBeVisible();

  });
});
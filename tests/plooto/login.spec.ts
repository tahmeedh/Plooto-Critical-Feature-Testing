import { test, expect } from '@playwright/test';
import { LoginHelper } from '../../helpers';

test.describe('Plooto Login Tests', () => {
  let loginHelper: LoginHelper;

  test.beforeEach(async ({ page }) => {
    loginHelper = new LoginHelper(page);
    
    await loginHelper.goto();
  });

  test('should login successfully with valid credentials', async ({ page }) => {
    // Use the helper to perform login
    const loginSuccess = await loginHelper.loginWithTestCredentials();
    
    // Assert that login was successful
    await loginHelper.expectToBeLoggedIn();
  });

  test('should login with custom credentials', async ({ page }) => {
    // Test with custom email and password
    const customEmail = 'custom@example.com';
    const customPassword = 'custompassword';
    
    await loginHelper.login(customEmail, customPassword);
    await expect(loginHelper.landingPageIndicator).not.toBeVisible();
  });
});

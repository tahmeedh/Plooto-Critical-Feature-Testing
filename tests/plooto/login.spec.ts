import { test, expect } from '@playwright/test';
import { LoginHelper } from '../../helpers';

test.describe('Plooto Login Tests', () => {
  let loginHelper: LoginHelper;

  test.beforeEach(async ({ page }) => {
    loginHelper = new LoginHelper(page);
    
    await page.goto('https://cac-q2-plto-ui-app-01.azurewebsites.net/');
  });

  test('should login successfully with valid credentials', async ({ page }) => {
    // Use the helper to perform login
    const loginSuccess = await loginHelper.loginToPlooto();
    
    // Assert that login was successful
    expect(loginSuccess).toBe(true);
    
    // Additional verification - check if we're on a dashboard page
    await expect(page).toHaveURL(/.*dashboard|.*app/);
  });

  test('should fill email input field', async ({ page }) => {
    const emailFilled = await loginHelper.fillEmailInput();
    expect(emailFilled).toBe(true);
  });

  test('should fill password input field', async ({ page }) => {
    const passwordFilled = await loginHelper.fillPasswordInput();
    expect(passwordFilled).toBe(true);
  });

  test('should click login button', async ({ page }) => {
    // First fill the credentials
    await loginHelper.fillEmailInput();
    await loginHelper.fillPasswordInput();
    
    // Then click login button
    const loginClicked = await loginHelper.clickLoginButton();
    expect(loginClicked).toBe(true);
  });

  test('should handle login with custom credentials', async ({ page }) => {
    // Test with custom email and password
    const customEmail = 'custom@example.com';
    const customPassword = 'custompassword';
    
    const emailFilled = await loginHelper.fillEmailInput(customEmail);
    const passwordFilled = await loginHelper.fillPasswordInput(customPassword);
    
    expect(emailFilled).toBe(true);
    expect(passwordFilled).toBe(true);
  });

  test('should verify login success indicators', async ({ page }) => {
    // Perform login first
    await loginHelper.loginToPlooto();
    
    // Check if login was successful
    const loginSuccess = await loginHelper.checkLoginSuccess();
    expect(loginSuccess).toBe(true);
  });
});

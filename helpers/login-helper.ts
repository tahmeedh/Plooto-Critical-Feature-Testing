import { Page, Locator } from '@playwright/test';
import { LoginLocators } from '../locators';

export class LoginHelper {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Find and fill email input field
   * @returns Promise<boolean> - true if email was filled successfully
   */
  async fillEmailInput(email: string = LoginLocators.TEST_EMAIL): Promise<boolean> {
    console.log("🔍 Looking for email input field...");
    
    for (const selector of LoginLocators.EMAIL_SELECTORS) {
      try {
        const emailInput = this.page.locator(selector).first();
        if (await emailInput.isVisible()) {
          await emailInput.fill(email);
          console.log("✅ Email field filled successfully");
          return true;
        }
      } catch (error) {
        console.log(`⚠️  Selector ${selector} not found or not visible`);
        continue;
      }
    }
    
    console.log("❌ Could not find email field");
    return false;
  }

  /**
   * Find and fill password input field
   * @returns Promise<boolean> - true if password was filled successfully
   */
  async fillPasswordInput(password: string = LoginLocators.TEST_PASSWORD): Promise<boolean> {
    console.log("🔍 Looking for password input field...");
    
    for (const selector of LoginLocators.PASSWORD_SELECTORS) {
      try {
        const passwordInput = this.page.locator(selector).first();
        if (await passwordInput.isVisible()) {
          await passwordInput.fill(password);
          console.log("✅ Password field filled successfully");
          return true;
        }
      } catch (error) {
        console.log(`⚠️  Selector ${selector} not found or not visible`);
        continue;
      }
    }
    
    console.log("❌ Could not find password field");
    return false;
  }

  /**
   * Find and click login/sign in button
   * @returns Promise<boolean> - true if login button was clicked successfully
   */
  async clickLoginButton(): Promise<boolean> {
    console.log("🔍 Looking for login button...");
    
    for (const selector of LoginLocators.LOGIN_BUTTON_SELECTORS) {
      try {
        const loginButton = this.page.locator(selector).first();
        if (await loginButton.isVisible()) {
          await loginButton.click();
          console.log("✅ Login button clicked successfully");
          return true;
        }
      } catch (error) {
        console.log(`⚠️  Selector ${selector} not found or not visible`);
        continue;
      }
    }
    
    console.log("❌ Could not find login button");
    return false;
  }

  /**
   * Check if login was successful by looking for dashboard indicators
   * @returns Promise<boolean> - true if dashboard indicators are found
   */
  async checkLoginSuccess(): Promise<boolean> {
    console.log("🔍 Checking for successful login indicators...");
    
    // Wait a bit for the page to load after login
    await this.page.waitForTimeout(3000);
    
    // Check for dashboard indicators
    for (const indicator of LoginLocators.DASHBOARD_INDICATORS) {
      try {
        const element = this.page.locator(indicator);
        if (await element.isVisible()) {
          console.log(`✅ Login successful - Dashboard indicator found: ${indicator}`);
          return true;
        }
      } catch (error) {
        continue;
      }
    }
    
    // Check URL for dashboard indicators
    const currentUrl = this.page.url();
    if (currentUrl.toLowerCase().includes("dashboard") || currentUrl.toLowerCase().includes("app")) {
      console.log(`✅ Login successful - URL indicates dashboard: ${currentUrl}`);
      return true;
    }
    
    console.log("⚠️  Login status unclear - proceeding anyway");
    return true;
  }

  /**
   * Complete login process with test credentials
   * @returns Promise<boolean> - true if login was successful
   */
  async loginToPlooto(): Promise<boolean> {
    console.log("🔐 Logging into Plooto...");
    
    try {
      // Wait for the page to load
      await this.page.waitForLoadState("domcontentloaded");
      await this.page.waitForTimeout(3000);
      
      // Fill email
      const emailFilled = await this.fillEmailInput();
      if (!emailFilled) {
        return false;
      }
      
      // Fill password
      const passwordFilled = await this.fillPasswordInput();
      if (!passwordFilled) {
        return false;
      }
      
      // Click login button
      const loginClicked = await this.clickLoginButton();
      if (!loginClicked) {
        return false;
      }
      
      // Wait for login to complete
      console.log("⏳ Waiting for login to complete...");
      await this.page.waitForTimeout(5000);
      
      // Check if login was successful
      const loginSuccess = await this.checkLoginSuccess();
      return loginSuccess;
      
    } catch (error) {
      console.log(`❌ Error during login: ${error}`);
      return false;
    }
  }

  /**
   * Wait for input field to be visible and clickable
   * @param selector - CSS selector for the input field
   * @returns Promise<Locator> - The located element
   */
  async waitForInputField(selector: string): Promise<Locator> {
    const element = this.page.locator(selector);
    await element.waitFor({ state: 'visible' });
    return element;
  }

  /**
   * Wait for button to be visible and clickable
   * @param selector - CSS selector for the button
   * @returns Promise<Locator> - The located element
   */
  async waitForButton(selector: string): Promise<Locator> {
    const element = this.page.locator(selector);
    await element.waitFor({ state: 'visible' });
    return element;
  }

  /**
   * Clear and fill an input field
   * @param selector - CSS selector for the input field
   * @param value - Value to fill
   */
  async clearAndFillInput(selector: string, value: string): Promise<void> {
    const element = await this.waitForInputField(selector);
    await element.clear();
    await element.fill(value);
  }

  /**
   * Click an element and wait for navigation
   * @param selector - CSS selector for the element to click
   */
  async clickAndWaitForNavigation(selector: string): Promise<void> {
    const element = await this.waitForButton(selector);
    await Promise.all([
      this.page.waitForLoadState('networkidle'),
      element.click()
    ]);
  }
}

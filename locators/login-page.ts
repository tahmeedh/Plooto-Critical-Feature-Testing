import { expect, type Locator, type Page } from '@playwright/test';
import { LoginLocators } from './login-locators';
import { TestCredentials } from '../config/test-credentials';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly dashboardIndicator: Locator;
  readonly errorMessage: Locator;
  readonly forgotPasswordLink: Locator;
  readonly rememberMeCheckbox: Locator;

  static readonly EMAIL_SELECTORS = [
    'input[type="email"]',
    'input[name="email"]',
    'input[placeholder*="email" i]',
    'input[placeholder*="Email" i]',
    'label:has-text("Email") input',
    '[data-testid*="email" i] input'
  ];

  // Password field selectors
  static readonly PASSWORD_SELECTORS = [
    'input[type="password"]',
    'input[name="password"]',
    'input[placeholder*="password" i]',
    'input[placeholder*="Password" i]',
    'label:has-text("Password") input',
    '[data-testid*="password" i] input'
  ];

  // Login button selectors
  static readonly LOGIN_BUTTON_SELECTORS = [
    'button[type="submit"]',
    'button:has-text("Login")',
    'button:has-text("Sign In")',
    'button:has-text("Continue")',
    'input[type="submit"]',
    '[data-testid*="login" i]',
    '[data-testid*="signin" i]'
  ];

  // Dashboard indicators for successful login
  static readonly DASHBOARD_INDICATORS = [
    'text=Dashboard',
    'text=Welcome',
    'text=Home',
    '[data-testid*="dashboard" i]',
    '.dashboard',
    '#dashboard'
  ];

  constructor(page: Page) {
    this.page = page;
    
    // Email input using EMAIL_SELECTORS
    this.emailInput = page.locator(LoginPage.EMAIL_SELECTORS.join(', '));
    
    // Password input using PASSWORD_SELECTORS
    this.passwordInput = page.locator(LoginPage.PASSWORD_SELECTORS.join(', '));
    
    // Login button using LOGIN_BUTTON_SELECTORS
    this.loginButton = page.locator(LoginLocators.LOGIN_BUTTON_SELECTORS.join(', '));
    
    // Dashboard indicator using DASHBOARD_INDICATORS
    this.dashboardIndicator = page.locator(LoginLocators.DASHBOARD_INDICATORS.join(', '));
    
    // Error message
    this.errorMessage = page.getByText(/invalid|incorrect|error/i)
      .or(page.getByTestId(/error/i))
      .or(page.getByRole('alert'));
    
    // Forgot password link
    this.forgotPasswordLink = page.getByRole('link', { name: /forgot password|reset password/i })
      .or(page.getByText(/forgot password|reset password/i));
    
    // Remember me checkbox
    this.rememberMeCheckbox = page.getByRole('checkbox', { name: /remember me|keep me signed in/i })
      .or(page.getByLabel(/remember me|keep me signed in/i));
  }

  async goto() {
    await this.page.goto('https://cac-q2-plto-ui-app-01.azurewebsites.net/');
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async loginWithTestCredentials() {
    await this.login(TestCredentials.TEST_EMAIL, TestCredentials.TEST_PASSWORD);
  }

  async expectToBeLoggedIn() {
    await expect(this.dashboardIndicator).toBeVisible();
  }



}

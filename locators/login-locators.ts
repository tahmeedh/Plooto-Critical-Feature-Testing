export class LoginLocators {
  // Email field selectors
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

  // Test credentials
  static readonly TEST_EMAIL = "qatest20250815101@plooto-admin-test.ca";
  static readonly TEST_PASSWORD = "oET5g^nme@%2rzS!DEF@trW!";
}

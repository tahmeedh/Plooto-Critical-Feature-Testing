export class MainNavigationLocators {
  // Main navigation menu items
  static readonly MAIN_NAVIGATION = {
    PLOOTO: 'getByTestId("button",{name: "Plooto"})',
    CAPTURE: 'getByRole("link", { name: "Capture" })',
    PAYABLES: 'getByRole("link", { name: "Payables" })',
    RECEIVABLES: 'getByRole("link", { name: "Receivables" })',
    CONTACTS: 'getByRole("link", { name: "Contacts" })',
    ACCOUNTS: 'getByRole("link", { name: "Accounts" })',
    APPROVALS: 'getByRole("link", { name: "Approvals" })',
    HELP_CENTER: 'getByRole("link", { name: "Help Center" })',
    SETTINGS: 'getByTestId("data-testid="dropdown-toggle-return-to-company-dashboard"")',
  };

  static readonly COMPANY_DROPDOWN = {
    SWITCH_COMPANY: 'getByRole("menuitem", { name: "Switch Company" })',
    MY_PROFILE: 'getByRole("menuitem", { name: "My Profile" })',
    SETTINGS: 'getByRole("menuitem", { name: "Settings" })',
    LOGOUT: 'getByRole("menuitem", { name: "Logout" })'
  };
}

import { expect, type Locator, type Page } from '@playwright/test';

export class UserManagementPage {
  readonly page: Page;
  readonly addUserButton: Locator;
  readonly confirmButton: Locator;
  readonly goBackButton: Locator;
  // Add user form elements
  readonly firstNameField: Locator;
  readonly lastNameField: Locator;
  readonly emailField: Locator;
  readonly roleSelector: Locator;
  
  // User permissions checkboxes
  readonly addEditPayeesCheckbox: Locator;
  readonly addEditPaymentsCheckbox: Locator;
  readonly addEditBankAccountsCheckbox: Locator;
  readonly addEditApprovalPoliciesCheckbox: Locator;
  readonly addEditUsersCheckbox: Locator;
  readonly editCompanyDetailsCheckbox: Locator;
  readonly publishDocumentsCheckbox: Locator;
  
  // User roles
  readonly administratorRole: Locator;
  readonly cfoRole: Locator;
  readonly accountantRole: Locator;
  readonly viewerRole: Locator;
  readonly customRole: Locator;
  
  // External company permissions
  readonly connectDisconnectExternalCompanyCheckbox: Locator;
  
  // Two-factor authentication
  readonly forceTwoStepAuthCheckbox: Locator;

  constructor(page: Page) {
    this.page = page;
    
    this.addUserButton = page.getByRole('button', { name: 'Add User' });
    this.confirmButton = page.getByRole('button', { name: 'Confirm' });
    this.goBackButton = page.getByRole('button', { name: 'Cancel' });

    // Add user form elements
    this.firstNameField = page.getByRole('textbox', { name: 'First name' });
    this.lastNameField = page.getByRole('textbox', { name: 'Last name' });
    this.emailField = page.getByRole('textbox', { name: 'Email' });
    this.roleSelector = page.getByRole('combobox', { name: 'Role Viewer' });
    
    // User permissions checkboxes
    this.addEditPayeesCheckbox = page.getByRole('checkbox', { name: 'Add/edit payees' });
    this.addEditPaymentsCheckbox = page.getByRole('checkbox', { name: 'Add/edit payments' });
    this.addEditBankAccountsCheckbox = page.getByRole('checkbox', { name: 'Add/edit bank accounts' });
    this.addEditApprovalPoliciesCheckbox = page.getByRole('checkbox', { name: 'Add/edit approval policies' });
    this.addEditUsersCheckbox = page.getByRole('checkbox', { name: 'Add/edit users' });
    this.editCompanyDetailsCheckbox = page.getByRole('checkbox', { name: 'Edit company details' });
    this.publishDocumentsCheckbox = page.getByRole('checkbox', { name: 'Publish documents' });
    
    // User roles
    this.administratorRole = page.getByRole('combobox', { name: 'Administrator' });
    this.cfoRole = page.getByRole('combobox', { name: 'CFO' });
    this.accountantRole = page.getByRole('combobox', { name: 'Accountant' });
    this.viewerRole = page.getByRole('combobox', { name: 'Viewer' });
    this.customRole = page.getByRole('combobox', { name: 'Custom' });
    
    // External company permissions
    this.connectDisconnectExternalCompanyCheckbox = page.getByRole('checkbox', { name: 'Connect/disconnect external company' });
    
    // Two-factor authentication
    this.forceTwoStepAuthCheckbox = page.getByRole('checkbox', { name: 'Force user to enable Two-Step Authentication' });
  }


}

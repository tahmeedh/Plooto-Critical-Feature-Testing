import { Page, expect } from '@playwright/test';
import { UserManagementPage } from '../../locators/client-management/user-management-page';

export class UserManagementHelper {
  private userManagementPage: UserManagementPage;

  constructor(page: Page) {
    this.userManagementPage = new UserManagementPage(page);
  }

  async clickAddUserButton() {
    await this.userManagementPage.addUserButton.click();
  }

  async clickGoBackButton() {
    await this.userManagementPage.goBackButton.click();
  }

  async clickConfirmButton() {
    await this.userManagementPage.confirmButton.click();
  }

  // Add user methods
  async fillFirstName(firstName: string) {
    await this.userManagementPage.firstNameField.fill(firstName);
  }

  async fillLastName(lastName: string) {
    await this.userManagementPage.lastNameField.fill(lastName);
  }

  async fillEmail(email: string) {
    await this.userManagementPage.emailField.fill(email);
  }

  async selectRole(role: string) {
    // Click to open the Material-UI combobox dropdown
    await this.userManagementPage.roleSelector.click();
    
    // Select the option from the dropdown
    await this.userManagementPage.page.getByRole('option', { name: role }).click();
  }



  async addUser(firstName: string, lastName: string, email: string, role: string, permissions?: string[]
  ) {
    await this.fillFirstName(firstName);
    await this.fillLastName(lastName);
    await this.fillEmail(email);
    await this.selectRole(role);
    if (permissions) {
      await this.togglePermissions(permissions);
    }
    await this.clickAddUserButton();
    await this.clickConfirmButton();
  }

  // Permission methods
  async toggleAddEditPayees() {
    await this.userManagementPage.addEditPayeesCheckbox.check();
  }

  async toggleAddEditPayments() {
    await this.userManagementPage.addEditPaymentsCheckbox.check();
  }

  async toggleAddEditBankAccounts() {
    await this.userManagementPage.addEditBankAccountsCheckbox.check();
  }

  async toggleAddEditApprovalPolicies() {
    await this.userManagementPage.addEditApprovalPoliciesCheckbox.check();
  }

  async toggleAddEditUsers() {
    await this.userManagementPage.addEditUsersCheckbox.check();
  }

  async toggleEditCompanyDetails() {
    await this.userManagementPage.editCompanyDetailsCheckbox.check();
  }

  async togglePublishDocuments() {
    await this.userManagementPage.publishDocumentsCheckbox.check();
  }

  // Role selection methods
  async selectAdministratorRole() {
    await this.userManagementPage.administratorRole.click();
    await this.userManagementPage.page.getByRole('option', { name: 'Administrator' }).click();
  }

  async selectCFORole() {
    await this.userManagementPage.cfoRole.click();
    await this.userManagementPage.page.getByRole('option', { name: 'CFO' }).click();
  }

  async selectAccountantRole() {
    await this.userManagementPage.accountantRole.click();
    await this.userManagementPage.page.getByRole('option', { name: 'Accountant' }).click();
  }

  async selectViewerRole() {
    await this.userManagementPage.viewerRole.click();
    await this.userManagementPage.page.getByRole('option', { name: 'Viewer' }).click();
  }

  async selectCustomRole() {
    await this.userManagementPage.customRole.click();
    await this.userManagementPage.page.getByRole('option', { name: 'Custom' }).click();
  }

   // Generic role selection method
   async selectUserRole(role: string) {
    switch (role.toLowerCase()) {
      case 'administrator':
        await this.selectAdministratorRole();
        break;
      case 'cfo':
        await this.selectCFORole();
        break;
      case 'accountant':
        await this.selectAccountantRole();
        break;
      case 'viewer':
        await this.selectViewerRole();
        break;
      case 'custom':
        await this.selectCustomRole();
        break;
      default:
        throw new Error(`Role '${role}' not found`);
    }
  }


  // External company permissions
  async toggleConnectDisconnectExternalCompany() {
    await this.userManagementPage.connectDisconnectExternalCompanyCheckbox.check();
  }

  // Two-factor authentication
  async toggleForceTwoStepAuth() {
    await this.userManagementPage.forceTwoStepAuthCheckbox.check();
  }

  // Generic permission toggle method
  async togglePermissions(permissions: string[]) {
    for (const permission of permissions) {
      switch (permission.toLowerCase()) {
        case 'add/edit payees':
          await this.toggleAddEditPayees();
          break;
        case 'add/edit payments':
          await this.toggleAddEditPayments();
          break;
        case 'add/edit bank accounts':
          await this.toggleAddEditBankAccounts();
          break;
        case 'add/edit approval policies':
          await this.toggleAddEditApprovalPolicies();
          break;
        case 'add/edit users':
          await this.toggleAddEditUsers();
          break;
        case 'edit company details':
          await this.toggleEditCompanyDetails();
          break;
        case 'publish documents':
          await this.togglePublishDocuments();
          break;
        case 'connect/disconnect external company':
          await this.toggleConnectDisconnectExternalCompany();
          break;
        case 'force two-step authentication':
          await this.toggleForceTwoStepAuth();
          break;
        default:
          throw new Error(`Permission '${permission}' not found`);
      }
    }
  }

 
  // Assertion methods
  async expectFirstNameFieldVisible() {
    await expect(this.userManagementPage.firstNameField).toBeVisible();
  }

  async expectLastNameFieldVisible() {
    await expect(this.userManagementPage.lastNameField).toBeVisible();
  }

  async expectEmailFieldVisible() {
    await expect(this.userManagementPage.emailField).toBeVisible();
  }

  async expectRoleSelectorVisible() {
    await expect(this.userManagementPage.roleSelector).toBeVisible();
  }


  async expectAddEditPayeesCheckboxVisible() {
    await expect(this.userManagementPage.addEditPayeesCheckbox).toBeVisible();
  }

  async expectAddEditUsersCheckboxVisible() {
    await expect(this.userManagementPage.addEditUsersCheckbox).toBeVisible();
  }

  async expectEditCompanyDetailsCheckboxVisible() {
    await expect(this.userManagementPage.editCompanyDetailsCheckbox).toBeVisible();
  }

  async expectConnectExternalCheckboxVisible() {
    await expect(this.userManagementPage.connectDisconnectExternalCompanyCheckbox).toBeVisible();
  }
  async expectAddUserButtonVisible() {
    await expect(this.userManagementPage.addUserButton).toBeVisible();
  }

}

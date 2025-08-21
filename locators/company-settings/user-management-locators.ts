export class UserManagementLocators {
  // User management settings
  static readonly ADD_USER_INPUTS = {
    FIRST_NAME_FIELD: 'textbox[name="First name"]',
    LAST_NAME_FIELD: 'textbox[name="Last name"]',
    EMAIL_FIELD: 'textbox[name="Email"]',
    ROLE_SELECTOR: 'combobox[name="Role Viewer"]',

    CONFIRM_BUTTON: 'button:has-text("Confirm")'
  };

  // User permissions checkboxes
  static readonly COMPANY_PERMISSIONS = {
    ADD_EDIT_PAYEES: 'checkbox[name="Add/edit payees"]',
    ADD_EDIT_PAYMENTS: 'checkbox[name="Add/edit payments"]',
    ADD_EDIT_BANK_ACCOUNTS: 'checkbox[name="Add/edit bank accounts"]',
    ADD_EDIT_APPROVAL_POLICIES: 'checkbox[name="Add/edit approval policies"]',
    ADD_EDIT_USERS: 'checkbox[name="Add/edit users"]',
    EDIT_COMPANY_DETAILS: 'checkbox[name="Edit company details"]',
    PUBLISH_DOCUMENTS: 'checkbox[name="Publish documents"]'
  };

  static readonly USER_ROLES = {
    ADMINISTRATOR: 'combobox[name="Administrator"]',
    CFO: 'combobox[name="CFO"]',
    ACCOUNTANT: 'combobox[name="Accountant"]',
    VIEWER: 'combobox[name="Viewer"]',
    CUSTOM: 'combobox[name="Custom"]'
  }

  static readonly CONNECT_DISCONNECT_EXTERNAL = {
    CONNECT_EXTERNAL_COMPANY: 'checkbox[name="Connect/disconnect external company"]',
  }

  static readonly TWO_FACTOR_AUTHENTICATION = {
    FORCE_USER_TO_ENABLE_TWO_STEP_AUTHENTICATION: 'checkbox[name="Force user to enable Two-Step Authentication"]',
  }

}

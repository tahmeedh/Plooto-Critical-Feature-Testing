import { test, expect } from '@playwright/test';
import { TestBase } from '../../../helpers';

test.describe('Create Invoice', () => {
  let testBase: TestBase;

  test.beforeEach(async ({ page }) => {
    testBase = new TestBase(page);
    await testBase.loginAndNavigate();
  });

  test('should create an invoice', async ({ page }) => {
    await testBase.navigateToSection('capture');
    await testBase.clickAddDocumentButton();
    await testBase.clickDropFilesInput('/Users/tahmeed/Documents/Cursor/Plooto/PlootoQATest/sqinv-Tahmeed-Hossain-6987.pdf');
    

    await expect(page.getByTestId('document-upload')).toContainText('Upload Completed');
    // await expect(page).toHaveScreenshot();
    await expect(page.getByRole('button', { name: 'Upload Completed 100 Upload' })).toHaveScreenshot();
  });

});
import { expect, type Locator, Page } from '@playwright/test';

export class TestBasePage {
    readonly page: Page;
    readonly addDocumentButton: Locator;
    readonly dropFilesInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addDocumentButton = page.getByRole('button', { name: 'Add Document' });
        this.dropFilesInput = page.getByRole('button', { name: 'Drop files here The following' })
    }
}
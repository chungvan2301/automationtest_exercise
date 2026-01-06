import { expect, Page } from '@playwright/test';

export class HomePage {
    constructor(private page: Page) { }

    async goto() {
        await this.page.goto('/', { waitUntil: 'commit' });
    }

    async goToSignupLogin() {
        await this.page.getByRole('link', { name: 'Signup / Login' }).click();

        await expect(
            this.page.getByRole('heading', { name: 'New User Signup!' })
        ).toBeVisible();
    }

    async goToProducts() {
        await this.page.getByRole('link', { name: 'Products' }).click();

        await expect(
            this.page.getByRole('heading', { name: 'All Products' })
        ).toBeVisible();
    }
}

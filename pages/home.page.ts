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

    async scrollToFooter() {
        await this.page.locator('#footer').scrollIntoViewIfNeeded();
    }

    async verifySubscriptionTitle() {
        await expect(
            this.page.getByRole('heading', { name: 'Subscription' })
        ).toBeVisible();
    }

    async subscribe(email: string) {
        await this.page.locator('#susbscribe_email').fill(email);
        await this.page.locator('#subscribe').click();
    }

    async verifySubscribeSuccessMessage() {
        const successMessage = this.page.locator('#success-subscribe');

        await expect(successMessage).toBeVisible();

        await expect(
            successMessage.locator('.alert-success')
        ).toHaveText('You have been successfully subscribed!');

        await expect(successMessage).toBeHidden();
    }
}

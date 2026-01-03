import { Page, expect } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) { }

    private get wrongEmailOrPasswordError() {
        return this.page.getByText('Your email or password is incorrect!');
    }

    async login(email: string, password: string) {
        await this.page.getByTestId('login-email').fill(email);
        await this.page.getByTestId('login-password').fill(password);
        await this.page.getByTestId('login-button').click();
    }

    async loginSuccessfully() {
        await expect(
            this.page.getByRole('link', { name: 'Logout' })
        ).toBeVisible();
    }

    async expectWrongEmailOrPasswordError() {
        await expect(this.wrongEmailOrPasswordError).toBeVisible();
    }
}
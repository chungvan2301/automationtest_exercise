import { Page, expect } from '@playwright/test';

export class SignupPage {
    constructor(private page: Page) { }

    private get existingEmailError() {
        return this.page.getByText('Email Address already exist!');
    }

    async signup(name: string, email: string) {
        await this.page.getByTestId('signup-name').fill(name);
        await this.page.getByTestId('signup-email').fill(email);
        await this.page.getByTestId('signup-button').click();
    }

    async expectExistingEmailError() {
        await expect(this.existingEmailError).toBeVisible();
    }
}

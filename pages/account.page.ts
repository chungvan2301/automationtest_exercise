import { Page, expect } from '@playwright/test';

export class AccountPage {
    constructor(private page: Page) { }

    async fillAccountInformation() {
        await this.page.getByRole('radio', { name: 'Mr.' }).check();
        await this.page.getByTestId('password').fill('password123');

        await this.page.getByTestId('days').selectOption('15');
        await this.page.getByTestId('months').selectOption('5');
        await this.page.getByTestId('years').selectOption('1995');

        await this.page.locator('input[name="newsletter"]').check();
        await this.page.locator('input[name="optin"]').check();
    }

    async fillAddressInformation() {
        await this.page.getByTestId('first_name').fill('John');
        await this.page.getByTestId('last_name').fill('Doe');
        await this.page.getByTestId('company').fill('Test Company');
        await this.page.getByTestId('address').fill('123 Main Street');

        await this.page.getByTestId('country').selectOption('United States');
        await this.page.getByTestId('state').fill('California');
        await this.page.getByTestId('city').fill('Los Angeles');
        await this.page.getByTestId('zipcode').fill('90001');
        await this.page.getByTestId('mobile_number').fill('5555555555');
    }

    async createAccount() {
        await this.page.getByTestId('create-account').click();

        await expect(
            this.page.getByRole('heading', { name: 'ACCOUNT CREATED!' })
        ).toBeVisible();
    }

    async continueAfterCreate() {
        await this.page.getByTestId('continue-button').click();
    }

    async deleteAccount() {
        await this.page.getByText('Delete Account').click();

        await expect(
            this.page.getByText('ACCOUNT DELETED!')
        ).toBeVisible({ timeout: 10000 });
    }
}

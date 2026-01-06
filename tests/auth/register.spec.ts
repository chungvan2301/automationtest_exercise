import { test } from '@playwright/test';
import { HomePage } from '../../pages/home.page';
import { SignupPage } from '../../pages/signup.page';
import { AccountPage } from '../../pages/account.page';
import { USERS } from '../../test-data/users';

test('Register User', async ({ page }) => {
    const home = new HomePage(page);
    const signup = new SignupPage(page);
    const account = new AccountPage(page);

    const email = `john2${Date.now()}@example.com`;

    await home.goto();
    await home.goToSignupLogin();
    await signup.signup('John Doee', email);

    await account.fillAccountInformation();
    await account.fillAddressInformation();
    await account.createAccount();
    await account.continueAfterCreate();
    await account.deleteAccount();
});

test('Register User with existing email', async ({ page }) => {
    const home = new HomePage(page);
    const signup = new SignupPage(page);

    const VALID_USER = USERS.VALID_USER;

    await home.goto();
    await home.goToSignupLogin();
    await signup.signup("test", VALID_USER.email);
    await signup.expectExistingEmailError();
});
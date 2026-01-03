import { test } from '@playwright/test';
import { HomePage } from '../../pages/home.page';
import { SignupPage } from '../../pages/signup.page';
import { AccountPage } from '../../pages/account.page';
import { LoginPage } from '../../pages/login.page';

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

    const existEmail = `dev_test_01@yopmail.com`;
    const existName = `devtest`;

    await home.goto();
    await home.goToSignupLogin();
    await signup.signup(existName, existEmail);
    await signup.expectExistingEmailError();
});

test('Login User with correct email and password', async ({ page }) => {
    const home = new HomePage(page);
    const login = new LoginPage(page);

    const existEmail = `dev_test_01@yopmail.com`;
    const password = `12345678`;

    await home.goto();
    await home.goToSignupLogin();
    await login.login(existEmail, password);
    await login.loginSuccessfully();
});

test('Login User with incorrect email and password', async ({ page }) => {
    const home = new HomePage(page);
    const login = new LoginPage(page);

    const existEmail = `dev_test_01@yopmail.com`;
    const password = `123456789`;

    await home.goto();
    await home.goToSignupLogin();
    await login.login(existEmail, password);
    await login.expectWrongEmailOrPasswordError();
});

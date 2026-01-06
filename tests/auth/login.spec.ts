import { test } from '@playwright/test';
import { HomePage } from '../../pages/home.page';
import { LoginPage } from '../../pages/login.page';
import { USERS } from '../../test-data/users';

test('Login User with correct email and password', async ({ page }) => {
    const home = new HomePage(page);
    const login = new LoginPage(page);

    const VALID_USER = USERS.VALID_USER;

    await home.goto();
    await home.goToSignupLogin();
    await login.login(VALID_USER.email, VALID_USER.password);
    await login.loginSuccessfully();
});

test('Login User with incorrect email and password', async ({ page }) => {
    const home = new HomePage(page);
    const login = new LoginPage(page);

    const INVALID_USER = USERS.INVALID_USER;

    await home.goto();
    await home.goToSignupLogin();
    await login.login(INVALID_USER.email, INVALID_USER.password);
    await login.expectWrongEmailOrPasswordError();
});

test('Logout User', async ({ page }) => {
    const home = new HomePage(page);
    const login = new LoginPage(page);

    const VALID_USER = USERS.VALID_USER;

    await home.goto();
    await home.goToSignupLogin();
    await login.login(VALID_USER.email, VALID_USER.password);
    await login.loginSuccessfully();
    await login.logout();
    await login.logoutSuccessfully();
});

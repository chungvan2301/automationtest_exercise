import { test } from '@playwright/test';
import { HomePage } from '../../pages/home.page';
import { CartPage } from '../../pages/cart.page';
import { USERS } from '../../test-data/users';

test('Verify Subscription in home page', async ({ page }) => {
    const home = new HomePage(page);
    const email = USERS.VALID_USER.email;

    await home.goto();
    await home.scrollToFooter();
    await home.verifySubscriptionTitle();
    await home.subscribe(email);
    await home.verifySubscribeSuccessMessage();
});

test('Verify Subscription in Cart page', async ({ page }) => {
    const home = new HomePage(page);
    const cart = new CartPage(page);
    const email = USERS.VALID_USER.email;

    await home.goto();
    await cart.goToCart();

    await home.scrollToFooter();
    await home.verifySubscriptionTitle();
    await home.subscribe(email);
    await home.verifySubscribeSuccessMessage();
});

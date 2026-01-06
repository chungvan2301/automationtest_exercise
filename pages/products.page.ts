import { expect, Page } from '@playwright/test';

export class ProductsPage {
    constructor(private page: Page) { }

    async addProductToCart(productId: number) {
        await this.page
            .locator(`.productinfo a.add-to-cart[data-product-id="${productId}"]`)
            .click();
    }

    async continueShopping() {
        await this.page.getByRole('button', { name: 'Continue Shopping' }).click();
    }
}
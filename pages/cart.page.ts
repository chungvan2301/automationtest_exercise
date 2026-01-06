import { expect, Page } from '@playwright/test';

export class CartPage {
    constructor(private page: Page) { }

    async goToCart() {
        await this.page.getByRole('link', { name: 'Cart', exact: true }).click();
    }

    async viewCart() {
        await this.page.getByRole('link', { name: 'View Cart' }).click();
    }

    async productCountInCart(numberOfProduct : number) {
        const productsCart = this.page.locator('tr[id^="product-"]');
        await expect(productsCart).toHaveCount(numberOfProduct);
    }

    async verifyProductQuantity(expectedQuantity: number, productId: number) {
        const quantityLocator = this.page.locator(`tr#product-${productId} .cart_quantity button`);

        await expect(quantityLocator).toHaveText(expectedQuantity.toString());
    }

    async removeProductFromCart(productId: number) {
        const deleteButton = this.page.locator(
            `.cart_quantity_delete[data-product-id="${productId}"]`
        );

        await expect(deleteButton).toBeVisible();
        await deleteButton.click();

        const productRow = this.page.locator(`tr#product-${productId}`);
        await expect(productRow).toHaveCount(0);
    }
}
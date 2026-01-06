import { expect, Page } from '@playwright/test';

export class ProductDetailPage {
  constructor(private page: Page) {}

    async goToProductDetail(productId: number) {
        await this.page
            .locator(`a[href="/product_details/${productId}"]`)
            .click();
    }
    
    
    async setQuantity(quantity: number) {
        const quantityInput = this.page.locator('#quantity');
        await quantityInput.fill(quantity.toString());
    }

    async addToCart() {
        await this.page.getByRole('button', { name: 'Add to cart' }).click();
    }
}
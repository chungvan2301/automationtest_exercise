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

    async expectProductsPage() {
        await expect(this.page.locator('h2.title.text-center')).toHaveText('All Products');
    }

    async searchProduct(productName: string) {
        await this.page.locator('#search_product').fill(productName);
        await this.page.locator('#submit_search').click();
    }

    async expectSearchedProducts(productName: string) {
        await expect(this.page.locator('h2.title.text-center')).toHaveText('Searched Products');
    }

    async expectValidSearchResults(productName: string) {
        const productCards = this.page.locator('.productinfo');
        const productCount = await productCards.count();

        expect(productCount).toBeGreaterThan(0);
        
        for (let i = 0; i < productCount; i++) {
            const productText = await productCards.nth(i).innerText();
            expect(productText.toLowerCase()).toContain(productName.toLowerCase());
        }
    }
}
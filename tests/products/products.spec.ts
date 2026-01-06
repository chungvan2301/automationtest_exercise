import { test } from '@playwright/test';
import { HomePage } from '../../pages/home.page';
import { ProductsPage } from '../../pages/products.page';
import { ProductDetailPage } from '../../pages/productDetail.page';
import { CartPage } from '../../pages/cart.page';

test('Add Products in Cart', async ({ page }) => {
    const home = new HomePage(page);
    const products = new ProductsPage(page);
    const cart = new CartPage(page);
    const productId1 = 1;
    const productId2 = 2;
    const quantityOfProductInCart = 2

    await home.goto();
    await home.goToProducts();

    await products.addProductToCart(productId1);
    await products.continueShopping();
    await products.addProductToCart(productId2);
    await cart.viewCart();
    await cart.productCountInCart(quantityOfProductInCart);
});

test('Verify Product quantity in Cart', async ({ page }) => {
    const home = new HomePage(page);
    const products = new ProductsPage(page);
    const cart = new CartPage(page);
    const productDetail = new ProductDetailPage(page);
    const quantity = 4;
    const productId = 1;

    await home.goto();
    await home.goToProducts();

    await productDetail.goToProductDetail(productId);
    await productDetail.setQuantity(quantity);
    await productDetail.addToCart();
    await cart.viewCart();
    await cart.verifyProductQuantity(quantity, productId);
});

test('Remove Products From Cart', async ({ page }) => {
    const home = new HomePage(page);
    const products = new ProductsPage(page);
    const cart = new CartPage(page);
    const productId = 1;
    const quantityOfProductInCart = 1;

    await home.goto();
    await home.goToProducts();

    await products.addProductToCart(productId);
    await cart.viewCart();
    await cart.productCountInCart(quantityOfProductInCart);
    await cart.removeProductFromCart(productId);
});
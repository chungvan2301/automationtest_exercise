import { test } from '@playwright/test';
import { HomePage } from '../../pages/home.page';
import { ProductsPage } from '../../pages/products.page';
import { ProductDetailPage } from '../../pages/productDetail.page';
import { CartPage } from '../../pages/cart.page';
import { PRODUCTS } from '../../test-data/products';

test('Add Products in Cart', async ({ page }) => {
    const home = new HomePage(page);
    const products = new ProductsPage(page);
    const cart = new CartPage(page);

    const BLUE_TOP = PRODUCTS.BLUE_TOP;
    const MEN_TSHIRT = PRODUCTS.MEN_TSHIRT;
    const quantityOfProductInCart = 2

    await home.goto();
    await home.goToProducts();

    await products.addProductToCart(BLUE_TOP.id);
    await products.continueShopping();
    await products.addProductToCart(MEN_TSHIRT.id);
    await cart.viewCart();
    await cart.productCountInCart(quantityOfProductInCart);
});

test('Verify Product quantity in Cart', async ({ page }) => {
    const home = new HomePage(page);
    const cart = new CartPage(page);
    const productDetail = new ProductDetailPage(page);

    const BLUE_TOP = PRODUCTS.BLUE_TOP;
    const quantity = 4;

    await home.goto();
    await home.goToProducts();

    await productDetail.goToProductDetail(BLUE_TOP.id);
    await productDetail.setQuantity(quantity);
    await productDetail.addToCart();
    await cart.viewCart();
    await cart.verifyProductQuantity(quantity, BLUE_TOP.id);
});

test('Remove Products From Cart', async ({ page }) => {
    const home = new HomePage(page);
    const products = new ProductsPage(page);
    const cart = new CartPage(page);

    const BLUE_TOP = PRODUCTS.BLUE_TOP;
    const quantityOfProductInCart = 1;

    await home.goto();
    await home.goToProducts();

    await products.addProductToCart(BLUE_TOP.id);
    await cart.viewCart();
    await cart.productCountInCart(quantityOfProductInCart);
    await cart.removeProductFromCart(BLUE_TOP.id);
});
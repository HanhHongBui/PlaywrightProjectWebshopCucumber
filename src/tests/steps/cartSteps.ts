import { Given, When, Then } from "@cucumber/cucumber";
import CartPage from "../../po/pages/cart/cartPage"
import HomePage from "../../po/pages/home/homePage"
import ProductsPage from "../../po/pages/products/productsPage"
import { fixture } from "../../hooks/pageFixture"

let cartPage: CartPage;
let homePage: HomePage;
let productsPage: ProductsPage;

Given('I navigate to product sub-category page {string} from product category {string}', async function (productSubCategory,productCategory) {
  homePage = new HomePage(fixture.page);
  await homePage.goToSubProductPage(productCategory,productSubCategory)
  await homePage.screenshot(this);
  fixture.logger.info("Navigate to product sub-category page");
});

Given('I navigate to product category page {string}', async function (productCategory) {
  await homePage.goToProductPage(productCategory);
  await homePage.screenshot(this);
  fixture.logger.info("Navigate to product category page");
});

When('I add product {string} to cart', async function (productName) {
  productsPage = new ProductsPage(fixture.page);
  await productsPage.clickOnAddToCartBtn(productName);
  await productsPage.screenshot(this);
  fixture.logger.info("Add product to cart");
});

When('I click on Add to cart button under product {string}', async function (productName) {
  await productsPage.clickOnAddToCartBtn(productName);
  await productsPage.screenshot(this);
});

Then('I should see product {string} displayed in product details page', async function (productName) {
  await productsPage.waitForPageToLoad();
  await productsPage.verifyProductNameDisplayed(productName);
  await productsPage.screenshot(this);
});

When('I click on Add to cart button in product details page', async function () {
  await productsPage.clickOnAddToCartBtnInProductDetails();
  await productsPage.screenshot(this);
});

Then('I should see success notification bar displayed', async function () {
  await productsPage.waitForPageToLoad();
  await productsPage.verifySuccessNotiBar();
  await productsPage.screenshot(this);
  fixture.logger.info("Success notification bar displayed");
});

When('I navigate to shopping cart from link in the notification bar', async function () {
  await productsPage.clickOnShoppingCartLinkInNotiBar();
  await productsPage.screenshot(this);
});

Then('I should see product {string} in the shopping cart', async function (productName) {
  cartPage = new CartPage(fixture.page);
  await cartPage.verifyProductIsInCart(productName);
  await cartPage.screenshot(this);
  fixture.logger.info("View shopping cart");
});
Then('I remove all items in the shopping cart', async function () {
  await cartPage.removeAllFromCart();
  await cartPage.screenshot(this);
  fixture.logger.info("View shopping cart after remove all items");
});
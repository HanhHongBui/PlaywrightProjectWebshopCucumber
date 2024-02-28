import {Locator, Page,TestInfo,expect} from "@playwright/test";
import CommonSelectors from './commonSelectors';
import { IWorld } from "@cucumber/cucumber/lib/support_code_library_builder/world";
// to store all common functions
export abstract class BasePage {
    protected page: Page;
    constructor( page: Page) { 
        this.page = page
    }
    
    commonSelectors = new CommonSelectors();
    async navigate(path: string) {
        await this.page.goto(path);
    }
    async closePage() {
        await this.page.close();
    }
    async context() {
        return this.page.context();
    }
    async wait(timeInSeconds: number) {
        await this.page.waitForTimeout(timeInSeconds);
    }
 
    async screenshot(world: IWorld) {
        await this.page.screenshot().then((screenShot) => {
            world.attach(screenShot, 'image/png');
        });
    }

    async logout() {
        await this.page.locator(this.commonSelectors.LOGOUT_LINK).click();
    }

    async waitForPageToLoad() {
        await expect(this.page.locator(this.commonSelectors.LOADING_IMAGE)).not.toBeVisible();
    }

    async goToProductPage(productCategory: string) {
        await this.page.locator(`//ul[@class='top-menu']//a[contains(text(),'${productCategory}')]`).click();
    }

    async goToSubProductPage(productCategory: string, productSubCategory: string) {
        await this.page.locator(`//ul[@class='top-menu']//a[contains(text(),'${productCategory}')]`).hover();
        await this.page.locator(`//ul[@class='top-menu']//ul//a[contains(text(),'${productSubCategory}')]`).click();
    }
    async goToShoppingCartPage() {
        await this.page.locator(this.commonSelectors.SHOPPING_CART_LINK).click();
    }
    async clickOnButton(buttonName: string) {
        await this.page.locator(`//input[@value='${buttonName}']`).click({force: true});
    }

    async clickOnLinkInFooter(linkName: string) {
        await this.page.locator(`//div[@class='footer']//a[text()='${linkName}']`).click();
    }
    async clickOnLinkInSidebar(linkName: string) {
        await this.page.locator(`//div[@class='listbox']//a[contains(text(),'${linkName}')]`).click();
    }
    async acceptDialog(){
        this.page.on("dialog", async (alert) => {
            const text = alert.message();
            console.log(text);;
            await alert.accept();
        })
    }
}

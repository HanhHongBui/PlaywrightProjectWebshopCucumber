import LoginSelectors from './login.selector';
import { BasePage } from "../../base/basePage";
import { Page } from '@playwright/test';
export default class LoginPage extends BasePage {
    loginSelectors = new LoginSelectors();
    constructor(page: Page){
        super(page)
    }
        
    async loginToPage(emailAdd: string, password: string){
        await this.page.locator(this.loginSelectors.EMAIL_TXTBOX).fill(emailAdd);
        await this.page.locator(this.loginSelectors.PASSWORD_TXTBOX).fill(password);
        await this.page.locator(this.loginSelectors.LOGIN_BTN).click();
    }
}
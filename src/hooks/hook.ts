import { BeforeAll, AfterAll, Before, After, Status } from "@cucumber/cucumber";
import { Browser,Page,  BrowserContext,chromium } from "@playwright/test";
import { fixture } from "./pageFixture";
let browser: Browser;
let page: Page
BeforeAll(async function () {
    browser = await chromium.launch({headless: false});
     page = await browser.newPage();
     fixture.page =  page;
});
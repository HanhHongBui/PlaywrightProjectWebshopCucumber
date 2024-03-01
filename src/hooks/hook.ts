import { BeforeAll, AfterAll, Before, After, Status } from "@cucumber/cucumber";
import { Browser,Page,  BrowserContext,chromium } from "@playwright/test";
import { fixture } from "./pageFixture";
import { createLogger } from "winston";
import { options } from "../../utils/logger";
import dotenv from 'dotenv';
import path from 'path';
let browser: Browser;
let page: Page
BeforeAll(async function () {
    browser = await chromium.launch({headless: false});
    page = await browser.newPage();
    fixture.page =  page;
    dotenv.config({
        path: `./testsEnv/.env.${process.env.ENV}`
      });
});

Before(async function ({pickle }) {
    const scenarioName = pickle.name + " "+pickle.id
    fixture.logger =  createLogger(options(scenarioName));
});

AfterAll(async function () {
    await  browser.close();
    fixture.logger.close();
});
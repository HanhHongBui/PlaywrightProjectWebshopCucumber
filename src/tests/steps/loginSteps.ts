import { Given, When, Then } from "@cucumber/cucumber";
import LoginPage from "../../po/pages/login/loginPage"
import HomePage from "../../po/pages/home/homePage"
import { fixture } from "../../hooks/pageFixture"

let loginPage: LoginPage;
let homePage: HomePage
Given('I go to Log in page', async function () {
  loginPage = new LoginPage(fixture.page);
  await loginPage.navigate(`${process.env.BASEURL!}/login`)
  await loginPage.screenshot(this);
});

When('I log in to page', async function () {
  await loginPage.loginToPage(`${process.env.EMAIL!}`, `${process.env.PASSWORD!}`)
  await loginPage.screenshot(this);
});

When('I go to home page', async function () {
  await loginPage.navigate(`${process.env.BASEURL!}`)
  await loginPage.screenshot(this);
});

Then('I see user email address displayed', async function () {
  homePage = new HomePage(fixture.page);
  await homePage.verifyUserEmailDisplayed(`${process.env.EMAIL!}`);
  await homePage.screenshot(this);
});
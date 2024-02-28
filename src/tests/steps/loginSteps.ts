import { Given, When, Then } from "@cucumber/cucumber";
import LoginPage from "../../po/pages/login/loginPage"
import HomePage from "../../po/pages/home/homePage"
import { fixture } from "../../hooks/pageFixture"

let loginPage: LoginPage;
let homePage: HomePage
Given('I go to Log in page', async function () {
  loginPage = new LoginPage(fixture.page);
  await loginPage.navigate("https://demowebshop.tricentis.com/login")
});

When('I log in to page with username {string} and password {string}', async function (username, password) {
  await loginPage.loginToPage(username, password)
});

When('I go to home page', async function () {
  await loginPage.navigate("https://demowebshop.tricentis.com/")
});

Then('I see user email address displayed', async function () {
  homePage = new HomePage(fixture.page);
  await homePage.verifyUserEmailDisplayed("superman1912@gmail.com");
});
const { Given, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page');
const RegistrationPage = require('../pageobjects/registration.page');
const EcommercePage = require('../pageobjects/editCart.page');
const MessagePage = require('../pageobjects/message.page');

const pages = {
  login: LoginPage,
  registration: RegistrationPage,
  ecommerce: EcommercePage
}

Given(/^I am on the (\w+) page$/, async (page) => {
  await pages[page].open()
});

Then(/^I should see a message saying (.+)$/, async (message) => {
  await expect(MessagePage.messageLocation).toBeExisting();
  await expect(MessagePage.messageLocation).toHaveText(expect.stringContaining(message));
});
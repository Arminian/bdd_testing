const { When } = require('@wdio/cucumber-framework');

const RegistrationPage = require('../pageobjects/registration.page');

When(/^I register an account with (.+), (.+), (.+), (.+) and (.+)$/, async (name, country, account, email, password) => {
  await RegistrationPage.register(name, country, account, email, password)
});
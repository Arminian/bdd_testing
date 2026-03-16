const { When } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');

When(/^I login with (.+) and (.+)$/, async (email, password) => {
  await LoginPage.login(email, password)
});
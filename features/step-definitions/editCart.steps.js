const { When, Then } = require('@wdio/cucumber-framework');

const UserCart = require('../pageobjects/editCart.page');
const MessagePage = require('../pageobjects/message.page');

When(/^I add (.+) to the cart$/, async (item) => {
  await UserCart.addToCart(item);
});

Then(/^I should see a confirmation saying (.+)$/, async (message) => {
  await expect(MessagePage.ecommerceMessageLocation).toBeExisting();
  await expect(MessagePage.ecommerceMessageLocation).toHaveText(expect.stringContaining(message));
});
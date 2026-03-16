const { $ } = require('@wdio/globals')
const Page = require('./page');

class MessagePage extends Page {
  get messageLocation () {
    return $('//div[contains(@class, "toaster")]//span[contains(@class, "title")]');
  }

  get ecommerceMessageLocation () {
    return $(`//section[@aria-label="Notifications alt+T"]//div[@data-title]`);
  }
}

module.exports = new MessagePage();

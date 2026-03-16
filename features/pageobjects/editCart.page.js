const { $ } = require('@wdio/globals')
const Page = require('./page');

class EditCartPage extends Page {
  getItemButtonLocation (item_name) {
    return $(`//a[text()=${JSON.stringify(item_name)}]/ancestor::div
    //button[text()="Add to cart"]`);
  }

  async addToCart (item_id) {
    await this.getItemButtonLocation(item_id).click();
  }

  open () {
    return super.open('ecommerce/login');
  }
}

module.exports = new EditCartPage();

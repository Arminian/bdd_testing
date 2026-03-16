const { $ } = require('@wdio/globals')
const Page = require('./page');

class RegistrationPage extends Page {
  get inputName () {
    return $('#name');
  }

  get inputCountry () {
    return $('#country')
  }

  get inputAccountType () {
    return $('#account')
  }

  get inputEmail () {
    return $('#email');
  }

  get inputPassword () {
    return $('#password');
  }

  get inputConfirmPassword () {
    return $('#confirm_password')
  }

  get btnSubmit () {
    return $('button[type="submit"]');
  }

  async register (name, country, account, email, password) {
    await this.inputName.setValue(name);
    await this.inputCountry.addValue(country);
    await this.inputAccountType.addValue(account);
    await this.inputEmail.setValue(email);
    await this.inputPassword.setValue(password);
    await this.inputConfirmPassword.setValue(password);
    await this.btnSubmit.click();
  }

  open () {
    return super.open('registration');
  }
}

module.exports = new RegistrationPage();

const { I } = inject();

module.exports = {

  inputPassword: '//*[@resource-id="password_PasswordScreen_passwordInput"]',
  enterLoginButton: '//*[@text="Entrar"]',

  // insert your locators and methods here
  fillPassword: function(user) {
    I.waitForVisible(this.inputPassword, 30)
    I.fillField(this.inputPassword, user.password)
  },

  tryLogin: function() {
    I.waitForVisible(this.enterLoginButton, 30)
    I.click(this.enterLoginButton)
  }
}

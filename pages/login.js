const { I } = inject();

module.exports = {

  forgotLoginOption: '//*[@resource-id="login_LoginScreen_forgotPasswordButton"]',
  notification: 'Seu login foi enviado para o email:',
  inputLogin: '//*[@resource-id="login_LoginScreen_NameInput"]',
  continueLoginButton: '//*[@text="CONTINUAR"]',

  // insert your locators and methods here

  confirmLogin: function(user) {
    I.waitForVisible(this.inputLogin, 30)
    I.fillField(this.inputLogin, user.name)
    I.waitForVisible(this.continueLoginButton, 30);
    I.click(this.continueLoginButton);
  },

  clickForgotLogin: function() {
    I.waitForVisible(this.forgotLoginOption, 30);
    I.click(this.forgotLoginOption);
  },

  seeNotification: function() {
    I.waitForText(this.notification, 30);
    I.see(this.notification);
  }
}

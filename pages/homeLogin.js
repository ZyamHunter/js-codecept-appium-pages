const { I } = inject();

module.exports = {

  enterButtonHome: '//*[@text="ENTRAR"]',

  // insert your locators and methods here
  clickEnterButton: function() {
    I.waitForVisible(this.enterButtonHome, 30);
    I.click(this.enterButtonHome);
  }
}

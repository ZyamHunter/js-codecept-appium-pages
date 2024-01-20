const { I } = inject();

module.exports = {

  inputCpfCnpj: '//*[@resource-id="recoverCpfCnpj_TaxIdScreen_cpfCnpjInput"]',
  recuperationButton: '//*[@resource-id="recoverCpfCnpj_TaxIdScreen_continueButton"]',

  // insert your locators and methods here

  confirmFogotLogin: function(user) {
    I.waitForVisible(this.inputCpfCnpj, 30);
    I.fillField(this.inputCpfCnpj, user.cnpj);
    I.waitForVisible(this.recuperationButton, 30);
    I.click(this.recuperationButton);
  },
}

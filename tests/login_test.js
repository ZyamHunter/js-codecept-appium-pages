Feature('login');

const { falseLoginUser } = require('../data/forgotLogin')

Scenario('test login',  ({ I, homeLoginPage, loginPage, passwordPage }) => {
    homeLoginPage.clickEnterButton();
    loginPage.confirmLogin(falseLoginUser);
    passwordPage.fillPassword(falseLoginUser);
    passwordPage.tryLogin();
});

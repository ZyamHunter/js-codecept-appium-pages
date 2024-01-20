Feature('home');

const { falseLoginUser } = require('../data/forgotLogin')

Scenario('test home page', ({ I, loginPage, homeLoginPage, forgotLoginPage }) => {
    homeLoginPage.clickEnterButton();
    loginPage.clickForgotLogin();
    forgotLoginPage.confirmFogotLogin(falseLoginUser);
    loginPage.seeNotification();
  });

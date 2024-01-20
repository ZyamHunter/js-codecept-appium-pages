/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Appium: {
      appiumV2: true,
      'app': 'bankeiro.apk',
      'platform': 'android',
      'device': 'emulator',
      'port': 4723,
      'path': '/wd/hub',
      desiredCapabilities: {
        //'appPackage': data.packageName,
        'deviceName': process.env.DEVICE || 'Emulator',
        'platformName': process.env.PLATFORM || 'android',
        'platformVersion': process.env.OS_VERSION || '11.0',
        'automationName': process.env.ENGINE || 'UIAutomator2',
        'avd': process.env.UDID || 'Pixel_2_API_33',
        'newCommandTimeout': 300000,
        'androidDeviceReadyTimeout': 300000,
        'androidInstallTimeout': 90000,
        'appWaitDuration': 300000,
        'autoGrantPermissions': true,
        'gpsEnabled': true,
        'isHeadless': false,
        'noReset': false,
        'noSign': true,
      }
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: "./pages/login.js",
    homeLoginPage: "./pages/homeLogin.js",
    passwordPage: "./pages/password.js",
    forgotLoginPage: "./pages/forgotLogin.js",
  },
  name: 'Codeceptjs 2'
}
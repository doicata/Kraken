const { Given, When, Then } = require('@cucumber/cucumber');
const { logIn, logInButton } = require('./login');
//Seccion login
When('I enter email {string} password {string}', async function (email, password) {
    await logIn(this.driver, email, password);
});

Then('I clic to Sign in', async function () {
    await logInButton(this.driver);
});
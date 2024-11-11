const fs = require('fs'); // Asegúrate de requerir 'fs' al principio del archivo
const { Given, When, Then, Before } = require('@cucumber/cucumber');
const { logIn, logInButton } = require('./login');

let properties;
Before(() => {
  const data = fs.readFileSync('./features/web/properties.json', 'utf8');
  properties = JSON.parse(data);
});

Given('I navigate to page principal', async function () {
    await this.driver.url(properties.Url);
});

//Seccion login
When('I enter email y password', async function () {
    await logIn(this.driver, properties.Email, properties.Password);
});

Then('I clic to Sign in', async function () {
    await logInButton(this.driver);
});




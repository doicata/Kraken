const { Given, When, Then } = require('@cucumber/cucumber');
const { getTitleAdmin, clickPosts, clickPages, clickTags, clickSitePage } = require('./principal');

//Principal
Then('Página principal del administrador', async function () {
    await getTitleAdmin(this.driver);
  });
  
  Then('Clic en la sección de Posts', async function () {
    await clickPosts(this.driver);
  });
  
  Then('Clic en la sección de Tags', async function () {
    await clickTags(this.driver);
  });
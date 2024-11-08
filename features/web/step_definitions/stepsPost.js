const { Given, When, Then } = require('@cucumber/cucumber');
const { getTitlePostSection, clickNewPost,writeTitlePost, clickContentPost,
  writeContentPost,clickNewPostPublishFlow, clickNewPostContinue, clickNewPostPublish,
  clickNewPostCloseModal, clickNewPostValidate, lastPostCreated} = require('./post');

//Posts
Then('Página de listado de posts', async function () {
  await getTitlePostSection(this.driver);
});

Then('Clic en el boton New Post', async function () {
  await clickNewPost(this.driver);
});

Then('Titulo del post', async function () {
  await writeTitlePost(this.driver);
});

Then('Clic en Contenido', async function () {
  await clickContentPost(this.driver);
});

Then('Contenido del post', async function () {
  await writeContentPost(this.driver);
});

Then('Clic en el boton publish-flow', async function () {
  await clickNewPostPublishFlow(this.driver);
});

Then('Clic en el boton Continue', async function () {
  await clickNewPostContinue(this.driver);
});

Then('Clic en el boton Publish Post', async function () {
  await clickNewPostPublish(this.driver);
});

Then('Cierre el modal de confirmación', async function () {
  await clickNewPostCloseModal(this.driver);
});
Then('Valida Post publicado en la lista de posts', async function () {
  await lastPostCreated(this.driver,"Titulo de prueba", "notClick");
});

const { Given, When, Then } = require('@cucumber/cucumber');
const { logIn, logInButton } = require('./login');
const { getTitlePostSection, clickNewPost,writeTitlePost, clickContentPost,
  writeContentPost,clickNewPostPublishFlow, clickNewPostContinue, clickNewPostPublish,
  clickNewPostCloseModal, clickNewPostValidate, lastPostCreated} = require('./post');
const { getTitleAdmin, clickPosts, clickPages, clickTags, clickSitePage } = require('./principal');

//Seccion login
When('I enter email {string} password {string}', async function (email, password) {
    await logIn(this.driver, email, password);
});

Then('I clic to Sign in', async function () {
    await logInButton(this.driver);
});

//Principal
Then('Página principal del administrador', async function () {
  await getTitleAdmin(this.driver);
});

Then('Clic en la sección de Posts', async function () {
  await clickPosts(this.driver);
});

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

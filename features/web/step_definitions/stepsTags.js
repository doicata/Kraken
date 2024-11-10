const { Given, When, Then } = require('@cucumber/cucumber');
const { getTitleTagSection, clickNewTag, writeNameTag,
   clickDescriptionTag, writeDescriptionTag, clickNewTagSave, clickDeleteTag, clickDeleteConfirmTag, lastTagCreated, clicTag, clickNewTagValidate } = require('./tags');


//Tags
Then('Página de listado de tags', async function () {
  await getTitleTagSection(this.driver);
});

Then('Clic en el boton New tag', async function () {
  await clickNewTag(this.driver);
});

Then('Clic en el boton Eliminar', async function () {
  await clickDeleteTag(this.driver);
});

Then('Clic en el boton Confirmar Eliminar', async function () {
  await clickDeleteConfirmTag(this.driver);
});

When('Nombre del tag {string}', async function (name) {
  await writeNameTag(this.driver, name);
});

When('Nombre del tag con caracteres especiales {string}', async function (name) {
  await writeNameTag(this.driver, name);
});

Then('Clic en Descripción del tag', async function () {
  await clickDescriptionTag(this.driver);
});

When('Descripción del tag {string}', async function (description) {
  await writeDescriptionTag(this.driver, description);
});

Then('Clic en el boton guardar', async function () {
  await clickNewTagSave(this.driver);
});

When('Valida Tag publicado en la lista de tags {string}', async function (name) {
  await lastTagCreated(this.driver, name, "notClick");
});

When('Clic en el tag {string}', async function (name) {
  await clicTag(this.driver, name);
});


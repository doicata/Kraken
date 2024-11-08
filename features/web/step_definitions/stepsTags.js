const { Given, When, Then } = require('@cucumber/cucumber');
const { getTitleTagSection, clickNewTag, writeNameTag, clickDescriptionTag, writeDescriptionTag, clickNewTagSave, lastTagCreated, clickNewTagValidate } = require('./tags');


//Tags
Then('Página de listado de tags', async function () {
  await getTitleTagSection(this.driver);
});

Then('Clic en el boton New tag', async function () {
  await clickNewTag(this.driver);
});

Then('Nombre del tag', async function () {
  await writeNameTag(this.driver);
});

Then('Clic en Descripción del tag', async function () {
  await clickDescriptionTag(this.driver);
});

Then('Descripción del tag', async function () {
  await writeDescriptionTag(this.driver);
});

Then('Clic en el boton guardar', async function () {
  await clickNewTagSave(this.driver);
});

Then('Valida Tag publicado en la lista de tags', async function () {
  await lastTagCreated(this.driver,"New Tag", "notClick");
});
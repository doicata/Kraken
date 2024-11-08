module.exports = {
  getTitlePostSection: async function (driver) {
    let titleField = await driver.$("h2.gh-canvas-title");
    // Verificar que el texto del elemento contenga 'Posts'
    let text = await titleField.getText();
    if (text.includes("Posts")) {
      console.log('El título contiene "Posts".');
    } else {
      console.log('El título no contiene "Posts".');
    }
    return titleField.getText();
  },

  clickNewPost: async function (driver) {
    let clicButton = await driver.$('[data-test-new-post-button=""]');
    return clicButton.click({ force: true });
  },
  writeTitlePost: async function (driver) {
    // let title = faker.lorem.words();
    let title = "Titulo de prueba";
    let textField = await driver.$('[data-test-editor-title-input=""]');
    await textField.setValue(title);
  },
  clickContentPost: async function (driver) {
    let contentField = await driver.$('[data-kg="editor"]');
    return contentField.click({ force: true });
  },
  writeContentPost: async function (driver) {
    // let contenido = faker.lorem.words();
    let contenido = "Contenido de prueba";
    let textField = await driver.$('[data-kg="editor"]');
    await textField.setValue(contenido);
  },
  clickNewPostPublishFlow: async function (driver) {
    let clicButton = await driver.$('[data-test-button="publish-flow"]');
    return clicButton.click({ force: true });
  },
  clickNewPostContinue: async function (driver) {
    let clicButton = await driver.$('[data-test-button="continue"]');
    return clicButton.click({ force: true });
  },
  clickNewPostPublish: async function (driver) {
    let clicButton = await driver.$('[data-test-button="confirm-publish"]');
    return clicButton.click({ force: true });
  },
  clickNewPostCloseModal: async function (driver) {
    let clicButton = await driver.$('[data-test-button="close-publish-flow"]');
    return clicButton.click({ force: true });
  },
  lastPostCreated: async function (driver, title, flag) {
    console.log("title", title);
    console.log("flag", flag);

    let postTitleElement = await driver.$("h3.gh-content-entry-title");
    let postTitle = await postTitleElement.getText();
    console.log("postTitle", postTitle);
    if (flag === "notClick") {
      // expect(postTitle).to.contain(title);
    } else if (flag === "click") {
      await postTitleElement.click({ force: true });
    } else {
      await postTitleElement.click({ button: "right", force: true });
    }
  },

  clickNewPostValidate: async function (driver) {
    return await this.lastPostCreated(driver, "Titulo de prueba", "notClick");
  },
};

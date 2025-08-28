const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'pavx35',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

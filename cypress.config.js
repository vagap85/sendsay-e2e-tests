const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://app.sendsay.ru',  // ВАЖНО: должен быть правильный URL
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 15000,
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
  },
});
// const { defineConfig } = require("cypress");
//
// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });


const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3001",
    env: {
      credentials: {
        username: "gary.cole@example.com",
        password: "pAssw0rd",
      },
    },
  },
});

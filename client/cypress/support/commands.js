const addUser = (email, firstName, lastName, userType) => {
  cy.intercept('POST', 'signup').as('signUp');

  cy.visit('/#/signup');
  cy.get('input#username').type(email);
  cy.get('input#firstName').type(firstName);
  cy.get('input#lastName').type(lastName);
  cy.get('input#password').type('pAssw0rd', { log: false });
  cy.get('select#group').select(userType);

  // Handle file upload
  cy.get('input#photo').attachFile('images/photo.jpg');

  cy.get('button').contains('Sign up').click();
  cy.wait('@signUp');
  cy.hash().should('eq', '#/login');
};

Cypress.Commands.add('addUser', addUser);


const logIn = (email) => {
  cy.intercept('POST', 'login').as('logIn');

  // Log into the app.
  cy.visit('/#/login');
  cy.get('input#username').type(email);
  cy.get('input#password').type('pAssw0rd', { log: false });
  cy.get('button').contains('Log in').click();
  cy.wait('@logIn');
};

Cypress.Commands.add('addUser', addUser);
Cypress.Commands.add('logIn', logIn);
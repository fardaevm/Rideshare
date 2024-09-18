describe('Navigation', function () {
  it('Can navigate to sign up from home', function () {
    cy.visit('/#/');
    cy.get('a').contains('Sign up').click();
    cy.hash().should('eq', '#/signup');
  });

  // new
  it('Can navigate to log in from home', function () {
    cy.visit('/#/');
    cy.get('a').contains('Log in').click();
    cy.hash().should('eq', '#/login');
  });

  // new
  it('Can navigate to home from sign up', function () {
    cy.visit('/#/signup');
    cy.get('a').contains('Home').click();
    cy.hash().should('eq', '#/');
  });

  // new
  it('Can navigate to log in from sign up', function () {
    cy.visit('/#/signup');
    cy.get('a').contains('Log in').click();
    cy.hash().should('eq', '#/login');
  });

  // new
  it('Can navigate to home from log in', function () {
    cy.visit('/#/login');
    cy.get('a').contains('Home').click();
    cy.hash().should('eq', '#/');
  });

  // new
  it('Can navigate to sign up from log in', function () {
    cy.visit('/#/login');
    cy.get('a').contains('Sign up').click();
    cy.hash().should('eq', '#/signup');
  });
});
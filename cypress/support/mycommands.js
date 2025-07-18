// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })



// -- login command --
Cypress.Commands.add('login', (loginname, password) => {
    cy.get('#customer_menu_top > li > a').click();
    cy.get('#loginFrm_loginname').type(loginname);
    cy.get('#loginFrm_password').type(password);
    cy.get('#loginFrm > fieldset > .btn').click();
})
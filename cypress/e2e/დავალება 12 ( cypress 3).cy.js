//   შეასრულეთ პირველი სამი ქეისი
// Test Case 1: Register User - 16 step-ის ჩათვლით იუზერი აღარ წაშალოთ
// Test Case 2: Login User with correct email and password
// Test Case 3: Login User with incorrect email and password
// გამოიყენეთ custom command და fixtures 
// თვითონ ტესტის ფაილში ( .cy.js) არცერთი მონაცემი არ ჩაწეროთ ხელით ,
//  წინასწარ გაამზადეთ fixture ყველა საჭირო ველისთვის ( email, name, password....)


import signup from '../fixtures/cypress 3.json'

describe('signup,loggin', () => {
    beforeEach("", () => {
        cy.visit('/');
        cy.get('body').should('be.visible');

    });


    it('Register User ', () => {
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('.signup-form > h2').should("contain", signup.signupForm)
        cy.get('[data-qa="signup-name"]').type(signup.name)
        cy.get('[data-qa="signup-email"]').type(signup.email)
        cy.get('[data-qa="signup-button"]').click()
        cy.get('#id_gender1').check()
        cy.get('[data-qa="password"]').type(signup.password)
        cy.get('[data-qa="days"]').select(signup.days)
        cy.get('[data-qa="months"]').select(signup.months)
        cy.get('[data-qa="years"]').select(signup.years)
        cy.get('#newsletter').check()
        cy.get('#optin').check()
        cy.get('[data-qa="first_name"]').type(signup.firstName)
        cy.get('[data-qa="last_name"]').type(signup.lastName)
        cy.get('[data-qa="company"]').type(signup.company)
        cy.get('[data-qa="address"]').type(signup.address)
        cy.get('[data-qa="address2"]').type(signup.address2)
        cy.get('[data-qa="country"]').select(signup.country)
        cy.get('[data-qa="state"]').type(signup.state)
        cy.get('[data-qa="city"]').type(signup.city)
        cy.get('[data-qa="zipcode"]').type(signup.zipcode)
        cy.get('[data-qa="mobile_number"]').type(signup.mobileNumber)
        cy.get('[data-qa="create-account"]').click()
        cy.get('b').should("have.text", signup.acc)
        cy.get('[data-qa="continue-button"]').click()
        cy.get(':nth-child(10) > a').should("contain", signup.logged)

    });




    it('Login User with correct email and password', () => {

        cy.login(signup.email, signup.password)
        cy.get(':nth-child(10) > a').should("contain", signup.logged)
        cy.get('.shop-menu > .nav > :nth-child(5)').click()
        cy.get('b').should("have.text", signup.accdel)


    });


    it('Login User with incorrect email and password', () => {

        cy.login(signup.email, signup.password)
        cy.get('.login-form > form > p').should("have.text", signup.incorrect)
    });


})


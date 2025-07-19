 describe('GR avtomation registrtion', () => {
   it('swori monacemebit registracia', () => {
     cy.visit('https://automationexercise.com/login')
     cy.get('.signup-form > h2').should("have.text", "New User Signup!")
     cy.get('[data-qa="signup-name"]').type("gio")
     cy.get('[data-qa="signup-email"]').type("Gio23@gmail.com")
     cy.get('[data-qa="signup-button"]').click()
     cy.get('#id_gender1').check()        /*radio baTonze check-ic musaobs da click-ic(cy.get('#id_gender1').click())*/
     cy.get('[data-qa="password"]').type("Giogio23#")
     cy.get('[data-qa="days"]').select(5)
     cy.get('[data-qa="months"]').select("April")
     cy.get('[data-qa="years"]').select("2018")
     cy.get('#newsletter').check()
     cy.get('#optin').check()
     cy.get('[data-qa="first_name"]').type('gio')
     cy.get('[data-qa="last_name"]').type("todua")
     cy.get('[data-qa="company"]').type("academy")
     cy.get('[data-qa="address"]').type("cademy1234")
     cy.get('[data-qa="address2"]').type("cademy1223")
     cy.get('[data-qa="country"]').select("Canada")
     cy.get('[data-qa="state"]').type("toronto")
     cy.get('[data-qa="city"]').type("to")
     cy.get('[data-qa="zipcode"]').type("2314")
     cy.get('[data-qa="mobile_number"]').type("1234141")
     cy.get('[data-qa="create-account"]').click()
     cy.get('b').should("have.text", "Account Created!")
     cy.get('[data-qa="continue-button"]').click()
     /*cy.get(':nth-child(10) > a').should("have.text", "Logged in as gio")*/
     cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
     cy.get('b').should("have.text", "Account Deleted!")
     cy.get('[data-qa="continue-button"]').click()
   })
 })   



 

describe('Test Case 2: Login User with correct email and password', () => {
  it('unda dalogindes swori iuzerit da parolit', () => {
    cy.visit('https://automationexercise.com/')
//     1. Launch browser

// 2. Navigate to url 'http://automationexercise.com'

// 3. Verify that home page is visible successfully

// 4. Click on 'Signup / Login' button
cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

// 5. Verify 'Login to your account' is visible
cy.get('.login-form > h2').should("have.text","Login to your account")

// 6. Enter correct email address and password
cy.get('[data-qa="login-email"]').type("gio23@gmail.com")
cy.get('[data-qa="login-password"]').type("Giogio23#")
// 7. Click 'login' button
cy.get('[data-qa="login-button"]').click()
// 8. Verify that 'Logged in as username' is visible
//cy.get(':nth-child(10) > a').should("have.text","Logged in as gio")
// 9. Click 'Delete Account' button
//cy.get('.shop-menu > .nav > :nth-child(5)').click()
// 10. Verify that 'ACCOUNT DELETED!' is visible
//cy.get('b').should("have.text", "Account Deleted!")
  })
})


describe('Test Case 2: Login User with correct email and password', () => {
  it('arunda dalogindes araswori iuzerit da parolit', () => {
    cy.visit('https://automationexercise.com/')

//4. Click on 'Signup / Login' button
cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
//5. Verify 'Login to your account' is visible
cy.get('.login-form > h2').should("have.text","Login to your account")
// 6. Enter incorrect email address and password
cy.get('[data-qa="login-email"]').type("Gio23@gmail.com")
cy.get('[data-qa="login-password"]').type("fddfd")
// 7. Click 'login' button
cy.get('[data-qa="login-button"]').click()
// 8. Verify error 'Your email or password is incorrect!' is visible
cy.get('.login-form > form > p').should("have.text","Your email or password is incorrect!")
  })
})


describe('Test Case 4: Logout User', () => {
  it('gamosvla', () => {
    cy.visit('https://automationexercise.com/')

 // 4. Click on 'Signup / Login' button
cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

 // 5. Verify 'Login to your account' is visible
cy.get('.login-form > h2').should("have.text","Login to your account")
 // 6. Enter correct email address and password
 cy.get('[data-qa="login-email"]').type("gio23@gmail.com")
cy.get('[data-qa="login-password"]').type("Giogio23#")
 // 7. Click 'login' button
cy.get('[data-qa="login-button"]').click()
// 8. Verify that 'Logged in as username' is visible
//cy.get(':nth-child(10) > a').should("have.text",'Logged in as gio')
// 9. Click 'Logout' button
cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
// 10. Verify that user is navigated to login page
  })
})

describe('Test Case 5: Register User with existing email', () => {
  it('igieve meili', () => {
    cy.visit('https://automationexercise.com/')

//  4. Click on 'Signup / Login' button
 cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
// 5. Verify 'New User Signup!' is visible
 cy.get('.signup-form > h2').should("have.text", "New User Signup!")
// 6. Enter name and already registered email address
cy.get('[data-qa="signup-name"]').type("gio")
 cy.get('[data-qa="signup-email"]').type("gio23@gmail.com")
// 7. Click 'Signup' button
cy.get('[data-qa="signup-button"]').click()
// 8. Verify error 'Email Address already exist!' is visible
cy.get('.signup-form > form > p').should("have.text",'Email Address already exist!')

  })
})
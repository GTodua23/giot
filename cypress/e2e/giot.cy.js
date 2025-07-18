/*describe('Loggin Command', () => {
    it('dasaloginebeli', () => {
        cy.visit('https://automationteststore.com')
        cy.get('#customer_menu_top > li > a').click()
        cy.get('#loginFrm_loginname').type('giot23')
        cy.get('#loginFrm_password').type('Giot23@')
        cy.get('#loginFrm > fieldset > .btn').click()
    })
})*/



describe('Loggin Command', () => {
    beforeEach("", () => {
        cy.visit('https://automationteststore.com');
        cy.login('giot23', 'Giot23@');

    });



    it('მომხმარებლის დეტალებს შეცვლა', () => {
        cy.get('.side_account_list > :nth-child(3) > a').click();
        cy.get('#AccountFrm_firstname').clear().type('Giorgi');
        cy.get('#AccountFrm_lastname').clear().type('Todua');
        cy.get('#AccountFrm_telephone').clear().type('54343');
        cy.get('#AccountFrm_fax').clear().type('1332');
        cy.get('.col-md-12 > .btn-orange').click();
        cy.get('.alert').should('contain', 'Success: Your account has been successfully updated');
        cy.get('.side_account_list > :nth-child(3) > a').click();

    });


    it('არსებული მისამართის შეცვლა ან ახალი მისამართის დამატება', () => {
        cy.get('.side_account_list > :nth-child(5) > a').click();
        cy.get(':nth-child(2) > table > tbody > tr > .pull-right > .btn').click();
        cy.get('#AddressFrm_address_1').clear().type('tbilis');
        cy.get('#AddressFrm_address_2').type('tbilisi');
        cy.get('#AddressFrm_city').clear().type('Tbilisi');
        cy.get('#AddressFrm_postcode').clear().type('4444');
        cy.get('.col-md-12 > .btn-orange').click();
        cy.get('.alert').should('contain', 'Your address has been successfully updated');
        cy.get('.col-md-12 > .btn-orange').click();
        cy.get('#AddressFrm_firstname').type('gio')
        cy.get('#AddressFrm_lastname').type('rgi')
        cy.get('#AddressFrm_address_1').type('tbilisi');
        cy.get('#AddressFrm_address_2').type('tbilisi');
        cy.get('#AddressFrm_city').type('tbilisi');
        cy.get('#AddressFrm_country_id').select('Georgia');
        cy.get('#AddressFrm_zone_id').select('Tbilisi');
        cy.get('#AddressFrm_postcode').type('3333');
        cy.get('[for="AddressFrm_default0"]');
        cy.get('.col-md-12 > .btn-orange').click();
        cy.get('.alert').should('contain', 'Your address has been successfully inserted');
    });


    it('პაროლის შეცვლა', () => {
        cy.get('.side_account_list > :nth-child(4) > a').click();
        cy.get('#PasswordFrm_current_password').type('Giot23@');
        cy.get('#PasswordFrm_password').type('Giot23@');
        cy.get('#PasswordFrm_confirm').type('Giot23@');
        cy.get('.col-md-12 > .btn-orange').click();
        cy.get('.alert').should('contain', 'Success: Your password has been successfully updated.');
        cy.get('.side_account_list > :nth-child(4) > a').click();

    });


})


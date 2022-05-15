/// <reference types="Cypress" />

it("click all links", () => {

    cy.visit("/")

    //namaste page
    cy.contains("Namasté").click()
    cy.location('pathname').should('eq', '/')

    //yoga session page
    cy.get(':nth-child(1) > a').click()
    cy.location('pathname').should('eq', '/poses')
    cy.go('back')

})

/*Go link*/
/*no lo encuentra*/
// it("user clicks Go button on home page", () => {

//     cy.visit('/');
//     cy.get('home-page').shadow().find("a").click();
    

// })


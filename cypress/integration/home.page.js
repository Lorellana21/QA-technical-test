/// <reference types="Cypress" />

/*Namaste link*/
it("user click Namaste link on home page", () => {

    // cy.get(':nth-child(2) > a') no lo encuentra

    cy.visit('/');
})

/*Yoga session link*/
it("user click Yoga session link on home page", () => {

    
    cy.get(':nth-child(1) > a');
    cy.wait(0);
    cy.visit("/poses");
})

/*Go link*/
/*no consigo seleccionarlo en cypress*/
// it("user clicks Go button on home page", () => {

//     cy.visit("/poses");
// })
// <reference types="Cypress" />

beforeEach(() => {

    cy.intercept('GET', 'https://lightning-yoga-api.herokuapp.com/yoga_poses', {fixture: './../../fixtures/poses.json'})

})

// it('user click on odd button to show only odd poses', () => {

//     cy.visit('/poses');
//     cy.get('#oddAction').click();
//     cy.wait(0);//
//     cy.get('#pose_2').should('not.exist');

// })

/*si recibo todas las poses*/

/*si recibo las poses que incluyen pierneas por ejemplo*/
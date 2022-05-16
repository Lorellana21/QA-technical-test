// <reference types="Cypress" />

beforeEach(() => {
  cy.intercept("GET", "https://lightning-yoga-api.herokuapp.com/yoga_poses", {
    fixture: "./../../fixtures/poses.json",
  });
});

/*si recibo todas las poses*/
it("I get all the items from api", () => {
  cy.visit("/poses");
  cy.request({
    method: "GET",
    url: "https://lightning-yoga-api.herokuapp.com/yoga_poses",
  }).then(({ body }) => {
    expect(body.items).to.have.length(48);
    expect(body.items[0].english_name).to.eq("Boat");
    expect(body.items.length).to.be.greaterThan(1);
    expect(body.items[0].english_name).to.be.a("string");
    expect(body.items[0].id).to.satisfy((num) => {
      return num > 0;
    });
  });
});

/*si recibo las poses que incluyen warrior*/
// it("user search with warrior text", () => {

//     cy.visit('/poses');
//     // cy.get('#searchText').type("Warrior");
//     cy.findByRole("input", { name: /Filter Input/i }).type("Warrior");
//     cy.findByRole("button", { name: /Search Poses/i }).click();
//     cy.wait(0);
//     cy.get("#pose_8").should("exist")

// })

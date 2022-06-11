/// <reference types="Cypress" />

describe("VanillaJS TodoMVC", () => {
  beforeEach(() => {
    cy.visit("https://todomvc.com/examples/vanillajs/#");
  });

  // funcionalidad de añadir un todo
  it("adds a single todo", () => {
    cy.get(".new-todo").type("perform the technical test{enter}");
    cy.get(".todo-list li").should("have.length", 1);
  });

  it("adds three todos", () => {
    cy.get(".new-todo").type("perform the technical test{enter}");
    cy.get(".new-todo").type("upload the repository to Github{enter}");
    cy.get(".new-todo").type("send email to Manu with link to repository{enter}");
    cy.get(".todo-list li").should("have.length", 3)
  });

  it("todos render the correct text within the app", () => {
    cy.get(".new-todo").type("perform the technical test{enter}");
    cy.get(".new-todo").type("upload the repository to Github{enter}");
    cy.get(".new-todo").type("send email to Manu with link to repository{enter}");
    cy.get(".todo-list li").eq(0).find("label").should("contain", "perform the technical test")
    cy.get(".todo-list li").eq(1).find("label").should("contain", "upload the repository to Github")
    cy.get(".todo-list li").eq(2).find("label").should("contain", "send email to Manu with link to repository")
  })

  it("does NOT display the footer or todo-list when there are no todos", () => {
    cy.get(".footer ul filters").should("not.exist");
    cy.get(".todo-list li").should("not.exist")
  })

  //funcionalidad de completar un to-do
  it("when the todo is completed, it gets a different class", () => {
    cy.get(".new-todo").type("perform the technical test{enter}");
    cy.get('.toggle').click();
    cy.get(".todo-list li.completed").should("exist");
  })

  //filtro de to-do's (activo / completado / todos)
  // it("check filters active / completed / all", () => {

  // })

});



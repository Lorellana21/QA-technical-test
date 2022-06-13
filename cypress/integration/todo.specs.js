/// <reference types="Cypress" />

describe("VanillaJS TodoMVC", () => {
  const TODO_ITEM_ONE = "perform the technical test";
  const TODO_ITEM_TWO = "upload the repository to Github";
  const TODO_ITEM_THREE = "send email to Manu with link to repository";

  beforeEach(() => {
    cy.visit("https://todomvc.com/examples/vanillajs/#");
  });

  //1
  it("adds a single todo", () => {
    cy.get(".new-todo").type(`${TODO_ITEM_ONE}{enter}`);
    cy.get(".todo-list li").should("have.length", 1);
  });

  //2
  it("adds three todos", () => {
    cy.get(".new-todo").type(`${TODO_ITEM_ONE}{enter}`);
    cy.get(".new-todo").type(`${TODO_ITEM_TWO}{enter}`);
    cy.get(".new-todo").type(`${TODO_ITEM_THREE}{enter}`);
    cy.get(".todo-list li").should("have.length", 3);
  });

  //3
  it("todos render the correct text within the app", () => {
    cy.get(".new-todo").type(`${TODO_ITEM_ONE}{enter}`);
    cy.get(".new-todo").type(`${TODO_ITEM_TWO}{enter}`);
    cy.get(".new-todo").type(`${TODO_ITEM_THREE}{enter}`);
    cy.get(".todo-list li").eq(0).find("label").should("contain", TODO_ITEM_ONE);
    cy.get(".todo-list li").eq(1).find("label").should("contain", TODO_ITEM_TWO);
    cy.get(".todo-list li").eq(2).find("label").should("contain", TODO_ITEM_THREE);
    cy.get(".todo-count").contains("3 items left");
  })

  //4
  it("the footer or todo-list does not display when there are no todos", () => {
    cy.get(".footer ul filters").should("not.exist");
    cy.get(".todo-list li").should("not.exist");
  })

  //5
  it("when the todo is completed, it is crossed out", () => {
    cy.get(".new-todo").type(`${TODO_ITEM_ONE}{enter}`);
    cy.get('.toggle').click();
    cy.get(".todo-list li.completed").should("exist");
  })

  //6
  it("check filters active / completed / all", () => {

    //6.1
    cy.get(".new-todo").type(`${TODO_ITEM_ONE}{enter}`);
    cy.get(".toggle").click();

    //6.2
    cy.get(".new-todo").type(`${TODO_ITEM_TWO}{enter}`);
    cy.get(".new-todo").type(`${TODO_ITEM_THREE}{enter}`);
    cy.contains("All").click();
    cy.get(".footer ul li a.selected").should("exist");
    cy.get(".todo-list li").should("have.length", 3);
    cy.get(".todo-count").contains("2 items left");
    
    //6.3
    cy.contains('Active').click();
    cy.get(".todo-list li").should("have.length", 2);

    //6.4
    cy.contains('Completed').click();
    cy.get(".todo-list li").should("have.length", 1);
    cy.get(".todo-count").contains("2 items left");

    //6.5
    cy.contains('Clear completed').click();
    cy.get(".todo-list li").should("have.length", 0);
    cy.get(".new-todo").should("be.visible");
  });
});

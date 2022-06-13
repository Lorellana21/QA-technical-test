/// <reference types="Cypress" />

describe("VanillaJS TodoMVC", () => {
  const TODO_ITEM_ONE = "perform the technical test";
  const TODO_ITEM_TWO = "upload the repository to Github";
  const TODO_ITEM_THREE = "send email to Manu with link to repository";

  beforeEach(() => {
    cy.visit("https://todomvc.com/examples/vanillajs/#");
  });

  // functionality of adding to-dos
  it("adds a single todo", () => {
    cy.get(".new-todo").type(`${TODO_ITEM_ONE}{enter}`);
    cy.get(".todo-list li").should("have.length", 1);
  });

  it("adds three todos", () => {
    cy.get(".new-todo").type(`${TODO_ITEM_ONE}{enter}`);
    cy.get(".new-todo").type(`${TODO_ITEM_TWO}{enter}`);
    cy.get(".new-todo").type(`${TODO_ITEM_THREE}{enter}`);
    cy.get(".todo-list li").should("have.length", 3)
  });

  it("todos render the correct text within the app", () => {
    cy.get(".new-todo").type(`${TODO_ITEM_ONE}{enter}`);
    cy.get(".new-todo").type(`${TODO_ITEM_TWO}{enter}`);
    cy.get(".new-todo").type(`${TODO_ITEM_THREE}{enter}`);
    cy.get(".todo-list li").eq(0).find("label").should("contain", TODO_ITEM_ONE)
    cy.get(".todo-list li").eq(1).find("label").should("contain", TODO_ITEM_TWO)
    cy.get(".todo-list li").eq(2).find("label").should("contain", TODO_ITEM_THREE)
    cy.get(".todo-count").contains("3 items left")
  })

  it("the footer or todo-list does not display when there are no todos", () => {
    cy.get(".footer ul filters").should("not.exist");
    cy.get(".todo-list li").should("not.exist")
  })

  //functionality of completing a to-do
  it("when the todo is completed, it is crossed out", () => {
    cy.get(".new-todo").type(`${TODO_ITEM_ONE}{enter}`);
    cy.get('.toggle').click();
    cy.get(".todo-list li.completed").should("exist");
  })

  //filters of to-do's (active / completed / all)
  it("check filters active / completed / all", () => {
    //añado una y la marco como completada
    cy.get(".new-todo").type(`${TODO_ITEM_ONE}{enter}`);
    cy.get(".toggle").click();
    //añado las otas dos
    cy.get(".new-todo").type(`${TODO_ITEM_TWO}{enter}`);
    cy.get(".new-todo").type(`${TODO_ITEM_THREE}{enter}`);
    //clico en All
    cy.contains("All").click();
    //un filtro debe tener la clase "selected"
    cy.get(".footer ul li a.selected").should("exist");
    //el contador debe tener "2 items left"
    cy.get(".todo-count").contains("2 items left");
    //la lista tiene 3 items
    cy.get(".todo-list li").should("have.length", 3);
    //le doy a "active"
    cy.contains('Active').click();
    //la lista ahora tiene 2 elementos
    cy.get(".todo-list li").should("have.length", 2);
    //selecciono "completed"
    cy.contains('Completed').click();
    //la lista ahora tiene un elemento
    cy.get(".todo-list li").should("have.length", 1);
    //el contador sigue teniendo 2 items
    cy.get(".todo-count").contains("2 items left");
    //clico en "clear completed"
    cy.contains('Clear completed').click();
    //aqui no hay lista, no hay items
    cy.get(".todo-list li").should("have.length", 0);
    //el input de añadir tarea debe ser visible
    cy.get(".new-todo").should("be.visible");


  });
});

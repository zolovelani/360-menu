/* eslint-disable no-undef */
/// <reference types="Cypress" />

context('My-Hello-world-starter', () => {
    before(()=>{cy.visit('http://localhost:8001')})
    it('it should have a button showing a plus symbol',() => {
        cy.get('button').should('contain', '+') 
    });
    it("it should have a button add to order", () => {
        cy.get("button").should("contain", "add to order")
      })
      it("Add note field", () => {
        cy.get(".form")
      })
      it("accepts radio input", () => {
        cy.get("input").should("class", "radio-input")
      })
    })
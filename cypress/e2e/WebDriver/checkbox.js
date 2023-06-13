/// <reference types="cypress" />
// npx cypress open
//./node_modules/.bin/cypress run headless mode
describe("Verify checkboxes", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({force: true});
    })
    it("Validate checkbox", () => {
        //  cy.get('#checkboxes > :nth-child(1) > input').check()
        //  cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked') //not.be.checked
        cy.get('#checkboxes > :nth-child(1) > input').as('o1')
      //  cy.get('@o1').check()
        cy.get('@o1').check().should('be.checked')
        cy.get('@o1').uncheck().should('not.be.checked')

    });
    it("Validate all checkboxes", () => {

        cy.get("input[type='checkbox']").check(["option-1","option-2","option-3","option-4"]).should('be.checked')

    });

})
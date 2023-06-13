/// <reference types="cypress" />
// npx cypress open
//./node_modules/.bin/cypress run headless mode
describe("Interact with dropdown", () => {
    it("Validate dropdown", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true})
        cy.get('#dropdowm-menu-1').select('C#')
        cy.get('#dropdowm-menu-2').select('JUnit').should('have.value', 'junit')
        cy.get('#dropdowm-menu-3').select('CSS')
        cy.get('#dropdowm-menu-1').select('java')

        cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven')
        cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG')
    });


})
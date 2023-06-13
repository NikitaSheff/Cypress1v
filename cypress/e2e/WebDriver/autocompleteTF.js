/// <reference types="cypress" />
// npx cypress open
//./node_modules/.bin/cypress run headless mode
describe("Interact with autocomplete", () => {
    it("Validate autocomplete search", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force: true})
        cy.get('#myInput').type('F').click()
        cy.get('#myInputautocomplete-list')
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
                let prod = $el.text();
                const productToSelect = 'Fondu'

                if (prod === productToSelect) {
                    $el.click()
                    cy.get('#submit-button').click()
                    cy.url().should('include', productToSelect)
                }
                //  cy.xpath('//div[@class=\'autocomplete-items\']')
            }).then(()=>{
            cy.get('#myInput').type('B').click()
            cy.get('#myInputautocomplete-list')
            cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
                let prod = $el.text();
                const productToSelect = 'Bacon'

                if (prod === productToSelect) {
                    $el.click()
                    cy.get('#submit-button').click()
                    cy.url().should('include', productToSelect)
                }
        })
    });


})
})
/// <reference types="cypress" />
// npx cypress open
//./node_modules/.bin/cypress run headless mode
describe("Handling iFrame & Modules", () => {
    it("Handel webDriver uni iFrame and modal", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#iframe').invoke('removeAttr', 'target').click({force: true})

        cy.get('#frame').then($iFrame => {
            let body = $iFrame.contents().find('body')
            cy.wrap(body).as('iframe')
        })
        cy.get('@iframe').find('#button-find-out-more').click()
        cy.get('@iframe').find('#myModal').as('modal')
        //myModal

        cy.get('@modal').should(($expectedText) => {
            let text = $expectedText.text()
            expect(text).to.include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras');

        })
        cy.get('@modal').contains('Close').click()

    });


})
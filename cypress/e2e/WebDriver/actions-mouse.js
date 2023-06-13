/// <reference types="cypress" />
// npx cypress open
//./node_modules/.bin/cypress run headless mode
describe("Interact with mouse", () => {
    it("Scroll to view", () => {
        cy.viewport(1280, 720)
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true})


    })
    it("Находится", () => {
        cy.viewport(1280, 720)
        cy.visit("http://www.webdriveruniversity.com/")
        cy.contains('')

    })
    it("Drag n drop item", () => {
        cy.viewport(1280, 720)
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true})
        cy.get('#draggable').trigger('mousedown', {which: 1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force: true})
    });
    it("Double mouse click", () => {
        cy.viewport(1280, 720)
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true})
        cy.get('#double-click').dblclick()
    })
    it.only("Click n hold element with mouse", () => {
        cy.viewport(1280, 720)
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true})
        cy.get('#click-box').trigger('mousedown', {which: 1}).then(($element) => {
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')
        })

    })
})
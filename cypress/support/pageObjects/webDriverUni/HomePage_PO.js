class HomePage_PO {
    visitHomePage(){
        cy.visit(Cypress.env("WDUHP"));
    }
    clickON_CU_BTN(){
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true})

    }
}

export default HomePage_PO

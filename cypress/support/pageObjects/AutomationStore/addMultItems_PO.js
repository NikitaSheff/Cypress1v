class addMultItems_PO {
    accessHP() {
        cy.visit(Cypress.env("ATS_URL"))
    }

    click_HairCare() {
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    }
}


export default addMultItems_PO

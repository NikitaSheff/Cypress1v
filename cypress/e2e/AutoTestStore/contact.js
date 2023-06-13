/// <reference types="Cypress" />

describe("Test Contact us form via AUTOMATION TEST Store", () => {
    before(function () {
        cy.fixture("userDetails").as("user")
    })

    it("Should be able to submit a successful ", () => {
        cy.visit("https://www.automationteststore.com/")
        cy.xpath("//a[contains(@href,'contact')]").click().then(function (linkText) {
            cy.log("Start test! Click on linq! Go! " + linkText.text())
        });
        // cy.get('#ContactUsFrm_first_name').type("Niki")
        cy.get("@user").then((user) => {
            cy.xpath("//input[@id='ContactUsFrm_first_name']").type(user.firstName)
            cy.get('#ContactUsFrm_email').type(user.email)
        })

        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
        cy.get('#ContactUsFrm_enquiry').type("what do you do?")
        cy.get('.col-md-6 > .btn').click()
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
        cy.log('Test has been completed!')
    });

})

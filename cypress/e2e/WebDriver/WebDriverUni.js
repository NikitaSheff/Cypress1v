/// <reference types="cypress" />
// npx cypress open
//./node_modules/.bin/cypress run headless mode
import HomePage_PO from "../../support/pageObjects/webDriverUni/HomePage_PO";
import ContactUs_PO from "../../support/pageObjects/webDriverUni/ContactUs_PO";

describe("Test Contact Us form via WebdriverUni", () => {
    const homepage_PO_const = new HomePage_PO();
    const contactUs_PO_const = new ContactUs_PO();


    before(function () {
        cy.fixture('example.json').then(function (data) {
            //this.data = data;
            globalThis.data = data   //*если сверху не работает
        })
    })
    beforeEach(function () {
        //cy.visit(Cypress.env("WDUHP"))
        // cy.navigateTo_WDUHP();

        homepage_PO_const.visitHomePage();
        homepage_PO_const.clickON_CU_BTN();
       // cy.pause()
        cy.wait(6000)

    })

    it("Should be able to submit a successful submission via contact us form", () => {

        //  cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true})
        //cy.get('#contact-us').click({force: true})
        cy.title().should("include", 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus');
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')


        /* cy.get('[name="first_name"]').type(data.firstName);
         cy.get('[name="last_name"]').type(data.lastName);
         cy.get('[name="email"]').type(data.email)
         cy.get('textarea.feedback-input').type("How can I learn Cypress?")
         cy.get('[type="submit"]').click();
         cy.get('h1').should('have.text', 'Thank You for your Message!') */

        //cy.webDriverUni_ContactUsFormSubmission(Cypress.env("first_name"), data.lastName, data.email, "very important text msg", 'h1', 'Thank You for your Message!')
        //если нужно пропустить действие - вставить " "


        contactUs_PO_const.contactusForm_submit(Cypress.env("first_name"), data.lastName, data.email, "very important text msg", 'h1', 'Thank You for your Message!')

    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {

        // cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true})


        cy.get('[name="first_name"]').type(data.firstName);
        cy.get('[name="last_name"]').type("blogs");
        cy.get('textarea.feedback-input').type("How can I learn Cypress?")
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required');
    });
})
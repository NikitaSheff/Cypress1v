/// <reference types="cypress" />
import addMultItems_PO from "../../support/pageObjects/AutomationStore/addMultItems_PO";
import autostore_HairCare_PO from "../../support/pageObjects/AutomationStore/autostore_HC_PO";
import cypress from "cypress";

describe("Add multiple items to basket", () => {
    const addMultItems_PO_const = new addMultItems_PO();
    const autostore_HairCare_PO_const = new autostore_HairCare_PO();

    before(function () {
        cy.fixture("products").then(function (data) {
            globalThis.data = data;
        })
    })

    beforeEach(function () {

       // Cypress.config('defaultCommandTimeout', 20000)
        addMultItems_PO_const.accessHP();
        addMultItems_PO_const.click_HairCare();
        //  cy.visit("https://www.automationteststore.com/");
        //   cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    })

    it("Add items to basket", () => {
       /* globalThis.data.productName.forEach(function (element) {
            cy.addProductToBasket(element)
        });
        cy.get('.dropdown-toggle > .fa').click()*/
        autostore_HairCare_PO_const.addHairCareProductsToBasket();

    });

})
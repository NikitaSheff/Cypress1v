/// <reference types="Cypress" />


describe("Inspect Automation Store Items", ()=>
{
    it("Click on the first item ", ()=>
    {
        cy.visit("https://www.automationteststore.com/");
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click();
    });
    it("Click on the first item text ", ()=>
    {
        cy.visit("https://www.automationteststore.com/");
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function (itemHeaderText)
        {
            console.log("Selected the following Item: " + itemHeaderText.text() )

        })
        cy.log('Finish test' )

    });
    it("Click on the first item index ", ()=>
    {
        cy.visit("https://www.automationteststore.com/");
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
    });


})

/// <reference types="Cypress" />
describe("Verify variables, cypress commands & JQuerry commands", () => {
  it("Navigating to specific product pages", () => {
    cy.visit("https://www.automationteststore.com/");
    /*  
    const makeupLink = cy
      .get("a[href*='product/category&path=']")
      .contains("Makeup");
    makeupLink.click();

    const skincare = cy
      .get("a[href*='product/category&path=']")
      .contains("Skincare");
    skincare.click();
    */
    cy.get("a[href*='product/category&path=']").contains("Makeup");
    cy.get("a[href*='product/category&path=']").contains("Skincare");
  });

  it("Navigating to specific product pages", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Makeup").click();

    //Following code will fail
    // const header = cy.get("h1 .maintext");
    // cy.log(header.text())

    cy.get("h1 .maintext").then(($headerText) => {
      const headerText = $headerText.text();
      cy.log("Found header text: " + headerText);
      expect(headerText).is.eq("Makeup");
    });

  });
  it("Validate properties of the CU page", () => {
    cy.visit("https://automationteststore.com/index.php?rt=content/contact");
    cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')

    cy.contains('#ContactUsFrm', 'Contact Us Form').then(text=>{
      const firstNameText = text.find('#field_11').text()
      expect(firstNameText).to.contains('First name')
      cy.get('#field_11').then(fnText=>{
        cy.log(fnText.text())
        cy.log(fnText)
      })
    })


  });


});

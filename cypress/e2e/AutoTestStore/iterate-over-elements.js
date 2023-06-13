describe("Iterate over elements all over project", () => {
    beforeEach(function () {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    })
    it("Log info", () => {
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            cy.log("Index: " + index + " : " + $el.text())
        })
    });
    it("Add products to busket", () => {
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            if ($el.text().includes("Curls to straight Shampoo")) {
                cy.wrap($el).click()
            }
        });
    });
    it("Add products to busket", () => {
        /* cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if ($el.text().includes("Curls to straight Shampoo")) {
          cy.wrap($el).click()
      }
  });*/
        cy.selectProduct('Curls to straight Shampoo');
    });
    it("Another specific product", () => {
        cy.selectProduct('Seaweed Conditioner');
    });
    it("Another specific product", () => {
        cy.selectProduct('Eau Parfumee au The Vert Shampoo');
    });
})
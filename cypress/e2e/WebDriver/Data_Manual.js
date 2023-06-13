/// <reference types="cypress" />
// npx cypress open
//./node_modules/.bin/cypress run headless mode
describe("Data tables", () => {
    beforeEach(() => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#data-table").invoke("removeAttr", "target").click({force: true});
    })
    it("Calculate the total ages", () => {
        let userDetails = [];
        let numb = 0

        cy.get('#thumbnail-1 td').each(($el, index, $list) => {
            userDetails[index] = $el.text();
        }).then(() => {
            let i;
            for (i = 0; i < userDetails.length; i++) {
                if (Number(userDetails[i])) {
                    numb += Number(userDetails[i])
                }
                // cy.log(userDetails[i]);
            }
            if (numb === 322) {
                cy.log('good')
            }
            expect(numb).to.eq(322)

        })
    })
    it("Validate selected user age based on Name", () => {
        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text()
            if (text.includes("Jones")){
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then(function (age){
                    const userAge = age.text()
                    expect(userAge).to.eq('27')
                })
            }
        })


    })


})
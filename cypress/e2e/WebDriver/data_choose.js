/// <reference types="cypress" />
// npx cypress open
//./node_modules/.bin/cypress run headless mode
describe("Date", () => {
    beforeEach(() => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#datepicker").invoke("removeAttr", "target").click({force: true});
    })
    it("Set up a date", () => {
        let date = new Date()
        date.setDate(date.getDate())  //current date day
        cy.log(date.getDate())

        let date2 = new Date()
        date2.setDate(date.getDate() + 5) //plus 5 days
        cy.log(date.getDate())

    })
    it("Get up a date", () => {
        let date = new Date()
        date.setDate(date.getDate() +1)

        let futureYear = date.getFullYear()
        let futureMonth = date.toLocaleString("default", {
            month: "long"
        })
        let futureDay = date.getDate()

        cy.log(futureYear + ' ' + futureMonth + ' ' + futureDay)
        cy.get('#datepicker').click()

        function selectDayMonth() {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                if (!currentDate.text().includes(futureYear)) {
                    cy.get('.next').first().click()
                    selectDayMonth();
                }
            }).then(() => {
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                    if (!currentDate.text().includes(futureMonth)) {
                        cy.get('.next').first().click()
                        // selectDayMonth();
                    }
                })
            })
        }
        function selectFutureDay() {
            cy.get('[class="day"]').contains(futureDay).click()

        }

        selectDayMonth();
        selectFutureDay();

    })


})
/// <reference types="Cypress" />

describe("Handle JS alerts", () => {
    it("Confirm JS alert contains the correct text ", () => {
        cy.visit("http://www.webdriveruniversity.com/");
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true})
        cy.get('#button1').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!')
        })
    });
    it("Validate JS confirm alert box", () => {
        cy.visit("http://www.webdriveruniversity.com/");
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true})
        cy.get('#button4').click()
        cy.on('window:confirm', (str) => {
            return true;
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!')
    });
    it("Validate JS don't confirm alert box (click cancel)", () => {
        cy.visit("http://www.webdriveruniversity.com/");
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true})
        cy.get('#button4').click()
        cy.on('window:confirm', (str) => {return false})
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
    });

    it("Validate JS confirm box stops", () => {
        cy.visit("http://www.webdriveruniversity.com/");
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true})
        let stub = cy.stub();
        cy.on('window:confirm', stub)
        cy.get('#button4').click().then(()=>{
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(()=>{
            return true;
        }).then(()=>{
            cy.get('#confirm-alert-text').contains('You pressed OK!')
        })

    });

})

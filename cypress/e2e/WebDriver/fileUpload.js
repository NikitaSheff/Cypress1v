/// <reference types="cypress" />
// npx cypress open
//./node_modules/.bin/cypress run headless mode

describe("File upload ", () => {
    beforeEach(() => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#file-upload").invoke("removeAttr", "target").click({force: true});
    })
    it("Attempt 1", () => {

        cy.fixture("lap.png", "base64").then(fileContent => {
            cy.get('#myFile').attachFile({
                    fileContent,
                    fileName: "lap.png",
                    mimeType: "image/png"
                },
                {
                    uploadType: "input"
                }
            )
        })
        cy.get('#submit-button').click()

           // cy.log('.command-message-text').first().contains('Your file has now been uploaded!')
    })


    it("Attempt 2", () => {

        cy.get('#myFile')
            .attachFile('lap.png');
        cy.get('#submit-button').click()
    })

    it("No file upload", () => {

        cy.get('#submit-button').click()

    })


})
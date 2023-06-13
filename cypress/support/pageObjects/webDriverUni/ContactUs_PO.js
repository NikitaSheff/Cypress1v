class ContactUs_PO {
    contactusForm_submit(firstName, lastName, email, comment, $selector, textToLocate) {
        cy.get('[name="first_name"]').type(firstName);
        cy.get('[name="last_name"]').type(lastName);
        cy.get('[name="email"]').type(email)
        cy.get('textarea.feedback-input').type(comment)
        cy.get('[type="submit"]').click();
        cy.screenshot();
        cy.get($selector).contains(textToLocate, {timeout: 6000})

        cy.screenshot("Made a CU form submit");

    }
}

export default ContactUs_PO

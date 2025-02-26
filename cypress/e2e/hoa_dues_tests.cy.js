/// <reference types="Cypress" />

describe('Home Insurance Tests', () => {
    beforeEach(() => {
        // Visit the mortgage calculator page
        cy.visit('https://www.zillow.com/mortgage-calculator/')
        cy.get('.gmmQEW')
        .click()
    })

    it('Test 1 - Default value for the "HOA dues" field verification', () => {
        cy.get('#monthlyHOA')
        .should('have.value', '0')
    })

    it('Test 2 - Valid input type for the "HOA dues" field (integer)', () => {
        // Get initial payment value
        cy.get('text[y="20"]')
            .should('exist')
            .invoke('text')
            .then((paymentDefault) => {
                // Update HOA dues value
                cy.get('#monthlyHOA')
                    .clear()
                    .type('100')
                    .blur()

                cy.wait(1000) // Wait for calculation

                // Verify HOA dues value updated
                cy.get('#monthlyHOA')
                    .should('have.value', '100')
                    .invoke('text')
                    .then((hoaDuesUpdated) => {
                        cy.log(`Updated HOA dues: ${hoaDuesUpdated}`)

                        // Verify payment updated
                        cy.get('text[y="20"]')
                            .invoke('text')
                            .then((paymentUpdated) => {
                                cy.log(`Default payment: ${paymentDefault}`)
                                cy.log(`Updated payment: ${paymentUpdated}`)
                                expect(paymentUpdated).not.to.eq(paymentDefault)
                            })
                    })
            })
    })  

    it('Test 3 - Invalid input type for the "HOA dues" field (letters) (Fails due to the bug)', () => {
        cy.get('#monthlyHOA')
            .clear()
            .type('abc')
        // Click away from the input field and wait for 1 sec
        cy.get('body').click(0, 0)

        // Validate the error message appears and has the expected text value
        cy.get('p[id^=__c11n_]')
        .should('be.visible')
        .and("have.text", "'abc' is not a valid number")

        // Doesn't return the passed value into the error message 
        // But using hardcoded HOA value, example:
        // input type: 'abc'
        // error message: "HOA is not a valid number"

    })
})
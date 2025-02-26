/// <reference types="Cypress" />

describe('Home Insurance Tests', () => {
    beforeEach(() => {
        // Visit the mortgage calculator page
        cy.visit('https://www.zillow.com/mortgage-calculator/')
        cy.get('.gmmQEW')
        .click()
    })

    it('Test 1 - Default value for the "Home insurance" field verification', () => {
        cy.get('#annualHomeownersInsurance')
        .should('have.value', '1,260')
    })

    it('Test 2 - Valid input type for the "Home insurance" field (integer)', () => {
        // Get initial payment value
        cy.get('text[y="20"]')
            .should('exist')
            .invoke('text')
            .then((paymentDefault) => {
                // Update insurance value
                cy.get('#annualHomeownersInsurance')
                    .clear()
                    .type('3000')
                    .blur()

                cy.wait(1000) // Wait for calculation

                // Verify insurance value updated
                cy.get('#annualHomeownersInsurance')
                    .should('have.value', '3,000')
                    .invoke('text')
                    .then((homeInsuranceUpdated) => {
                        cy.log(`Updated home insurance: ${homeInsuranceUpdated}`)

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

    it('Test 3 - Invalid input type for the "Home insurance" field (letters)', () => {
        cy.get('#annualHomeownersInsurance')
            .clear()
            .type('abc')
        // Click away from the input field and wait for 1 sec
        cy.get('body').click(0, 0)

        // Validate the error message appears and has the expected text value
        cy.get('p[id^=__c11n_]')
        .should('be.visible')
        .and("have.text", "'abc' is not a valid number")
    })
})
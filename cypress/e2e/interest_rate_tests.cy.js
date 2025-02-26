/// <reference types="Cypress" />

describe('Interest Rate Tests', () => {
    beforeEach(() => {
        // Visit the mortgage calculator page
        cy.visit('https://www.zillow.com/mortgage-calculator/')
    })

    it('Test 1 - Valid input type for the "Interest rate" field (integer)', () => {
        // Selector for the interest rate field
        cy.get('input[type="text"]').eq(3).as('rate')

        // Get initial payment value
        cy.get('text[y="20"]')
            .should('exist')
            .invoke('text')
            .then((your_payment_default) => {
                // Change interest rate
                cy.get('@rate')
                    .clear()
                    .type('50')
                    .blur()


                cy.wait(1000) // Wait for calculation

                // Compare values
                cy.get('text[y="20"]')
                    .invoke('text')
                    .then((your_payment_updated) => {
                        cy.log(`Default payment: ${your_payment_default}`)
                        cy.log(`Updated payment: ${your_payment_updated}`)
                        expect(your_payment_updated).not.to.eq(your_payment_default)
                    })
            })
    })

    it('Test 2 - Invalid input type for the "Interest rate" field (letters)', () => {

        // Find the interest rate field, clear the prepopulated value and type letters instead of numbers 
        cy.get('#rate')
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
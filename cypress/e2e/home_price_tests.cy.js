/// <reference types="Cypress" />

describe('Home Price Tests', () => {
    beforeEach(() => {
        // Visit the mortgage calculator page
        cy.visit('https://www.zillow.com/mortgage-calculator/')
    })

    it('Test 1 - Default value for the "Home price" field verification', () => {
        cy.get('input[type="text"]').first()
        .should('have.value', '300,000')
    })

    it('Test 2 - Invalid input type for the "Home price" field (letters)', () => {
        // Find the home price field, clear the prepopulated value and type letters instead of numbers 
        cy.get('#homePrice')
            .clear()
            .type('abc')
        // Click away from the input field and wait for 1 sec
        cy.get('body').click(0, 0)
        
        // Validate the error message appears and has the expected text value
        cy.get('p[id^=__c11n_]')
            .should('be.visible')
            .and("have.text", "'abc' is not a valid number")
    })

    it('Test 3 - Invalid input value (below $5,000)', () => {
        // Find the home price field, clear the prepopulated value and type invalid amount
        cy.get('#homePrice')
            .clear()
            .type('4999')
        // Click away from the input field and wait for 1 sec
        cy.get('body').click(0, 0)

        // Validate the error message appears and has the expected text value
        cy.get('p[id^=__c11n_]')
            .should('be.visible')
            .and("have.text", "Home price must be greater than or equal to 5,000")
    })

    it('Test 4 - Invalid input value (above 1,000,000,0000)', () => {
        // Find the home price field, clear the prepopulated value and type invalid amount
        cy.get('#homePrice')
            .clear()
            .type('10000000000')
        // Click away from the input field and wait for 1 sec
        cy.get('body').click(0, 0)

        // Validate the error message appears and has the expected text value
        cy.get('p[id^=__c11n_]')
            .should('be.visible')
            .and("have.text", "Home price must be less than or equal to 1,000,000,000")
    })

})
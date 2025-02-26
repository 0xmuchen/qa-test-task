/// <reference types="Cypress" />

describe('Property Tax Tests', () => {
    beforeEach(() => {
        // Visit the mortgage calculator page
        cy.visit('https://www.zillow.com/mortgage-calculator/')
        cy.get('.gmmQEW')
        .click()
    })

    it('Test 1 - Default value for the "Property tax" sub-fields verification', () => {
        cy.get('#form-3_propertyTaxRateAnnualAmount')
        .should('have.value', '3,600')

        cy.get('#form-3_propertyTaxRate')
        .should('have.value', '1.2')
    })

    it('Test 2 - Dynamic update of the "Property tax" dollar amount sub-field when the property tax percentage is changed', () => {
        // Find the property tax percentage sub-field, clear the prepopulated values and type new valid value
        cy.get('#form-3_propertyTaxRate')
            .clear()
            .type('20')
        // Click away from the input field and wait for 1 sec
        cy.get('body').click(0, 0)

        // Validate the dollar amount sub-field is updated with the correct value
        cy.get('#form-3_propertyTaxRateAnnualAmount')
        .should('have.value', '60,000')
    })

    it('Test 3 - Dynamic update of the "Property tax" percentage sub-field when the dollar amount of the property tax is changed', () => {
        // Find the property tax dollar amount sub-field, clear the prepopulated values and type new valid value
        cy.get('#form-3_propertyTaxRateAnnualAmount')
            .clear()
            .type('60000')
        // Click away from the input field and wait for 1 sec
        cy.get('body').click(0, 0)

        // Validate the percentage sub-field is updated with the correct value
        cy.get('#form-3_propertyTaxRate')
        .should('have.value', '20')
    })

    it('Test 4 - Invalid input type for the "Property tax" dollar amount sub-field (letters)', () => {
        // Find the property tax dollar amount sub-field, clear the prepopulated values and type invalid value
        cy.get('#form-3_propertyTaxRateAnnualAmount')
            .clear()
            .type('abc')
        // Click away from the input field and wait for 1 sec
        cy.get('body').click(0, 0)

        // Validate the error message appears and has the expected text value
        cy.get('p[id^=__c11n_]')
        .should('be.visible')
        .and("have.text", "'abc' is not a valid number")
    })

    it('Test 5 - Invalid input type for the "Property tax" percentage sub-field (letters)', () => {
        // Find the property tax percentage sub-field, clear the prepopulated values and type invalid value
        cy.get('#form-3_propertyTaxRate')
            .clear()
            .type('abc')
        // Click away from the input field and wait for 1 sec
        cy.get('body').click(0, 0)

        // Validate the error message appears and has the expected text value
        cy.get('p[id^=__c11n_]')
        .should('be.visible')
        .and("have.text", "'abc' is not a valid number")
    })  

    it('Test 6 - Verify that the "Your payment" value is updated when the "Property tax" value is updated with valid data', () => {
        // Get initial payment value
        cy.get('text[y="20"]')
            .should('exist')
            .invoke('text')
            .then((paymentDefault) => {
                // Find the property tax dollar amount sub-field, clear the prepopulated values and type valid value
                cy.get('#form-3_propertyTaxRateAnnualAmount')
                    .clear()
                    .type('60000')
                // Click away from the input field and wait for 1 sec
                cy.get('body').click(0, 0)

                cy.wait(1000) // Wait for calculation

                // Get and verify updated payment
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
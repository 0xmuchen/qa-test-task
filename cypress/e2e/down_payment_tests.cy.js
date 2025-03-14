/// <reference types="Cypress" />

describe('Down Payment Tests', () => {
    beforeEach(() => {
        // Visit the mortgage calculator page
        cy.visit('https://www.zillow.com/mortgage-calculator/')
    })

    it('Test 1 - Default value for the "Down payment" sub-fields verification', () => {
        cy.get('#form-3_downPayment')
        .should('have.value', '60,000')

        cy.get('#form-3_downPaymentPercent')
        .should('have.value', '20')
    })

    it('Test 2 - Dynamic update of the percentage sub-field when dollar amount of the down payment is changed ', () => {
        // Find the down payment dollar amount sub-field, clear the prepopulated values and type new valid value
        cy.get('#form-3_downPayment')
            .clear()
            .type('120000')
        // Click away from the input field and wait for 1 sec
        cy.get('body').click(0, 0)
        
        // Validate the percentage sub-field is updated with the correct value
        cy.get('#form-3_downPaymentPercent')
        .should('have.value', '40')
    })

    it('Test 3 - Dynamic update of the dollar amount sub-field when percentage of the down payment is changed ', () => {
        // Find the down payment percentage sub-field, clear the prepopulated values and type new valid value
        cy.get('#form-3_downPaymentPercent')
            .clear()
            .type('40')
        // Click away from the input field and wait for 1 sec
        cy.get('body').click(0, 0)

        // Validate the dollar amount sub-field is updated with the correct value
        cy.get('#form-3_downPayment')
        .should('have.value', '120,000')
    })


    it('Test 4 - Invalid input type for the "Down payment" dollar amount sub-field (letters)', () => {
        // Find the down payment dollar amount sub-field, clear the prepopulated values and type invalid value
        cy.get('#form-3_downPayment')
            .clear()
            .type('abc')
        // Click away from the input field and wait for 1 sec
        cy.get('body').click(0, 0)

        // Validate the error message appears and has the expected text value
        cy.get('p[id^=__c11n_]')
        .should('be.visible')
        .and("have.text", "'abc' is not a valid number")
    })

    it('Test 5 - Invalid input type for the "Down payment" percentage sub-field (letters)', () => {
        // Find the down payment percentage sub-field, clear the prepopulated values and type invalid value
        cy.get('#form-3_downPaymentPercent')
            .clear()
            .type('abc')
        // Click away from the input field and wait for 1 sec
        cy.get('body').click(0, 0)

        // Validate the error message appears and has the expected text value
        cy.get('p[id^=__c11n_]')
        .should('be.visible')
        .and("have.text", "'abc' is not a valid number")
    })  

    it('Test 6 - Dollar amount sub-field value that exceeds the Home price field value', () => {
        // Find the down payment dollar amount sub-field, clear the prepopulated values and type invalid value
        cy.get('#form-3_downPayment')
            .clear()
            .type('300001')
        // Click away from the input field and wait for 1 sec
        cy.get('body').click(0, 0)

        // Validate the error message appears and has the expected text value
        cy.get('p[id^=__c11n_]')
        .should('be.visible')
        .and("have.text", "The down payment amount must be less than the loan amount")
    })

    it('Test 7 - Percentage sub-field value that exceeds 100', () => {
        // Find the down payment percentage sub-field, clear the prepopulated values and type invalid value
        cy.get('#form-3_downPaymentPercent')
            .clear()
            .type('101')
        // Click away from the input field and wait for 1 sec
        cy.get('body').click(0, 0)

        // Validate the error message appears and has the expected text value
        cy.get('p[id^=__c11n_]')
        .should('be.visible')
        .and("have.text", "Down payment percent must be less than 100")
    })

    it('Test 8 - Verify that the "Your payment" value is updated when the "Down payment" value is updated with valid data', () => {
        // Get initial payment value
        cy.get('text[y="20"]')
            .should('exist')
            .invoke('text')
            .then((paymentDefault) => { 
                // Find the down payment dollar amount sub-field, clear the prepopulated values and type valid value
                cy.get('#form-3_downPayment')
                    .clear()
                    .type('120000')
                // Click away from the input field and wait for 1 sec
                cy.get('body').click(0, 0)

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
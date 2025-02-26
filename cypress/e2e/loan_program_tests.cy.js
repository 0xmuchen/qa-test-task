/// <reference types="Cypress" />

describe('Loan Program Tests', () => {
    beforeEach(() => {
        // Visit the mortgage calculator page
        cy.visit('https://www.zillow.com/mortgage-calculator/')
    })

    it('Test 1 - Default value for the "Loan program" field verification', () => {
        cy.get('#form-3_term')
        .should('have.value', 'Fixed30Year')
        .and('contain.text', '30 year fixed')
    })

    it('Test 2 - Selecting "15 year fixed" loan program option', () => {
        // Select and verify 15-year fixed
        cy.selectLoanProgram('15 year fixed')
        cy.get('#form-3_term')
            .should('have.value', 'Fixed15Year')
            .and('contain.text', '15 year fixed')
    })

    it('Test 3 - Selecting  "5-year ARM" loan program option', () => {
        // Select and verify 5-year ARM
        cy.selectLoanProgram('5-year ARM')
        cy.get('#form-3_term')
            .should('have.value', 'ARM5')
            .and('contain.text', '5-year ARM')
    })

    it('Test 4 - Verify that the "Interest rate" value is updated when loan program is changed', () => {
        // Get initial interest rate value
        cy.get('input[type="text"]').eq(3)
            .invoke('val')
            .then((initialRate) => {
                // Select 15-year fixed program
                cy.selectLoanProgram('15 year fixed')
                cy.wait(1000) // Wait for rate to update

                // Get and verify new rate after 15-year selection
                cy.get('input[type="text"]').eq(3)
                    .invoke('val')
                    .then((rate15Year) => {
                        expect(rate15Year).to.not.equal(initialRate)
                        cy.log(`Initial rate: ${initialRate}`)
                        cy.log(`15-year fixed rate: ${rate15Year}`)

                        // Select 5-year ARM program
                        cy.selectLoanProgram('5-year ARM')
                        cy.wait(1000) // Wait for rate to update

                        // Get and verify new rate after 5-year ARM selection
                        cy.get('input[type="text"]').eq(3)
                            .invoke('val')
                            .then((rate5YearARM) => {
                                // Verify against both previous rates
                                expect(rate5YearARM).to.not.equal(initialRate)
                                expect(rate5YearARM).to.not.equal(rate15Year)
                                cy.log(`5-year ARM rate: ${rate5YearARM}`)
                            })
                    })
            })
    })

    it('Test 5 - Verify that the "Your payment" value is updated when the "Loan program" option is changed', () => {
        // Get initial payment value
        cy.get('text[y="20"]')
            .should('exist')
            .invoke('text')
            .then((paymentDefault) => { 
                // Select 15-year fixed program
                cy.selectLoanProgram('15 year fixed')
                cy.wait(1000) // Wait for rate to update

                // Get and verify payment after 15-year selection
                cy.get('text[y="20"]')
                    .invoke('text')
                    .then((payment15Year) => {
                        cy.log(`Default payment: ${paymentDefault}`)
                        cy.log(`15-year fixed payment: ${payment15Year}`)
                        expect(payment15Year).not.to.eq(paymentDefault)

                        // Select 5-year ARM program
                        cy.selectLoanProgram('5-year ARM')
                        cy.wait(1000) // Wait for rate to update

                        // Get and verify payment after 5-year ARM selection
                        cy.get('text[y="20"]')
                            .invoke('text')
                            .then((payment5YearARM) => {
                                cy.log(`5-year ARM payment: ${payment5YearARM}`)
                                expect(payment5YearARM).not.to.eq(paymentDefault)
                                expect(payment5YearARM).not.to.eq(payment15Year)
                            })
                    })
            })
    })
})
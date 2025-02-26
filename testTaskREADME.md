# Zillow Mortgage Calculator Test Automation

## Project Structure

### Manual Testing Documentation
1. **Test Plan**
   - Location: `docs/test-plan.md` 
   - Description: initial file with high level structure, with the link for detailed test suite in Google Sheets format

  1.1 **Test Suite Google Sheet**
   - Access: https://docs.google.com/spreadsheets/d/1zaz--g2n3halESVdbdcx-ewdi2E7kf1twFDOkpiMoCg/edit?usp=sharing
   - Structure:
     - ID of the test case column
     - Test Description / Steps column
     - Expected result column
     - Desktop status column
     - General status column (needed for formulas calculations)
     - Mobile status column
     - Comments section
     - Automation status for each case column
     - Overall test case status distribution visualization (O10 - S10 location)
     - Executed test cases status ratio visualization (O44 - S44 location)



2. **Bugs**
   - Location: `/docs/bugs` directory
   - Contents:
     - Bug reports

3. **Questions**
   - Location: `/docs/questions` directory // but at least one question is also asked inside of the bug report file  (interestRateUpdateIssue.md)

4. **Recommendations**
   - Location: `/docs/recommendations` directory



### Automation Framework

#### Environment Setup Note
Recommendation: Add `.DS_Store` to `.gitignore` to maintain clean repository structure

## Test Coverage Overview

### Core Functionality
1. **Calculator Inputs**
   - Home price validation
   - Interest rate handling
   - Down payment calculations
   - Property tax computations
   - HOA dues processing
   - Home insurance validation

2. **Program Features**
   - Loan program selection
   - Payment calculations
   - Field synchronization

### Test Categories Implementation

1. **Acceptance Tests**
   - Default values verification
   - Input field validations
   - Real-time calculations

2. **End-to-End Tests**
   - Multi-field payment updates
   - Loan program interest rate sync
   - Down payment calculations

3. **Negative Tests**
   - Invalid input handling
   - Boundary testing
   - Error messaging


### Project Structure
```
cypress/e2e/
├── loan_program_tests.cy.js
├── interest_rate_tests.cy.js
├── home_price_tests.cy.js
├── down_payment_tests.cy.js
├── property_tax_tests.cy.js
├── home_insurance_tests.cy.js
└── hoa_dues_tests.cy.js
```

### Custom Commands
- `selectLoanProgram`: Standardized loan program selection utility
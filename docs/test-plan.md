# Test Plan: Zillow Mortgage Calculator
Document Version: 1.0
Last Updated: 2025-02-26

## 1. Test Plan Identifier
ZLMC-TP-2024-01

## 2. Introduction
### 2.1 Purpose
Testing of the Zillow Mortgage Calculator functionality, focusing on all components and their interactions.

### 2.2 Scope
#### In Scope:
- Calculator functionality
- Data presentation components
- Advanced options
- External integrations
- UI/UX elements

#### Out of Scope:
- Backend API testing
- Database testing
- Security testing
- Performance testing

## 3. Test Items
1. Calculator Container:
   - Home price field
   - Down payment field
   - Loan program selector
   - Interest rate field
   - Advanced options section

2. Results Presentation:
   - Payment breakdown
   - Schedule visualization
   - Full report generation
   - Share functionality

## 4. Features to be Tested
### 4.1 High Priority
1. Core Calculation Features:
   - Home price validation (5K-1B range)
   - Down payment calculation
   - Interest rate updates
   - Monthly payment calculation

2. Data Dependencies:
   - Loan program impact on interest rates
   - Down payment impact on PMI
   - Advanced options effect on total

### 4.2 Medium Priority
1. UI Components:
   - Help tooltips
   - Error messages
   - Field formatting

2. Integration Features:
   - Report generation
   - Share functionality

## 5. Features not to be Tested
1. Backend services
2. Database operations
3. Security features
4. Performance metrics

## 6. Initial test list with test types
Here's the updated test plan categorization based on your test cases:

### 6.1 Acceptance Tests (8 tests)
1. Verification of the calculation and display for default values on first visit / page reload
2. Verification of the calculation and display for default values for "15 year fixed" loan program
3. Verification of the calculation and display for default values for "5-year ARM" loan program
4. Verification of the user ability to update "Home price" field with valid data
5. Verification of the user ability to update "Down payment" field with valid data
6. Verification of the user ability to update interest rate with valid data
7. Verification of the user ability to update "Property tax" field with valid data
8. Verification of the user ability to update "HOA dues" field with valid data

### 6.2 End-to-End Tests (1 tests)
1. Verification of the full report generation flow


### 6.3 Negative Tests (9 tests)
1. Verification of the invalid input handling for "Home price" field (data type)
2. Verification of the invalid input handling for "Home price" field (amount)
3. Verification of the invalid input handling for "Down payment" field (data type)
4. Verification of the invalid "Down payment" amount validation
5. Verification of the invalid input handling for interest rate
6. Verification of the invalid input handling for "Property tax" field (data type)
7. Verification of the invalid "Property tax" amount validation
8. Verification of the invalid input handling for "HOA dues" field (data type)
9. Verification of the invalid "HOA dues" amount validation

### 6.4 Integration Tests (4 tests)
1. Verification of the "Down payment" percentage/amount sync (valid data)
2. Verification of the "Down payment" percentage/amount sync (invalid data)
3. Verification of the "Property tax" percentage/amount sync (valid data)
4. Verification of the "Property tax" percentage/amount sync (invalid data)
5. Verification of the "Get a more accurate estimate" redirection

### 6.5 UI/UX Tests (27 tests)
1. Verification of the links and FAQ functionality
2. Verification of the modal interactions for all help buttons (Interest rate, Property tax, Home insurance, HOA dues)
3. Verification of the modal closing functionality
4. Verification of the calculator disclaimer functionality
5. Verification of the PMI checkbox functionality and modal
6. Verification of the taxes/insurance checkbox functionality and modal
7. Verification of the schedule presentation display

### 6.6 Social Integration Tests (4 tests)
1. Verification of the Facebook sharing
2. Verification of the Twitter sharing
3. Verification of the LinkedIn sharing
4. Verification of the email sharing


## 7. Approach
### 7.1 Testing Types
1. Functional Testing
2. Integration Testing
3. UI/UX Testing
4. Cross-browser Testing
5. Cross-device Testing

### 7.2 Tools List
1. Test Management System - Google Sheets
2. Browser Testing Tools - Google Dev Tools
3. Test Automation Framework - Cypress

### 7.3 Test Levels
1. Component Testing
2. Integration Testing
3. System Testing


## 8. Item Pass/Fail Criteria
### 8.1 Pass Criteria
1. All mandatory fields function correctly
2. Calculations are accurate
3. Data presentation is correct
4. Error handling works as specified
5. Help information is accessible

### 8.2 Fail Criteria
1. Incorrect calculations
2. Missing corresponding error messages
3. Invalid data acceptance
4. Broken field dependencies

## 9. Suspension Criteria
1. Critical calculation errors
2. Major UI malfunction
3. Data persistence failure

## 10. Test Deliverables
### 10.1 Before Testing
1. Test Plan
2. Test Cases

### 10.2 During Testing
1. Defect Reports


### 10.3 After Testing
1. Test Summary Report
2. Recommendations List

## 11. Testing Tasks
1. Test Environment Setup
2. Test Case Development
3. Test Execution
4. Defect Reporting
5. Test Result Analysis

## 12. Environmental Needs
### 12.1 Hardware
- Desktop/Laptop computers
- Mobile devices
- Different screen resolutions

### 12.2 Software
- Browsers: Chrome, Safari, Firefox
- Devices: Desktop, Mobile (Android, IOS)



## 13. Risks and Contingencies
### 13.1 Risks
1. Complex calculation validations
2. Multiple field dependencies

### 14.2 Mitigation Strategies
1. Detailed test data preparation
2. Comprehensive regression testing

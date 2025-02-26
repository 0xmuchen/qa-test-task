# Interest rate input field automated test cases - Cypress

## Project Description

This project is part of an interview assignment designed to demonstrate test automation skills.
 
1. Fork this repo into a PRIVATE GitHub repository. Add qa@hometap.com as a collaborator to your repo.
2. Automate at least two of your tests from your test plan document.
3. Fix the outstanding broken test in the repo.
4. Provide a link to an MR containing your test automation and test fix.
5. Anyone with access to your code should be able to run it and have the tests run successfully. 
6. Tests should interact with the UI.

## How to run this project

### Prerequisites to run the tests: 
System requirements - refer to the [official Cypress Documentation](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements) (make sure you have Node.js installed)

### Setup 

1. Fork the repo into a PRIVATE GitHub repository.
2. Clone the repo to your local machine and navigate to your folder

After forking this project in `Github`, run these commands:

```bash
## clone this repo locally
git clone <your project name>

## navigate to your folder
cd /your/project/path
```

3. Install Cypress - follow the [official documentation instructions ](https://docs.cypress.io/guides/getting-started/installing-cypress#Installing)

Example command for installing Cypress with `npm` (you can use other ways)

```bash
## install Cypress
npm install cypress --save-dev
```

4. Open Cypress - follow the [official documentation](https://docs.cypress.io/guides/getting-started/installing-cypress#Installing)

Example command for opening Cypress with `npm` (you can use other ways)
   
```bash
## open Cypress from your project root using
npx cypress open
```
5. In Cypress IDE choose "E2E Testing"
6. Choose your browser -> Click on "Start E2E Testing"
7. Click on `interest_rate_tests.cy.js` -> the tests will run (and hopefully pass)

P.S. Alternatively, you can run the tests in the terminal using `npx cypress run` instead of steps 4-7.
For more details on using the command line refer to the [official documentation](https://docs.cypress.io/guides/guides/command-line#cypress-run). 

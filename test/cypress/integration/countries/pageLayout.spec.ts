import mocks from "../actions/mocks";

describe('Countries Page Content Layout', () => {

  beforeEach(() => {
    mocks.getAllCountries();
    cy.visit('http://localhost:3000/');
  })


  it('Should render static components properly', () => {

    cy.location('href').should('contain', 'countries');

    cy.get('[data-test="wrapper:header"]')
      .should('exist');
  
    cy.get('[data-test="element:header:where-in-the-world-?"]')
      .should('exist');
  
    cy.get('[data-test="element:header:change-theme"]')
      .should('exist');
  
    cy.get('[data-test="element:header:change-theme"]')
      .within(() =>  cy.get('svg').should('exist'));
  
    cy.get('[data-test="select:filter-dropdown:regions"]')
      .should('exist');
    cy.get('[data-test="input:search-box:country-search"]')
      .should('exist');
  })

  it('Should render countries', () => {

    cy.get('[data-test="wrapper:header"]')
      .should('exist');
  
    cy.get('[data-test="wrapper:card:Rwanda"]')
      .should('exist');

    cy.get('[data-test="wrapper:card:Bulgaria"]')
      .should('exist');

    cy.get('[data-test="wrapper:card:Dominica"]')
      .should('exist');
  })
})
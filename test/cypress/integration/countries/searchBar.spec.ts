import mocks from "../actions/mocks";

describe('Countries Page Search Bar', () => {

  beforeEach(() => {
    mocks.getAllCountries();
    cy.visit('http://localhost:3000/');
  })

  it('Should filter countries by region', () => {

    cy.location('href').should('contain', 'countries');

    cy.get('[data-test="select:filter-dropdown:regions"]')
      .within(() => {
        cy.get('[data-test="option:filter-dropdown:Europe"]')
          .should('exist');
        cy.get('[data-test="option:filter-dropdown:Americas"]')
          .should('exist');
        cy.get('[data-test="option:filter-dropdown:Africa"]')
          .should('exist');
      })

    cy.get('[data-test="select:filter-dropdown:regions"]')
      .select('Africa');
  
    cy.get('[data-test="wrapper:card:Rwanda"]')
      .should('exist');

    cy.get('[data-test="wrapper:card:Bulgaria"]')
      .should('not.exist');

    cy.get('[data-test="wrapper:card:Dominica"]')
      .should('not.exist');
  })

  it('Should search countries', () => {

    mocks.searchByName()
    cy.get('[data-test="input:search-box:country-search"]')
      .type('b');
    
    cy.get('[data-test="error:search-box:country-search"]')
      .should('be.visible');
    
    cy.get('[data-test="input:search-box:country-search"]')
      .type('ul');

    cy.wait('@request:searchByName');

    cy.get('[data-test="wrapper:card:Rwanda"]')
      .should('not.exist');

    cy.get('[data-test="wrapper:card:Bulgaria"]')
      .should('exist');

    cy.get('[data-test="wrapper:card:Dominica"]')
      .should('not.exist');

    cy.get('[data-test="select:filter-dropdown:regions"]')
      .within(() => {
        cy.get('[data-test="option:filter-dropdown:Europe"]')
          .should('exist');
        cy.get('[data-test="option:filter-dropdown:Americas"]')
          .should('not.exist');
        cy.get('[data-test="option:filter-dropdown:Africa"]')
          .should('not.exist');
      })
  })
})
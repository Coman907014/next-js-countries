import mocks from "../actions/mocks";

describe('Country Details - Neigbours Search Functionality', () => {

  beforeEach(() => {
    mocks.getAllCountries();
    mocks.getCountryDetails('bgr');
    // @TODO: Route should be coming from enum already implemented in app.
    cy.visit('http://localhost:3000/country/bgr');
  })

  it('Should filter countries by region', () => {

    cy.location('href').should('contain', 'country/bgr');
    
    cy.get('[data-test="title:country:Bulgaria"]')
      .should('exist');

    mocks.getCountryDetails('grc', true)

    cy.get(`[data-test='text:neighbouring-countries:GRC']`)
    .click();

    cy.location('href').should('contain', 'country/grc');

    cy.get('[data-test="title:country:Greece"]')
      .should('exist');
    
  })
})
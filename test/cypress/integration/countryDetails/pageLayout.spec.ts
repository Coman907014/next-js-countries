import mocks from "../actions/mocks";

describe('Country Details - Page Layout', () => {

  beforeEach(() => {
    mocks.getCountryDetails('bgr')
    // @TODO: Route should be coming from enum already implemented in app.
    cy.visit('http://localhost:3000/country/bgr');
  })

  it('Should render static content', () => {

    cy.location('href').should('contain', 'country/bgr');
    
    cy.get('[data-test="button:country:back"]')
      .should('exist');
    
    cy.get('[data-test="image:country-flag:Bulgaria"]')
      .should('exist');
    
    cy.get('[data-test="title:country:Bulgaria"]')
      .should('exist');

    cy.get('[data-test="wrapper:card-list:native-name"]')
      .should('exist');
    
    cy.get('[data-test="wrapper:card-list:population"]')
      .should('exist');
    
    cy.get('[data-test="wrapper:card-list:region"]')
      .should('exist');
    
    cy.get('[data-test="wrapper:card-list:sub-region"]')
      .should('exist');
    
    cy.get('[data-test="wrapper:card-list:top-level-domain"]')
      .should('exist');
    
    cy.get('[data-test="wrapper:card-list:currencies"]')
      .should('exist');
    
    cy.get('[data-test="wrapper:card-list:languages"]')
      .should('exist');

    cy.get(`[data-test='text:neighbouring-countries:GRC']`)
      .should('exist');
    
    cy.get(`[data-test='text:neighbouring-countries:MKD']`)
      .should('exist');
    
    cy.get(`[data-test='text:neighbouring-countries:ROU']`)
      .should('exist');
    
    cy.get(`[data-test='text:neighbouring-countries:SRB']`)
      .should('exist');
    
    cy.get(`[data-test='text:neighbouring-countries:TUR']`)
      .should('exist');

  })

  it('Should go back to first page on back button click', () => {

    cy.location('href').should('contain', 'country/bgr');
    
    mocks.getAllCountries();
    
    cy.get('[data-test="button:country:back"]')
      .click()
  
    cy.location('href').should('not.contain', 'country/bgr');
  })
})
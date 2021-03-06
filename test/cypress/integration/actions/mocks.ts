import { Country } from '../../../../src/models/Country';
import defaultCountries from '../../fixtures/defaultCountries';
import detailedCountry from '../../fixtures/detailedCountry';
import detailedCountry2 from '../../fixtures/detailedCountry2';

const mocks = {
  getAllCountries: () => {
    cy.task('clearNock');
    cy.task('nock', {
      hostname: 'https://restcountries.com/',
      method: 'GET',
      path: '/v2/all',
      statusCode: 200,
      // @TODO:
      // Should be more abstract
      // When multiple responses are need, add body dynamically.
      body: defaultCountries.data
    })
  },
  searchByName: () => {
    cy.fixture('./countrySearchResult.json')
      .then((data: Country[]) => {
        cy.intercept('GET', '**/api/name/**', data)
          .as('request:searchByName')
      })
  },
  getCountryDetails: (alpha3: string, isSecond?: boolean) => {

    cy.task('clearNock');
    cy.task('nock', {
      hostname: 'https://restcountries.com',
      method: 'GET',
      path: `/v2/alpha/${alpha3}`,
      statusCode: 200,
      // @TODO:
      // Should be more abstract
      // When multiple responses are need, add body dynamically.
      body: isSecond ? detailedCountry2 : detailedCountry
    })
  }
}

export default mocks;
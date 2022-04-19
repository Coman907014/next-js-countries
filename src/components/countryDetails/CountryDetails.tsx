import React, { FunctionComponent } from "react";
import { Country } from "../../models/Country";
import Card from "../card/Card";

interface CountryDetailsProps {
  country: Country
}

const CountryDetails: FunctionComponent<CountryDetailsProps> = ({ country }) => {
  return (
    <>
      <Card
        style={{ width: 'auto' }}          
        body={{
          ['native-name']: country.nativeName,
          population: new Intl.NumberFormat('en-US').format(country.population),
          region: country.region,
          ['sub-region']: country.subregion
        }}
      />
      <Card
        style={{ width: 'auto' }}          
        body={{
          ['top-level-domain']: country.nativeName,
          currencies: country.currencies.map(currency => currency.name).join(', '),
          languages: country.languages.map(currency => currency.name).join(', '),
        }}
      />
    </>
  )
}

export default CountryDetails;
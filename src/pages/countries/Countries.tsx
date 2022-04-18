import React, { FunctionComponent, useCallback } from "react";
import { useRouter } from 'next/router'
import Card from "../../components/card/Card";
import { Country } from "../../models/Country";

import { CountriesWrapper } from "./style";

interface CountriesProps {
  countries: Country[]
}

const CountriesPageComponent: FunctionComponent<CountriesProps> = ({ countries }) => {
  const router = useRouter();

  const handleCountryClick = useCallback((countryName) => {
    router.push(`country/${countryName.toLowerCase()}`)
  }, [])

  return (
    <CountriesWrapper>
      {
        countries.map(country => {
         const { name, flag, population, region, capital, alpha3Code } = country;
          return (
            <Card
              key={ alpha3Code }
              cardKey={ alpha3Code }
              title={ name }
              image={ flag }
              style={{ shadow: true }}
              onClick={ handleCountryClick }
              body={{
                population,
                region,
                capital
              }}
            />
          )
        })
      }
    </CountriesWrapper>
  )
}

export default CountriesPageComponent;
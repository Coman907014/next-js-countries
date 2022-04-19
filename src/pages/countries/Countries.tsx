import React, { FunctionComponent, useCallback, useState } from "react";
import { useRouter } from 'next/router'
import Card from "../../components/card/Card";
import { Country } from "../../models/Country";

import { CountriesWrapper } from "./style";
import FilterDropdown from "../../components/filterDropdown/FilterDropdown";

interface CountriesProps {
  countries: Country[]
}

const CountriesPageComponent: FunctionComponent<CountriesProps> = ({ countries }) => {
  const [filteredCountries, setFilteredCountries] = useState<Country[] | null>(null);
  const router = useRouter();

  const allRegions: string[] = countries.map((country: Country) => country.region);
  console.log('allRegions', [...new Set(allRegions)]);

  const handleCountryClick = useCallback((countryName) => {
    router.push({
      pathname: `country/[uid]`,
      query: { uid: countryName.toLowerCase() }
    })
  }, []);

  const handleRegionSelection = useCallback((selectedRegion: string) => {
    // @TODO:
    // Keep close to O/C principle
    // Two ifs with returns and end return are better than and if with two elses
    if(!selectedRegion.length) {
      return setFilteredCountries(null);
    };
    const foundCountries: Country[] = countries.filter(country => country.region === selectedRegion);

    if(!foundCountries.length) {
      // It's impossible, as the regions come from the countries obj[].
      // But, for a better UX, we show all countries when none is found.
      return setFilteredCountries(countries);
    }
    
    return setFilteredCountries(foundCountries);
  
  }, [countries]);

  return (
    <>
    {/*
      @TODO: Object.values() was added so we don't deconstruct the Set
      Compiler doesn't like it. Should to some tweaking to tsconfig and remove the hack.
    */}
    <FilterDropdown
      options={['', ...Object.values(new Set(allRegions))]}
      dataTest="regions"
      onOptionSelect={ handleRegionSelection }
    />
    <CountriesWrapper>
      {
        (filteredCountries || countries).map(country => {
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
                population: new Intl.NumberFormat('en-US').format(population),
                region,
                capital
              }}
            />
          )
        })
      }
    </CountriesWrapper>
    </>
  )
}

export default CountriesPageComponent;
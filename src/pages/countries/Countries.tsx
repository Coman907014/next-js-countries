import React, { FunctionComponent, useCallback, useState } from "react";
import { useRouter } from 'next/router'
import Card from "../../components/card/Card";
import { Country } from "../../models/Country";
import countriesApi from "../../api/countries";

import { CountriesWrapper, SearchAndFilterWrapper } from "./style";
import SearchConsole from "../../components/searchConsole/SearchConsole";

interface CountriesProps {
  countries: Country[]
}

const CountriesPageComponent: FunctionComponent<CountriesProps> = ({ countries }) => {
  const [filteredCountries, setFilteredCountries] = useState<Country[] | null>(null);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const router = useRouter();

  const currentCountries = filteredCountries || countries;
  // @TODO:
  // Could extract this and found countries filtering into an array service
  // Even so, I think that would be over-engineering
  // DRY principle is good as long as it doesn't overcomplicate things
  // DRY vs. Readability balance is important.
  const allRegions: string[] = currentCountries.map((country: Country) => country.region);

  const handleCountryClick = useCallback((countryName) => {
    router.push({
      // @TODO: Create routes enum for easier maintainability
      pathname: `country/[uid]`,
      query: { uid: countryName.toLowerCase() }
    })
  }, [router]);

  const handleRegionSelection = useCallback((selectedRegion: string) => {

    if(!selectedRegion.length) {
      setSearchTerm('');
      setFilteredCountries(null);
      return;
    };

    const foundCountries: Country[] = currentCountries.filter(country => country.region === selectedRegion);
    
    return setFilteredCountries(foundCountries);
  
  }, [currentCountries]);

  const handleCountrySearch = useCallback( async (newSearchTerm: string) => {
    // @TODO: Add debounce!
    setSearchError(null);
    setSearchTerm(newSearchTerm);

    if(newSearchTerm.length < 3) {
      return setSearchError('Please, add at least 3 characters.')
    };
    await countriesApi
      .getByNameAPI(newSearchTerm)
      .then((data) => setFilteredCountries(data.data as Country[]))
  }, [])

  return (
    <>
      <SearchAndFilterWrapper>
        <SearchConsole
          searchBox={{
            inputPlaceholder:"Search for a country",
            inputName: "country-search",
            onChange:handleCountrySearch,
            error: searchError,
            value: searchTerm
          }}
          filter={{
            // @TODO:
            // Compiler doesn't like Set deconstruction. Should do some tweaking to tsconfig.
            // @ts-ignore
            options: ['', ...new Set(allRegions)],
            dataTest: "regions",
            onOptionSelect: handleRegionSelection
          }}
        />
      </SearchAndFilterWrapper>
      <CountriesWrapper>
        {
          // @TODO: Should extract this into a new, standalone, component.
          // Readability ++
          currentCountries.map(country => {
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
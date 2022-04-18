import React, { FunctionComponent } from "react"
import CountryDetails from "../../components/countryDetails/CountryDetails"
import NeighbouringCountries from "../../components/neighbouringCountries/NeighbouringCountries"
import { Country } from "../../models/Country"
import { CountryFlag, CountryWrapper, Content, CountryTitle } from "./style"

interface CountryPageComponentProps {
  country: Country
}

const CountryPageComponent: FunctionComponent<CountryPageComponentProps> = ({ country }) => {

  return (
    <CountryWrapper data-test="asdsa">
      <Content>
        <CountryFlag src={ country?.flag } />
      </Content>
      <Content>
        <CountryTitle>
          { country?.name }
        </CountryTitle>
        {
          country &&
          <Content flexDirection="row">
            <CountryDetails country={ country }/>
          </Content>
        }
        <Content>
          {
            country &&
              <NeighbouringCountries borders={ country.borders } />
          }
        </Content>
      </Content>
    </CountryWrapper>
  )
}

export default CountryPageComponent;
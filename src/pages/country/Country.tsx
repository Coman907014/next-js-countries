import { useRouter } from "next/router"
import React, { FunctionComponent, useCallback } from "react"
import CountryDetails from "../../components/countryDetails/CountryDetails"
import NeighbouringCountries from "../../components/neighbouringCountries/NeighbouringCountries"
import { Country } from "../../models/Country"
import ArrowBack from "../../theme/icons/ArrowBack"
import {
  CountryFlag,
  CountryWrapper,
  Content,
  CountryTitle,
  BackButton,
  ButtonWrapper
} from "./style"

interface CountryPageComponentProps {
  country: Country
}

const CountryPageComponent: FunctionComponent<CountryPageComponentProps> = ({ country }) => {
  const router = useRouter();

  const handleBackButtonClick = useCallback(() => {
    // @TODO: Extract routes in an enum for easier maintainability.
    router.push('/countries');
  }, []);

  // @TODO:
  // Too many components here.
  // We should have only 4 components: Button, Flag, Title, Details which should contain neighbouring ones, as well.
  // It would be easier to read & maintain.
  // We should also have Containers per Domain, not Components/Containers per Page.
  // e.g. Country Details Container, which could also be implemented in other instances.
  // Thus, it would be more abstract and would be more inline with the O/C principle.
  // Containers should be business-logic heavy(methods, Redux connection, etc.) and only contain abstract components.
  return (
    <>
    <ButtonWrapper>
      <BackButton data-test={`button:country:back`} onClick={ handleBackButtonClick }>
        <ArrowBack />
        Back
      </BackButton>
    </ButtonWrapper>
    <CountryWrapper data-test={`wrapper:country:${country?.name}`}>
      <Content>
        <CountryFlag src={ country?.flag } data-test={`image:country-flag:${ country?.name }`}/>
      </Content>
      <Content>
        <CountryTitle data-test={`title:country:${ country?.name }`}>
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
    </>
  )
}

export default CountryPageComponent;
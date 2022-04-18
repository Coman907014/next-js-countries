import React, { FunctionComponent, useCallback } from "react";
import { useRouter } from "next/router";
import countryNameMapper from "../../util/countryNameMapper";
import { NeighbouringCountriesWrapper, Title, Name } from "./style";

interface NeighbouringCountriesProps {
  borders: string[]
}

const NeighbouringCountries: FunctionComponent<NeighbouringCountriesProps> = ({ borders }) => {
  const router = useRouter();

  const keyValue: { [key: string]: string }= {};
  borders?.map(border => keyValue[`${border}`] = countryNameMapper.getNameFromAlfa3(border) || 'NOT_FOUND')

  const handleNameClick = useCallback((name: string) => router.push(`${name.toLowerCase()}`), []);

  return (
    <NeighbouringCountriesWrapper>
      <Title>Border Countries:</Title>
        {
          Object
            .entries(keyValue)?.map(([name, value]) => (
                <Name onClick={() => handleNameClick(name)} key={ value }>{ value }</Name>
              )
            )
        }
    </NeighbouringCountriesWrapper>
  )
}

export default NeighbouringCountries;
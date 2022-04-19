import styled, { css } from "styled-components";
import mediaBelow from "../../theme/utils/mediaBelow/mediaBelow";

export const CountriesWrapper = styled.section`
  display: inline-flex;
  justify-content: center;
  flex-wrap: wrap;

  ${mediaBelow.mobile(
    css`
      flex-direction: column;
      justify-content: center;
    `

  )}
`
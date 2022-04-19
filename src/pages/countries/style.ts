import styled, { css } from "styled-components";
import mediaBelow from "../../theme/utils/mediaBelow/mediaBelow";

export const CountriesWrapper = styled.section`
  display: inline-flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 15px 0;

  ${mediaBelow.mobile(
    css`
      flex-direction: column;
      justify-content: center;
    `

  )}
`;

export const SearchAndFilterWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 15px 0;

  ${mediaBelow.mobile(
    css`
      flex-direction: column;
      justify-content: center;
    `

  )}
`
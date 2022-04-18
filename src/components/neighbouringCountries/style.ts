import styled, { css } from "styled-components";
import mediaBelow from "../../theme/utils/mediaBelow/mediaBelow";

export const NeighbouringCountriesWrapper = styled.div``;
export const Title = styled.div`
  padding: 10px 0;
  font-weight: bold
`;

export const Name = styled.div`
  width: auto;
  cursor: pointer;
  background-color: lightgrey;
  margin: 5px;
  padding: 5px;
  border-radius: 5px;
  word-break: keep-all;

  &:hover {
    text-decoration: underline;
  }

  ${mediaBelow.mobile(
    css`
      display: block;
      margin: 5px;  
    `
  )}
`
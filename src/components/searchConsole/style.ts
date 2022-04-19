import styled, { css } from "styled-components";
import mediaAbove from "../../theme/utils/mediaAbove/mediaAbove";

export const SearchConsoleWrapper = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  flex-direction: column;


  & > * {
    width: 100%;
  }

  ${mediaAbove.mobile(css`
    flex-direction: row;

    & > * {
      width: 30%;
    }

    select {
      height: 21px;
      margin-left: 15%;
    }
  `)}
`
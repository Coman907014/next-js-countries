import styled, { css } from "styled-components";
import mediaBelow from "../../theme/utils/mediaBelow/mediaBelow";

export const CountryWrapper = styled.section`
  margin-top: 50px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  
  ${mediaBelow.mobile(css`
    flex-direction: column;

    `
  )}
`

export const Content = styled.div<{ flexDirection?: string }>`
display: inline-flex;
  flex-direction: ${ ({ flexDirection }) => flexDirection || 'column' };
  justify-content: center;
  align-items: center;
  color: ${( props ) => props.theme.colors.text};
  width: 100%;
  max-width: 45%;
  margin: 0 2.5%;

  ${mediaBelow.mobile(css`
    max-width: 100%;
    flex-direction: column;
`)}
`

export const CountryFlag = styled.img`
  width: auto;
  max-width: 100%;
`

export const CountryTitle = styled.h2`
  padding: 10px 0;
  font-size: 2rem
`
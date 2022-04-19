import styled, { css, ThemeProps } from "styled-components";
import { CustomThemeProps } from "../../models/Theme";
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
  font-size:
`

export const BackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme: { colors } }: ThemeProps<CustomThemeProps>) => colors.text};
  background-color: ${({ theme: { colors } }: ThemeProps<CustomThemeProps>) => colors.buttonBackground};
  box-shadow: ${(p) => `3px 3px 3px 3px ${p.theme.colors.cardShadow}`};
  margin: 30px;
  left: 0;
  cursor: pointer;

  svg {
    padding-right: 5px;
    fill: ${({ theme: { colors } }: ThemeProps<CustomThemeProps>) => colors.text};
  }
`

export const ButtonWrapper = styled.div`
  width: 100%;
`
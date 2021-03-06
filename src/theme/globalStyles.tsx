import React, { ReactElement } from 'react';
import { createGlobalStyle, css, ThemeProps } from 'styled-components';
import { CustomThemeProps } from '../models/Theme';
import mediaBelow from './utils/mediaBelow/mediaBelow';

const CustomGlobalStyles = createGlobalStyle`
  body {
    overflow-x: hidden;
    background-color: ${({ theme: { colors } }: ThemeProps<CustomThemeProps>) => colors.bodyBackground};
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
    line-height: 1.25;
    text-align: center;
    margin: 0;
  }

  h1 {
    margin-top: 5rem;
    font-size: 5rem;
    font-style: oblique;
    line-height: 1.16;
    text-transform: uppercase;

    ${mediaBelow.desktop(css`
      font-size: 2.125rem;
    `)}
  }

  h2 {
    margin: 0;
    font-size: 2.2rem;
    font-style: oblique;

    ${mediaBelow.desktop(css`
      font-size: 0.75rem;
    `)}
  }

  h3 {
    margin: 1rem 0;
    font-size: 1.5rem;

    ${mediaBelow.desktop(css`
      font-size: 1.25rem;
    `)}
  }

  p {
    font-size: 1rem;
  }

  p + p {
    margin-top: 1rem;
    line-height: 1.5;
  }

`;

const SiteGlobalStyles = (): ReactElement => (
  <>
    <CustomGlobalStyles />
  </>
);
export default SiteGlobalStyles;

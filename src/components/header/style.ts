import styled, { ThemeProps, css } from 'styled-components';
import { CustomThemeProps } from '../../models/Theme';
import mediaBelow from '../../theme/utils/mediaBelow/mediaBelow';

interface HeaderElementProps {
  contentAlign?: 'flex-start' | 'center' | 'flex-end'
}

const lateralPadding = 20;
const headerElementLateralPadding = 8;

export const HeaderWrapper = styled.nav`
  display: inline-flex;
  align-items: center;
  background-color: ${({ theme: { colors } }: ThemeProps<CustomThemeProps>) => colors.header};
  color: ${({ theme: { colors } }: ThemeProps<CustomThemeProps>) => colors.text};
  border-bottom: 1px solid lightgrey;
  height: 84px;
  width: 100%;
  padding: 0 ${lateralPadding}px;
  top: 0;

  ${mediaBelow.mobile(css`
    padding: 0;
    justify-content: space-between;
  `)}
`

export const HeaderElement = styled.div<HeaderElementProps>`
  display: flex;
  justify-content: ${({ contentAlign }) => contentAlign};
  align-items: center;
  padding: ${headerElementLateralPadding}px;
  font-size: 20px;
  line-height: 1.1;
  cursor: pointer;
  font-weight: 400;
  width: calc(50% - ${lateralPadding + headerElementLateralPadding * 2}px);
  text-transform: uppercase;

  ${mediaBelow.mobile(css`
    font-size: 16px;
  `)}

  svg {
    padding-right: 5px;
    fill: ${({ theme: { colors } }: ThemeProps<CustomThemeProps>) => colors.iconFill};
  }

  path: {
    fill:  ${({ theme: { colors } }: ThemeProps<CustomThemeProps>) => colors.iconBorder}
  }

  &:hover {
    text-decoration: underline;
  }
`

export const HeaderLogo = styled.img`
  height: 30px;
  width: auto;
`
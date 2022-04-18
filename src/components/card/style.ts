import styled, { ThemeProps, css }  from 'styled-components';
import { CustomThemeProps } from '../../models/Theme';

const cardWidth = 20;

export const CardWrapper = styled.div<{width?: string; shadow?: boolean}>`
  display: block;
  box-shadow: ${(p) => {
    if(!p.shadow || !p.theme.colors.cardShadow) return;
    return ` 3px 3px ${p.theme.colors.cardShadow}`;
  } };
  color: ${({ theme: { colors } }: ThemeProps<CustomThemeProps>) => colors.text};
  background-color: ${({ theme: { colors } }: ThemeProps<CustomThemeProps>) => colors.cardBackground};
  border-radius: 20px;
  border: 1px solid ${({ theme: { colors } }: ThemeProps<CustomThemeProps>) => colors.cardBorder};
  width: ${p => p.width ?? `${cardWidth}%`};
  margin: 5px calc(${cardWidth}%/6);
  cursor: pointer
`
  
export const CardImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom: 1px solid black;
  top: 0;
`

export const CardTitle = styled.h2`
  padding: 5px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CardBody = styled.div`
  padding: 5px;
`

export const CardBodyElement = styled.div`
  padding: 5px;
`

export const CardBodyElementTitle = styled.span`
  font-weight: bold;
  padding-right: 2px;
  text-transform: capitalize;
`

export const CardBodyElementValue = styled.span``
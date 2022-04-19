import styled, { ThemeProps } from "styled-components";
import { CustomThemeProps } from "../../models/Theme";

export const FilterSelect = styled.select`
  color: ${({ theme: { colors } }: ThemeProps<CustomThemeProps>) => colors.text};
  background-color: ${({ theme: { colors } }: ThemeProps<CustomThemeProps>) => colors.cardBackground};
  border-radius: 5px;
  border: 2px solid ${({ theme: { colors } }: ThemeProps<CustomThemeProps>) => colors.text};
`;
export const FilterOption = styled.option``;
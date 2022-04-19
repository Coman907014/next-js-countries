import styled, { ThemeProps, css } from "styled-components";
import { CustomThemeProps } from "../../models/Theme";
import mediaAbove from "../../theme/utils/mediaAbove/mediaAbove";

export const SearchBoxWrapper = styled.div`
  width: 100%;
`;
export const SearchBoxInput = styled.input`
  color: ${({ theme: { colors } }: ThemeProps<CustomThemeProps>) => colors.text};
  background-color: ${({ theme: { colors } }: ThemeProps<CustomThemeProps>) => colors.cardBackground};
  border-radius: 5px;
  border: 2px solid ${({ theme: { colors } }: ThemeProps<CustomThemeProps>) => colors.text};
  width: calc(100% - 10px);

  ${mediaAbove.mobile(
    css`
      margin-bottom: 0;
    `
  )}
`;
export const SearchBoxError = styled.div`
  min-height: 20px;
  color: red;
  font-weight: bold;
`;
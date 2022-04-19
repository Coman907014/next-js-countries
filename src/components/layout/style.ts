import styled, { css } from 'styled-components';
import mediaBelow from '../../theme/utils/mediaBelow/mediaBelow';

export const LayoutWrapper = styled.div`
  height: 100%;
  width: 100%;
`

export const ChildrenWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
 
  ${mediaBelow.mobile(css`
    padding: 0 2px;
    max-width: calc(100% - 21px);
  `)}
`
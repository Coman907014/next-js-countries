import { css, FlattenSimpleInterpolation } from 'styled-components';

import breakpoints from '../../theme/breakpoints';

interface InterpolationMap {
  [key: string]: (
    styles: FlattenSimpleInterpolation | string,
  ) => FlattenSimpleInterpolation;
}

interface MediaBetween {
  [key: string]: InterpolationMap;
}

export default Object.keys(breakpoints).reduce(
  (accumulator, fromName) => ({
    ...accumulator,
    [fromName]: Object.keys(breakpoints).reduce((innerAccumulator, toName) => {
      const minWidth = `${breakpoints[fromName].breakpoint}px`;
      const maxWidth = `${breakpoints[toName].breakpoint - 1}px`;

      return {
        ...innerAccumulator,
        [toName]: (styles: FlattenSimpleInterpolation | string) => css`
          @media screen and (min-width: ${minWidth}) and (max-width: ${maxWidth}) {
            ${styles}
          }
        `,
      };
    }, {} as InterpolationMap),
  }),
  {} as MediaBetween,
);

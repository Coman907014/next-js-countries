import colors from './constants/colors';

const black = '#111111';
const beige = '#EFEEEE';
const blue = '#312F43';
const blueDarker = '#2A2E43';
const blueDarkerHover = '#5A5969';
const greenT90 = '#E7FBF6';
const greyDarker = '#2A2E43';
const greyPurple = '#3D3B4E';
const peach = '#FB9F1E';
const redDark = '#C21C1C';
const teal = '#0AD2A0';
const tealDark = '#53A387';
const white = '#FFFFFF';
const whiteDarkest = '#CDCDCD';
const pink = '#EC608A';

const commonTheme = {
  screenSize: {
    // screen size breakpoints for smooth transitions
    desktopExtraLarge: '1800px',
    extraSmallMobile: '319px',
    smallMobile: '359px',
  },
  zIndex: {
    default: 1,
    max: 10000,
    none: -1
  },
}

export const lightTheme = {
  ...commonTheme,
  colors: {
    ...colors,
    beige,
    black,
    blue,
    blueDarker,
    text: black,
    header: white,
    iconFill: black,
    iconBorder: white,
    blueDarkerHover,
    teal,
    greenT90,
    greyDarker,
    greyPurple,
    pink,
    peach,
    redDark,
    tealDark,
    white,
    whiteDarkest,
  }
};

export const darkTheme = {
  ...commonTheme,
  colors: {
    ...colors,
    beige,
    black,
    blue: '#45b6fe',
    text: white,
    header: blueDarker,
    iconFill: white,
    iconBorder: blueDarker,
    blueDarker: '#3792cb',
    blueDarkerHover: '#296d98',
    teal,
    greenT90,
    greyDarker,
    greyPurple,
    pink,
    peach,
    redDark,
    tealDark,
    white,
    whiteDarkest,
  },
}

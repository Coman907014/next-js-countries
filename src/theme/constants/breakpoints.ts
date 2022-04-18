interface Breakpoint {
  breakpoint: number;
  gutter: {
    inset: '2rem' | '1.5rem';
    normal: '1.5rem' | '2rem' | '2.5rem';
  };
  maxWidth: {
    inset: 'none' | '960px';
    normal: 'none' | '1700px';
  };
}

export interface Breakpoints {
  [key: string]: Breakpoint;
}

const breakpoints: Breakpoints = {
  desktop: {
    breakpoint: 1024,
    gutter: {
      inset: '2rem',
      normal: '2rem',
    },
    maxWidth: {
      inset: '960px',
      normal: 'none',
    },
  },
  desktopLarge: {
    breakpoint: 1440,
    gutter: {
      inset: '2rem',
      normal: '2.5rem',
    },
    maxWidth: {
      inset: '960px',
      normal: '1700px',
    },
  },
  mobile: {
    breakpoint: 0,
    gutter: {
      inset: '1.5rem',
      normal: '1.5rem',
    },
    maxWidth: {
      inset: 'none',
      normal: 'none',
    },
  },
  mobileLarge: {
    breakpoint: 480,
    gutter: {
      inset: '1.5rem',
      normal: '1.5rem',
    },
    maxWidth: {
      inset: 'none',
      normal: 'none',
    },
  },
  tablet: {
    breakpoint: 768,
    gutter: {
      inset: '2rem',
      normal: '2rem',
    },
    maxWidth: {
      inset: 'none',
      normal: 'none',
    },
  },
} as const;

export default breakpoints;

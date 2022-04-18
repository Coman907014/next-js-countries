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
  // @ TODO: We need more breakpoints: tablet, large/small desktop, small mobile
  desktop: {
    breakpoint: 1440,
    gutter: {
      inset: '2rem',
      normal: '2rem',
    },
    maxWidth: {
      inset: '960px',
      normal: 'none',
    },
  },
  mobile: {
    breakpoint: 395,
    gutter: {
      inset: '1.5rem',
      normal: '1.5rem',
    },
    maxWidth: {
      inset: 'none',
      normal: 'none',
    },
  },
} as const;

export default breakpoints;

// Design tokens extracted from Figma design
export const colors = {
  orange: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
    button: '#F8A801',
  },
  neutral: {
    50: '#fafafa',
    100: '#f4f4f5',
    200: '#e4e4e7',
    300: '#d4d4d8',
    400: '#a1a1aa',
    500: '#71717a',
    600: '#52525b',
    700: '#3f3f46',
    800: '#27272a',
    900: '#18181b',
  },
} as const

export const spacing = {
  section: {
    sm: '4rem',
    md: '5rem',
    lg: '6rem',
    xl: '8rem',
  },
  container: {
    padding: {
      mobile: '1rem',
      tablet: '1.5rem',
      desktop: '2rem',
    },
    maxWidth: '80rem', // 1280px
  },
} as const

export const typography = {
  fontSize: {
    'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
    'h1': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
    'h2': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
    'h3': ['1.875rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
    'h4': ['1.5rem', { lineHeight: '1.4' }],
    'h5': ['1.25rem', { lineHeight: '1.5' }],
    'h6': ['1.125rem', { lineHeight: '1.5' }],
    'body-lg': ['1.125rem', { lineHeight: '1.7' }],
    'body': ['1rem', { lineHeight: '1.6' }],
    'body-sm': ['0.875rem', { lineHeight: '1.6' }],
    'caption': ['0.75rem', { lineHeight: '1.5' }],
  },
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
} as const

export const borderRadius = {
  none: '0',
  sm: '0.25rem',
  DEFAULT: '0.375rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  '2xl': '1.5rem',
  full: '9999px',
} as const

export const shadows = {
  soft: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
  medium: '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  large: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
} as const

export const breakpoints = {
  xs: '360px',
  sm: '768px',
  md: '1024px',
  lg: '1280px',
  xl: '1440px',
} as const

export const gradients = {
  hero: 'linear-gradient(135deg, #F25227 0%, #E8AA29 100%)',
  cta: 'linear-gradient(135deg, #fb923c 0%, #f97316 100%)',
  subtle: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)',
} as const

export const header = {
  height: {
    mobile: '4rem', // 64px
    desktop: '5rem', // 80px
  },
  zIndex: {
    base: 50,
    mobileMenu: 50,
    backdrop: 40,
  },
  animation: {
    mobileMenu: '300ms ease-out',
    hover: '200ms ease-out',
    hamburger: '250ms ease-in-out',
    backdrop: '200ms ease-out',
  },
} as const

export const animations = {
  duration: {
    fast: '150ms',
    normal: '200ms',
    slow: '300ms',
    slower: '500ms',
  },
  easing: {
    easeOut: 'ease-out',
    easeIn: 'ease-in',
    easeInOut: 'ease-in-out',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  timing: {
    fast: '150ms ease-out',
    normal: '200ms ease-out',
    slow: '300ms ease-out',
    bounce: '200ms cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    smooth: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const

export const interactions = {
  hover: {
    lift: 'translateY(-4px)',
    scale: 'scale(1.05)',
    scaleSmall: 'scale(1.02)',
    scaleLarge: 'scale(1.1)',
  },
  focus: {
    ringWidth: '2px',
    ringOffset: '2px',
    ringColor: 'rgb(249 115 22)', // orange-500
  },
  active: {
    scale: 'scale(0.98)',
    scaleSmall: 'scale(0.99)',
  },
} as const
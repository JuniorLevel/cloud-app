import { Config } from 'tailwindcss';
import { colors } from './src/constants/colors';
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      ...colors,
    },
    screens: {
      sm: { min: '320px', max: '639px' },
      'sm-min': { min: '320px' },
      'sm-max': { max: '639px' },
      md: { min: '640px', max: '767px' },
      'md-min': { min: '640px' },
      'md-max': { max: '767px' },
      lg: { min: '768px', max: '1023px' },
      'lg-min': { min: '768px' },
      'lg-max': { max: '1023px' },
      xl: { min: '1024px', max: '1279px' },
      'xl-min': { min: '1024px' },
      'xl-max': { max: '1279px' },
      '2xl': { min: '1280px' },
    },
    backgroundImage: {
      gradient: 'linear-gradient(90deg, #47A1D6 30%, #907EFF 100%)',
      accordionGradient: 'linear-gradient(90deg, #B1E3FF 30%, #DFBEFF 100%)',
      hoverGradient:
        'linear-gradient(90deg, rgba(11,125,214,1) 10%, rgba(194,136,255,1) 100%);',
    },
    fontFamily: {
      Comfortaa: ['Comfortaa', 'sans-serif'],
      Montserrat: ['Montserrat', 'sans-serif'],
      Roboto: ['Roboto', 'sans-serif'],
    },
    borderRadius: {
      round: '45px',
    },
    boxShadow: {
      cardShadow: '4px 22px 22px rgba(0, 0, 0, 0.2)',
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;

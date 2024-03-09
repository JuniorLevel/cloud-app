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
      md: { min: '640px', max: '767px' },
      lg: { min: '768px', max: '1023px' },
      xl: { min: '1024px', max: '1274px' },
      'xl-min': { min: '1275px' },
      'xl-max': { max: '1274px' },
      '2xl': { min: '1450px' },
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
      roundArea: '50px',
      roundForm: '60px',
    },
    boxShadow: {
      cardShadow: '4px 22px 22px rgba(0, 0, 0, 0.2)',
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;

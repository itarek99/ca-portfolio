/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#44C36F',
        },
        secondary: {
          DEFAULT: '#FF8643',
        },
        tertiary: {
          DEFAULT: '#3678B5',
        },
        grey: {
          DEFAULT: '#969696',
        },
      },
      scale: {
        '-100': '-1',
      },
    },
  },
  plugins: [],
};

// tailwind.config.js

const { colors: defaultColors } = require('tailwindcss/defaultTheme')

const colors = {
    ...defaultColors,
    ...{
      'primary-gray': '#22262a',
      'gold': '#e0bc8f',
    },
}


module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: colors
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
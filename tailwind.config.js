/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {},
    colors: {
      primary: '#008037',
      secondary: '#f49137',
      blue: colors.blue,
      orange: colors.orange,
      gray: colors.gray,
      transparent: colors.transparent,
      emerald: colors.emerald,
    },
  },
  plugins: [],
};

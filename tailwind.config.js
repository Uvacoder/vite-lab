const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: { display: ['Oswald'], body: ['Open Sans'] },
    extend: {
      colors: {
        lime: colors.lime,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

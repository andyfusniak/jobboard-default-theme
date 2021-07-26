const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: {
    enabled: false,
    content: ['./templates/**/*.html'],
    options: {
      keyframes: true,
    }
  },
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
        blue: colors.blue,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};

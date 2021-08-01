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
        gray: colors.blueGray,
        blue: colors.blue,
        cyan: colors.cyan
      }
    },
  },
  variants: {
    extend: {
     textDecoration: ['active'],
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};

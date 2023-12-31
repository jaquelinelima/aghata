/** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

  // tailwind.config.js
  const colors = require('tailwindcss/colors')

  module.exports = {
   content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    //darkMode: false,  or 'media' or 'class'
    theme: {

      screens: {
        xxs: "280px",
        xs: "360px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },

      // COLORS
      colors: {
        primary: "#2A0065",
        secundary: "#9D44A8",
        tertiary: "#5D0065",
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        red: colors.red,
        yellow: colors.amber,
        green: colors.emerald,
        blue: colors.blue,
        indigo: colors.indigo,
        purple: colors.violet,
        pink: colors.pink,
        rose: colors.rose,
        violet: colors.violet,
        lime: colors.lime,
      },

      // FONTS
      fontFamily: {
        sans: ['Inter var', '"Segoe UI"', 'sans-serif'],
        //sans: ['Inter var','sans-serif'],
      },

      // SPACE
      spacing: {
        px: '1px',
        0: '0',
        0.5: '0.125rem',
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
      },
            
    },
    variants: {
      extend: {},
    },
    plugins: [
      // ...
      require("@tailwindcss/forms"),
      require('@tailwindcss/aspect-ratio'),
      // ...
    ],
  }
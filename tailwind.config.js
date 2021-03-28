module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      light: '#2c2c2c',
      dark: 'lightgray',
      bgLight: 'lightgray',
      bgDark: '#2c2c2c',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

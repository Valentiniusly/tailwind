module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: '#FF3F3A',
      },
      fontFamily: {
        sans: ['Lato', 'sans'],
      },
      gridTemplateColumns: {
        autoFill: 'repeat(auto-fill, minmax(300px, 1fr))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

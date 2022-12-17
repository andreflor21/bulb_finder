/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './src/**/*.png'],
  theme: {
    extend: {
      colors: {
        orange: {
          500: '#FF8800',
        },
        zinc: {
          100: '#F5F5F5',
          800: '#212121',
        },
      },
      fontFamily: {
        sans: "'UniNeue', 'sans-serif'",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true, // <== disable this!
  },
};

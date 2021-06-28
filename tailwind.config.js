module.exports = {
  purge: [
     './public/index.html',
     './theme/default/**/*.{js,jsx,ts,tsx}',
     './theme/default/**/*.blade.php',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  purge: [
     './public/index.html',
     './resources/**/*.{js,jsx,ts,tsx}',
     './resources/**/*.blade.php',
     './resources/**/*.vue',
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

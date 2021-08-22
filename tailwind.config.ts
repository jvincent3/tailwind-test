const colors = require('tailwindcss/colors')
module.exports = {
   purge: [
     './pages/**/*.{js,ts,jsx,tsx}',
   './components/**/*.{js,ts,jsx,tsx}',
   './layout/**/*.{js,ts,jsx,tsx}',
   './helpers/**/*.{js,ts,jsx,tsx}'
  ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
      colors: {
      transparent: 'transparent',
      current: 'currentColor'
    }
    },
    variants: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/forms'), // import tailwind forms
   ],
  }
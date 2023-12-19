/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#F07D00',
        'secondary': '#F07D00',
        'dark': '#636466',
        'light': '#F3F3F3',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'cards': '1px 4px 7px 0px rgba(233, 234, 233, 1)',
      }
    },
  },
  plugins: [],
};

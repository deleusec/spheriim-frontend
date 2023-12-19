/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#F07D00',
        'primary-light': '#F1B575',
        'secondary': '#F07D00',
        'dark': '#636466',
        'light': '#E9EAE9',
        'light-background': '#F3F3F3',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

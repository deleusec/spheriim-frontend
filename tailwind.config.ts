import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
      boxShadow: {
        'cards': '1px 4px 7px 0px rgba(233, 234, 233, 1)',
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['var(--font-lato)'],
        rale: ['var(--font-rale)'],
        mono : ['var(--font-space-mono)'],
        ibm : ['var(--font-ibm_plex_mono)']
        },
      screens : {
        'xxs':'260px',
        'xs': '375px',
        'sm': '600px',
        'md': '768px',
        'lg': '992px',
        'xl': '1024px',
        '2xl': '1280px',
        '3xl': '1400px',
      } , 
      colors: {
        'white' :'#fff',
        'black' : '#000',

      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

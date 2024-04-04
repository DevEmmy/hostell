/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary1: "#27D940",
        primary2: "#064A75",
        secondary1: "#D8F3FF",
        secondary2: "#5F7998"
      },
      
    },
  },
  plugins: [],
}


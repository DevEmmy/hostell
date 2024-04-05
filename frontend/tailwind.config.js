/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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
};

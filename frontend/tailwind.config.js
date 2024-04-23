/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary1: "#D8F3FF",
        primary2: "#27D940",
        secondary1: "#27D940",
        secondary2: "#27D940"
      },
      spacing:{
        xPadding: "5.17%"
      }
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primarycolor: "#B9F446",
        primarycolorlight: "#EDFCD0",
        secondarycolor: "#0F1719",
        secondarycolorlight: "#4B5153",
      },
    },
  },
  plugins: [],
};

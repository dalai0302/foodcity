/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_gray: "#3B3B3C",
        selected_menu: "rgb(72, 68, 58)",
      },
      fontFamily: {
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
        },
      },
    },
  },
  plugins: [],
};

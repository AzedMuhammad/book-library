/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        primary: "#4475F2",
      },
    },
  },
  plugins: [],
};

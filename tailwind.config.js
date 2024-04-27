/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "3xl": "2rem",
        "2.5xl": "1.75rem",
        sans: ["inter", "Roboto", "sans-serif"],
      },
      colors: {
        "blue-menu-active": "#06286E",
      },
      boxShadow: {
        s1: "0 0 2rem 0 rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};

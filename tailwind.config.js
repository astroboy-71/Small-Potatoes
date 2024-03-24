/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      center: true,
    },
    extend: {
      colors: {
        "neal-blue": "#00B6EF",
        "another-blue" : "#00C2FF",
        "custom-blue": "#0270BF",
        "light-green": "#05E9BE",
        "mid-night": "#010101",
      },
    },
  },
  plugins: [],
};


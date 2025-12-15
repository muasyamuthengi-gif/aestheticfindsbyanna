/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        muted: "#FAFAFA",
        text: "#1C1C1C",
        subtext: "#555555"
      }
    }
  },
  plugins: []
};

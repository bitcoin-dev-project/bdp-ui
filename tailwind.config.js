/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadowColor: {
        "dark-light": "rgba(255, 255, 255, 0.05)"
      },
      colors: {
        bdp: {
          background: "var(--background)",
          "hover-primary": "var(--hover-primary)",
          "hover-state": "var(--hover-state)",
          stroke: "var(--stroke)",
          button: "var(--button)",
          "secondary-text": "var(--secondary-text)",
          "primary-text": "var(--primary-text)",
          accent: "var(--accent)",
          white: "#FAFAFA",
          black: "var(--black)",
          lightGrey: "#666666",
          brightOrange: {
            100: "#EC802F",
            200: "#ED8936",
            300: "#FAA739",
          },
          otherLight: "var(--other-light-text)",
        },
      },
    },
  },
  plugins: [],
};

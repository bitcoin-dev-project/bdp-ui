/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      geist: ['"Geist Sans"', "sans-serif"],
      mona: ['"Mona Sans"', "sans-serif"],
    },
    extend: {
      boxShadow: {
        "custom-sm": "2px 3px 10px 0px rgba(255, 128, 0, 0.18);",
      },
      colors: {
        custom: {
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

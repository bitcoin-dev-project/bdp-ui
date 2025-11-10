/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        montserrat: ["Montserrat","sans-serif"]
      },
      boxShadow:{
        "by-bdp": `
          0px 1px 1px 0px #00000017,
          0px 1px 1px 0px #0000000D,
          0px 2px 1px 0px #00000003,
          0px 3px 1px 0px #00000000`
      },
      boxShadowColor: {
        "dark-light": "rgba(255, 255, 255, 0.05)",
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
        tag: {
          pink: "#EC4182",
          "light-pink": "#F5D7E2",
          blue: "#396BEB",
          "light-blue": "#D1E2F3",
          purple: "#7762B9",
          "light-purple": "#CABFEF",
          yellow: "#CC7400",
          "light-yellow": "#ECD4B5",
          "lighter-text": "#F6F0E6",
        },
        brand:{
          light:{
            100:"#F6F0E6",
          },
          "stroke-on-base":"#E1DBD0",
          "card-bg":"#EFE9DE",
          orange:{
            100:"var(--brand-orange-100)",
          },
          gray:{
            100:"#201E1E",
            200:"#F6F0E6",
            300:"#A9A49B",
            400:"#F6F0E6",
            500:"#E1DBD0",
          },
          green:"#0E9158",
          dark:{
            100:"#201E1E"
          }
        }
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.{html,js}","./assets/**/*.{html,js}","./*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
      
    },
    screens: {
      sm: "576px",
      "sm-max": { max: "576px" },
      md: "768px",
      "md-max": { max: "768px" },
      lg: "992px",
      "lg-max": { max: "992px" },
      xl: "1200px",
      "xl-max": { max: "1200px" },
      "2xl": "1320px",
      "2xl-max": { max: "1320px" },
    },
    extend: {},
  },
  plugins: [],
}


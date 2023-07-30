/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

defaultTheme.fontFamily

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-rubik)'],
        blox: ['var(--font-blox2)']
      }
    },
  },
  plugins: [],
}


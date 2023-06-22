/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '*',
    "./index.html",
    "./dist/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    fontFamily: {
      circe: ["circe"]
    },
    extend: {
      fontSize: {
          '10xl': ['180px', '180px'],
      },
      spacing: {
        'chair': '1024px'
      }
    },
  },
  plugins: [],
}


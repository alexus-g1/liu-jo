/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '*',
    "./index.html",
    "./dist/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    container: {
      screens: {
        'lg' :'1400px'
      },
      center: true,
    },
    fontFamily: {
      circe: ["circe"]
    },
    extend: {
      backgroundImage: {
        'texture': "url('/img/texture.png')",
        'BG_3': "url('/img/BG_3.png')",
        'bg-4': "url('/img/bg4.png')",
        'laptop': "url('/img/laptop-bg.png')",
        'tablet': "url('/img/tablet-bg.png')",
        'mobile': "url('/img/mobile-bg.png')",
      },
      fontSize: {
          '10xl': ['180px', '180px'],
      },
      spacing: {
        'texture': '1262px',
        'chair': '1024px',
        'laptop': '1506px',
        'tablet':'1633px',
        'mobile': '1416px',
      }
    },
  },
  plugins: [],
}


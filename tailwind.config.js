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
        'texture': "url('/img/texture.jpg')",
        'BG_3': "url('/img/BG_3.jpg')",
        'laptop': "url('/img/laptop-bg.png')",
        'tablet': "url('/img/tablet-bg.png')",
        'mobile': "url('/img/mobile-bg.png')",
      },
      fontSize: {
          '10xl': ['183px', '180px'],
          'about-text': ['34px', '38px'],
          'Typography': ['50px', '50px'],
          'brand-text' : ['26px', '38px'],
          'screens-head': ['22px','25px'],
      },
      spacing: {
        
        'grey-logo' : '137px',
        'white-logo': '109px',
        'chair-2': '420px',
        'adapt-bg': '510px',
        'chair-3-t':'2265px',
        'brand-section-w': '724px',
        'brand-h': '825px',
        'brand-r' : '234px',
        'typo-gap': '55px',
        'typography' : '112px',
        'logo-1': '175px',
        'mtlogo-1':'202px',
        'texture-top': '85px',
        'texture': '1262px',
        'chair': '1024px',
        'laptop': '1506px',
        'tablet':'1633px',
        'mobile': '1416px',
      },
      maxWidth: {
        'brand': '724px',
        'adapt': '745px',
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        'roulette': 'repeat(12, 8.3%)',
      },
      gridTemplateColumns: {
        'roulette': 'repeat(12, 8.3%)',
      },
    },
    screens: {
      mobile: { max: '480px' },
      // => @media (max-width: 480px) { ... }
      'mobile-l': { max: '576px' },
      // => @media (max-width: 576px) { ... }
      tablet: '880px',
      // => @media (min-width: 880px) { ... }
      desktop: '1200px',
      // => @media (min-width: 1200px) { ... }
      'desktop-l': '1920px',
      // => @media (min-width: 1920px) { ... }
    },
  },
  plugins: [],
}


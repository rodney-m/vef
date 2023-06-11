/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./apps/client/src/**/*.{html,ts}",
    "./libs/website/src/**/*.{html,ts}"
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        gold : '#FFD700',
        lightGold : 'rgba(255, 215, 0, .8)'
      }
    },
  },
  plugins: [],
}


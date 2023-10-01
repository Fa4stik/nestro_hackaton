/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'rubikRg': ['Rubik-Regular', 'system-ui', 'sans-serif'],
        'rubikMd': ['Rubik-Medium', 'system-ui', 'sans-serif'],
      },
      colors: {
        'mainWhite': '#E9E9EA',
        'mainGray': '#3B3B3B',
        'mainBorder': 'rgb(109,109,109,0.4)',
        'enterprise': '#101418'
      },
      boxShadow: {
        'lending': '4px 4px 20px rgba(255, 255, 255, 0.4)'
      },
      dropShadow: {
        'lending': '4px 4px 20px rgba(255, 255, 255, 0.4)'
      }
    },
  },
  plugins: [
      function ({ addUtilities }) {
          const newUtilities = {
            '.transition-header': {
              transition: 'left 0.3s ease-in-out, width 0.3s ease-in-out'
            },
          }
          addUtilities(newUtilities)
      },
  ],
}
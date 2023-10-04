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
        'mainWhite': '#1a1a1c',
        'mainGray': '#bdbdbd',
        'mainBorder': 'rgb(208,178,63)',
        'enterprise': '#ffffff'
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
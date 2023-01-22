/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screen: {
      xsm:'390',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        veryLightGray: 'hsl(0,0%,50%)',
        white: 'rgb(255,255,255)',
        black: 'rgb(1,1,1)',
        gray: 'rgb(65,71,58)',
        lightGray: '#e6e6e6',
        footerColor: '#4a4a4a',
      }
    },
  },
  plugins: [],
}
 
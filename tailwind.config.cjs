/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        'grid': "url('../src/assets/grid.png')",
        'grid2': "url('../src/assets/stonks.mp4')",
        'hologram': "url('../src/assets/hologram.png')" ,
        'webapp' : "url('../src/assets/webapp.png')",
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        text: 'text 5s ease infinite',
        tilt: 'tilt 5s infinite linear',
        marquee: 'marquee 12s linear infinite',
        marquee2: 'marquee2 12s linear infinite',
 
      
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(1deg)",
          },
          "75%": {
            transform: "rotate(-1deg)",
          },

        },
        marquee: {
          '0%': { transform: 'translate3d(100%,0,0)' },
          '100%': { transform: 'translate3d(-100%,0,0)' }
        },
        marquee2: {
          '0%': { transform: 'translate3d(-100%,0,0)' },
          '100%': { transform: 'translate3d(100%,0,0)' }
        },
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },}},
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        audio: ["Audiowide","sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
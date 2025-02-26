/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        base: "15px",

        lg: "30px",
      },
      cursor: {
        pointer: "url('https://www.t3bucket.com/f/1e7d37cc-558f-4f37-bad4-7880748df02d-Group419.png')16 16, pointer",
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1728px',
        '4xl': '1920px',
      },
      animation: {
        'vision-scrolllines-mov': 'vision-scrolllines-mov 8s linear infinite',
        'vision-scrolllines-move': 'vision-scrolllines-move 8s linear infinite',
      },
      keyframes: {
        'vision-scrolllines-mov': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'vision-scrolllines-move': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '960px',
          xl: '1140px',
          '2xl': '1320px',
          '3xl': '1400px',
          '4xl': '1684px',
        },
      },
    },
  },
  plugins: [],
};

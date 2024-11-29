/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add this line to enable Tailwind in your src folder
  ],
  theme: {
    extend: {
      screens: {
        'xl': '1536px',
        'lg': '1280px',
        'md': '1024px',
        'sm': '768px',
      },
      boxShadow: {
        'bottom-xl': '0 10px 15px rgba(0, 0, 0, 0.3)', // Creates a shadow on the bottom only
      
        'top-xl': '0 -10px 15px rgba(0, 0, 0, 0.3)',
      },
      rotate: {
        '-4': '-4deg',
        '-7': '-7deg',
      },
      zIndex: {
        '999999': '999999'
      }
    },
  },
  plugins: [],
}



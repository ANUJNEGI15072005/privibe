/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 10s linear infinite',
      },
      fontFamily: {
        'bebas': ['Bebas Neue', 'cursive'],
        'edu-vic': ['"Edu VIC WA NT Beginner"', 'sans-serif'],
        'new-amsterdam': ['"New Amsterdam"', 'sans-serif'],
        'dancing-script': ['"Dancing Script"', 'cursive'],
        'cursive': ['"Dancing Script"', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
        'satisfy': ['Satisfy', 'cursive'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'dmSerif': ['DM Serif Display', 'serif'],
        'instaSans': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


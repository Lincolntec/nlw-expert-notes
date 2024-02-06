/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif']
        }
      },
    },
  },
  plugins: [],
}


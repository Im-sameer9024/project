/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        content: ["EB Garamond", "serif"],
        heading:["Righteous", 'sans-serif'],
        smallHeading:["Philosopher", 'sans-serif'],
        
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-white': '#F1F3F4',
        'custom-blue': '#2f7387',
        'custom-blue-dark': '#165a6e',
        'custom-button-color': '#FF6978'
      }
    },
  },
  plugins: [],
}
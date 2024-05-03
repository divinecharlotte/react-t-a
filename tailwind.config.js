/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#0000FF', // Example color
        },
      },
      textColor: {
        'blue': '#0000FF', // Example text color
      },
      backgroundColor: {
        'blue': '#0000FF', // Example background color
      },
    },
  },
  plugins: [],
}


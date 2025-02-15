/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#1a202c',
          lighter: '#2d3748',
          light: '#4a5568',
        },
      },
      backgroundColor: {
        dark: {
          DEFAULT: '#1a202c',
          lighter: '#2d3748',
          light: '#4a5568',
        },
      },
    },
  },
  plugins: [],
};
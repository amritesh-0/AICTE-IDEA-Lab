/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF6F20', // Bright orange
        secondary: '#F9F9F9', // Light background
        accent: '#FFB74D', // Warm accent color
        text: '#333333', // Dark text for contrast
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

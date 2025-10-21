/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6',
          dark: '#2563EB',
        },
        secondary: {
          DEFAULT: '#F97316',
          dark: '#EA580C',
        },
        accent: {
          DEFAULT: '#10B981',
          dark: '#059669',
        }
      }
    },
  },
  plugins: [],
}

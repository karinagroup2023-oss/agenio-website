/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#1E3A8A', light: '#2563EB', dark: '#1e3a8a' },
        accent: { DEFAULT: '#F59E0B', light: '#FCD34D', dark: '#D97706' },
        orange: { cta: '#F97316' }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'sans-serif']
      }
    }
  },
  plugins: []
}

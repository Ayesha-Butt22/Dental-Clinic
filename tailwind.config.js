module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003366',
        tealmed: '#14B8A6',
        offwhite: '#F0F9FF',
        accentgray: '#E2E8F0'
      },
      fontFamily: {
        heading: ['Poppins', 'Inter', 'sans-serif'],
        body: ['Roboto', 'Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0F172A',
          surface: '#1E293B',
          card: '#334155',
          text: '#F1F5F9',
          textSecondary: '#94A3B8',
          border: '#475569',
          accent: '#00B4D8',
        }
      }
    },
  },
  plugins: [],
}
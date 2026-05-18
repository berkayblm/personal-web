module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        brand: {
          50: '#eef9ff',
          100: '#d9f0ff',
          200: '#bce4ff',
          300: '#8ed3ff',
          400: '#58b8ff',
          500: '#3094ff',
          600: '#1c73f5',
          700: '#175ce1',
          800: '#1a4bb6',
          900: '#1c428f',
        },
        accent: {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        dark: {
          bg: '#070A14',
          surface: '#0E1422',
          card: '#161E33',
          text: '#E6EAF2',
          textSecondary: '#94A3B8',
          border: '#1F2A44',
          accent: '#58b8ff',
        },
      },
      backgroundImage: {
        'grid-light':
          'linear-gradient(rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.06) 1px, transparent 1px)',
        'grid-dark':
          'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(88,184,255,0.55)',
        'glow-accent': '0 0 40px -10px rgba(139,92,246,0.55)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(40px,-30px) scale(1.1)' },
          '66%': { transform: 'translate(-30px,30px) scale(0.95)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        blob: 'blob 12s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        gradient: 'gradient 8s ease infinite',
        'fade-up': 'fade-up 0.7s ease-out forwards',
      },
    },
  },
  plugins: [],
};

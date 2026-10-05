/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f4ff',
          100: '#e0eaff',
          200: '#c7d7fe',
          300: '#a5bfff',
          400: '#819ff9',
          500: '#637bf0',
          600: '#4f5de5',
          700: '#4348c9',
          800: '#3b3da1',
          900: '#343584',
          950: '#1e1d4a',
        },
        surface: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.4s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'flow': 'flow 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        flow: {
          '0%': { strokeDashoffset: '0' },
          '100%': { strokeDashoffset: '1000' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, rgba(99, 123, 240, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(99, 123, 240, 0.05) 1px, transparent 1px)',
        'radial-glow': 'radial-gradient(ellipse at center, rgba(99, 123, 240, 0.15) 0%, transparent 70%)',
        'mesh-gradient': 'linear-gradient(135deg, rgba(99, 123, 240, 0.1) 0%, rgba(139, 92, 246, 0.1) 50%, rgba(99, 123, 240, 0.1) 100%)',
      },
    },
  },
  plugins: [],
}
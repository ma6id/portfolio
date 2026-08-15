/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#05070d',
          900: '#080b14',
          800: '#0d1420',
          700: '#131c2c',
          600: '#1a2537',
        },
        cyan: {
          400: '#22d3ee',
          300: '#67e8f9',
        },
        azure: {
          500: '#3b82f6',
          400: '#5b9bf7',
        },
        mist: {
          100: '#e6edf5',
          300: '#aab6c8',
          500: '#7c8aa0',
          700: '#4a5568',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(56,189,248,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.06) 1px, transparent 1px)',
        'radial-glow':
          'radial-gradient(circle at 50% 0%, rgba(34,211,238,0.15), transparent 60%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(34,211,238,0.15)',
        'glow-sm': '0 0 20px rgba(34,211,238,0.12)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        blink: 'blink 1s step-start infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}


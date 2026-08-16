/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: 'rgb(var(--ink-950) / <alpha-value>)',
          900: 'rgb(var(--ink-900) / <alpha-value>)',
          800: 'rgb(var(--ink-800) / <alpha-value>)',
          700: 'rgb(var(--ink-700) / <alpha-value>)',
          600: 'rgb(var(--ink-600) / <alpha-value>)',
          onaccent: '#05070d',
        },
        accent: 'rgb(var(--accent) / <alpha-value>)',
        cyan: {
          400: '#22d3ee',
          300: '#67e8f9',
        },
        azure: {
          500: '#3b82f6',
          400: '#5b9bf7',
        },
        mist: {
          100: 'rgb(var(--mist-100) / <alpha-value>)',
          300: 'rgb(var(--mist-300) / <alpha-value>)',
          400: 'rgb(var(--mist-400) / <alpha-value>)',
          500: 'rgb(var(--mist-500) / <alpha-value>)',
          700: 'rgb(var(--mist-700) / <alpha-value>)',
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


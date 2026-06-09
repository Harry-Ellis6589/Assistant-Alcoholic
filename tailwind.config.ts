import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#f8f7ff',
          100: '#f0edff',
          200: '#e6ddff',
          300: '#d4b9ff',
          400: '#b88aff',
          500: '#9d5aff',
          600: '#8b3ffd',
          700: '#7928e8',
          800: '#6b1fbf',
          900: '#5a189a',
        },
        'accent': {
          50: '#fef8f0',
          100: '#fce8d9',
          200: '#f9d4ad',
          300: '#f5b481',
          400: '#f19a5f',
          500: '#ec7f3d',
          600: '#db6020',
          700: '#c44a1a',
          800: '#a83818',
          900: '#8a2c16',
        },
        'dark': {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#e0e0e0',
          300: '#c0c0c0',
          400: '#808080',
          500: '#606060',
          600: '#404040',
          700: '#303030',
          800: '#202020',
          900: '#0a0a0a',
        },
      },
      backdropBlur: {
        'xl': '20px',
        '2xl': '40px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      transitionDuration: {
        '250': '250ms',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
} satisfies Config

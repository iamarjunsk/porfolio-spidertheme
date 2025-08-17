/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'spider-red': '#FF0000',
        'spider-blue': '#0000FF',
        'spider-dark-red': '#CC0000',
        'spider-dark-blue': '#000080',
        'web-gray': '#E0E0E0',
      },
      fontFamily: {
        'comic': ['Bangers', 'cursive'],
        'comic-neue': ['Comic Neue', 'cursive'],
      },
      animation: {
        'swing': 'swing 2s ease-in-out infinite',
        'dangle': 'dangle 1.5s ease-in-out infinite',
        'float': 'float 20s infinite ease-in-out',
        'heroText': 'heroText 2s ease-out',
        'webBounce': 'webBounce 0.6s ease',
        'spiderSense': 'spiderSense 0.5s ease infinite',
        'clockTick': 'clockTick 60s linear infinite',
      },
      keyframes: {
        swing: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        dangle: {
          '0%, 100%': { transform: 'translateX(-50%) rotate(-10deg)' },
          '50%': { transform: 'translateX(-50%) rotate(10deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        heroText: {
          'from': {
            transform: 'scale(0) rotate(-180deg)',
            opacity: '0',
          },
          'to': {
            transform: 'scale(1) rotate(0)',
            opacity: '1',
          },
        },
        webBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-20px) rotate(-5deg)' },
          '75%': { transform: 'translateY(-10px) rotate(5deg)' },
        },
        spiderSense: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.3) rotate(180deg)' },
        },
        clockTick: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      backgroundImage: {
        'web-pattern': `radial-gradient(circle at 20% 50%, transparent 30%, rgba(255,255,255,0.1) 30.5%),
                        radial-gradient(circle at 80% 50%, transparent 30%, rgba(255,255,255,0.1) 30.5%)`,
      },
    },
  },
  plugins: [],
}
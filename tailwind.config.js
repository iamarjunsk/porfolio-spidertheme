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
        'electric-blue': '#00D4FF',
        'cosmic-purple': '#6366F1',
        'neon-green': '#10B981',
        'sunset-orange': '#F59E0B',
        'plasma-pink': '#EC4899',
        'deep-space': '#0F0F23',
        'web-silver': '#E5E7EB',
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
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 3s linear infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
        'spin-slow': 'spin-slow 8s linear infinite',
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
        glow: {
          '0%': { textShadow: '0 0 5px rgba(0,212,255,0.5), 0 0 10px rgba(0,212,255,0.3)' },
          '100%': { textShadow: '0 0 20px rgba(0,212,255,0.8), 0 0 30px rgba(0,212,255,0.5)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(2deg)' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      backgroundImage: {
        'web-pattern': `radial-gradient(circle at 20% 50%, transparent 30%, rgba(255,255,255,0.1) 30.5%),
                        radial-gradient(circle at 80% 50%, transparent 30%, rgba(255,255,255,0.1) 30.5%)`,
        'hero-gradient': 'linear-gradient(135deg, #FF0000 0%, #CC0000 25%, #000080 50%, #0000FF 75%, #FF0000 100%)',
        'card-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
        'cosmic-mesh': 'linear-gradient(45deg, #0F0F23 0%, #1E1B4B 25%, #312E81 50%, #3730A3 75%, #1E40AF 100%)',
        'neon-glow': 'radial-gradient(circle at 50% 50%, rgba(0,212,255,0.3), rgba(99,102,241,0.1), transparent)',
        'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}
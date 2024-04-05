/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      keyframes: {
        pulseFast: {
          '0%': { opacity: 1 },
          '10%': { opacity: 0.8 },
          '20%': { opacity: 0.6 },
          '30%': { opacity: 0.4 },
          '40%': { opacity: 0.2 },
          '50%': { opacity: 0 },
          '60%': { opacity: 0.2 },
          '70%': { opacity: 0.4 },
          '80%': { opacity: 0.6 },
          '90%': { opacity: 0.8 },
          '100%': { opacity: 1 },
        },
        animation: {
          'pulse-fast': 'pulseFast 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;',
        }
      }
    },
  },
  plugins: [],
}


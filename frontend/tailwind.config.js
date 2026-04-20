/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'acheto-red': '#A7001E',
        'acheto-red-2': '#955149',
        'acheto-green': '#7AA95C',
        'acheto-cream': '#E2E9C0',
        'acheto-dark': '#1E0F1C',
        'acheto-muted': '#7a6070',
      },
      animation: {
        'fade-up': 'fadeUp 0.45s ease both',
        'fade-in': 'fadeIn 0.2s ease',
        'slide-in': 'slideIn 0.3s ease',
        'pulse': 'pulse 2s infinite',
        'pop-in': 'popIn 0.5s ease both',
        'float-y': 'floatY 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideIn: {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
        popIn: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '70%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
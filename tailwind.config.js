/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#050507',
          900: '#0b0b0e',
          850: '#111116',
          800: '#18181f',
          700: '#22222a',
        },
        coral: {
          DEFAULT: '#ff3269',
          hover: '#ff2442',
          light: '#ff5c87',
          glow: 'rgba(255, 50, 105, 0.35)',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Montserrat"', '"Plus Jakarta Sans"', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-coral': '0 0 25px rgba(255, 50, 105, 0.35)',
        'glow-coral-lg': '0 0 35px rgba(255, 50, 105, 0.5)',
        'apple-card': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
      },
      backgroundImage: {
        'radial-coral': 'radial-gradient(ellipse 60% 40% at 50% -10%, rgba(255, 50, 105, 0.12), transparent 75%)',
      }
    },
  },
  plugins: [],
}

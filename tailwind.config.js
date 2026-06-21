/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#070A13',
          void: '#05070B',
          ambient: '#0B0F19',
          card: '#0D1325'
        },
        zinc: {
          950: '#090D16'
        },
        tara: {
          silver: '#8A95A5',
          platinum: '#E5ECF4',
          cyan: '#D1F5FF',
          amber: '#E5A93C',
          cream: '#FFFDF9'
        }
      },
      fontFamily: {
        serif: ['Times New Roman', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      letterSpacing: {
        widest: '0.25em',
        epic: '0.4em'
      }
    },
  },
  plugins: [],
}
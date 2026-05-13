/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans:  ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        ink:    '#0d0d0f',
        paper:  '#f5f2ec',
        cream:  '#ede9e0',
        accent: '#e85d2f',
        muted:  '#7a776f',
        border: '#d9d4c8',
      },
    },
  },
  plugins: [],
};
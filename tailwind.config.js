/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#10a37f',
        background: '#0a0a0a',
        surface: '#111111',
        border: '#333333',
        text: {
          primary: '#f0f0f0',
          secondary: '#999999',
          muted: '#666666',
        },
        tier: {
          ss: '#e74c3c',
          s: '#e67e22',
          aplus: '#f1c40f',
          a: '#2ecc71',
          bplus: '#1abc9c',
          b: '#3498db',
          c: '#9b59b6',
        }
      },
      fontFamily: {
        mono: ['"DM Mono"', 'monospace'],
        display: ['"Bebas Neue"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

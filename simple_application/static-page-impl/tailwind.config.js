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
        'custom-color': '#2A2B38',
        'active-green': '#48DA82',
      },
      spacing: {
        '120': '7.5rem',
        '52' : '52px',
        '11' : '11px',
      },
    },
  },
  plugins: [],
}

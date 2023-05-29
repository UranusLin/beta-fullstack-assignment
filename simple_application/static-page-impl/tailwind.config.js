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
        'btn-reject' : "#EF6461",
        'btn-support' : "#15B48E",
        'horizontal-line' : '#B9BACC',
        'progress-bar' : 'rgba(220,221,229,0.1)',
        'progress-bar-green' : 'rgba(21,180,142,0.25)',
        'progress-bar-red' : 'rgba(239,100,97,0.25)',
      },
      spacing: {
        '120': '120px',
        '52' : '52px',
        '11' : '11px',
        '884' : '884px',
        '26' : '26px',
        '100' : '100px',
        '236' : '236px',
        '836' : '836px',
        '500' : '500px',
        '70' : '70px',
        '214' : '214px',
        '804' : '804px',
        '238' : '238px',
        '268' : '268px',
        '1140' : '1140px',
        '1181' : '1181px',
        '360' : '360px',
      },
    },
  },
  plugins: [],
}

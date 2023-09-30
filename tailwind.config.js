/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    spacing: {
      1: '2px',
      2: '4px',
      3: '6px',
      4: '8px',
      5: '10px',
      6: '12px',
      7: '14px',
      8: '16px',
      9: '18px',
      10: '20px',
      11: '22px',
      12: '24px',
    },
    extend: {
      colors: {
        identity: {
          primary: '#DC0A2D',
        },
        pokemon: {
          Bug: '#A7B723',
          Dark: '#75574C',
          Dragon: '#7037FF',
          Electric: '#F9CF30',
          Fairy: '#E69EAC',
          Fighting: '#C12239',
          Fire: '#F57D31',
          Flying: '#A891EC',
          Ghost: '#70559B',
          Normal: '#AAA67F',
          Grass: '#74CB48',
          Ground: '#DEC16B',
          Ice: '#9AD6DF',
          Poison: '#A43E9E',
          Psychic: '#FB5584',
          Rock: '#B69E31',
          Steel: '#B7B9D0',
          Water: '#6493EB',
        },
        grayscale: {
          Dark: '#1D1D1D',
          Medium: '#666666',
          Light: '#E0E0E0',
          Background: '#EFEFEF',
          White: '#FFFFFF',
        },
      },
      font: {
        body: 'arial',
      },
      fontSize: {
        headline: ['24px', { fontWeight: 'Bold', lineHeight: '32px' }],
        subtitle1: ['14px', { fontWeight: 'Bold', lineHeight: '16px' }],
        subtitle2: ['12px', { fontWeight: 'Bold', lineHeight: '16px' }],
        subtitle3: ['10px', { fontWeight: 'Bold', lineHeight: '16px' }],
        body1: ['14px', { fontWeight: 'Regular', lineHeight: '26px' }],
        body2: ['12px', { fontWeight: 'Regular', lineHeight: '26px' }],
        body3: ['10px', { fontWeight: 'Regular', lineHeight: '26px' }],
        caption: ['8px', { fontWeight: 'Regular', lineHeight: '12px' }],
      },
      shadow: {
        shadow1: '0px 1px 3px 1px rgba(0, 0, 0, 0.20)',
        shadow2: '0px 3px 12px 3px rgba(0, 0, 0, 0.20)',
        inner: ' 0px 1px 3px 1px rgba(0, 0, 0, 0.25) inset',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './templates/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        identity: {
          primary: '#DC0A2D',
        },
        pokemon: {
          bug: '#A7B723',
          dark: '#75574C',
          dragon: '#7037FF',
          electric: '#F9CF30',
          fairy: '#E69EAC',
          fighting: '#C12239',
          fire: '#F57D31',
          flying: '#A891EC',
          ghost: '#70559B',
          normal: '#AAA67F',
          grass: '#71CDB2',
          ground: '#DEC16B',
          ice: '#9AD6DF',
          poison: '#A43E9E',
          psychic: '#FB5584',
          rock: '#B69E31',
          steel: '#B7B9D0',
          water: '#6493EB',
        },
        grayscale: {
          dark: '#1D1D1D',
          medium: '#666666',
          light: '#E0E0E0',
          wireframe: '#B8B8B8',
          background: '#EFEFEF',
          white: '#FFFFFF',
        },
      },
      font: {
        body: 'arial',
      },
      fontSize: {
        heading1: ['34px', { fontWeight: 'Bold', lineHeight: '41px' }],
        heading2: ['22px', { fontWeight: 'Bold', lineHeight: '28px' }],
        heading3: ['17px', { fontWeight: 'Bold', lineHeight: '22px' }],
        title: ['32px', { fontWeight: 'Bold', lineHeight: '32px' }],
        headline: ['24px', { fontWeight: 'Bold', lineHeight: '32px' }],
        subtitle1: ['14px', { fontWeight: 'Bold', lineHeight: '16px' }],
        subtitle2: ['12px', { fontWeight: 'Bold', lineHeight: '16px' }],
        subtitle3: ['10px', { fontWeight: 'Bold', lineHeight: '16px' }],
        body: ['15px', { fontWeight: 'Regular', lineHeight: '20px' }],
        body1: ['14px', { fontWeight: 'Regular', lineHeight: '16px' }],
        body2: ['12px', { fontWeight: 'Regular', lineHeight: '16px' }],
        body3: ['10px', { fontWeight: 'Regular', lineHeight: '16px' }],
        caption: ['8px', { fontWeight: 'Regular', lineHeight: '12px' }],
      },
      boxShadow: {
        shadow1: ' 0px 7px 12px 0px rgba(0, 0, 0, 0.07)',
        shadow2: '0px 3px 12px 3px rgba(0, 0, 0, 0.20)',
        inner: ' 0px 1px 3px 1px rgba(0, 0, 0, 0.25) inset',
      },
      width: {
        104: '104px',
        352: '352px',
      },
      height: {
        44: '44px',
        108: '108px',
        220: '220px',
        500: '500px',
      },
    },
  },
  plugins: [],
}

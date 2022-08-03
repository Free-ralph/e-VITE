module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Work Sans', 'sans-serif'],
      body: ['Work Sans', 'sans-serif'],
      cursive : ['Dancing Script', 'cursive'],
    },
    extend: {
      colors: {
        'primary' : '#333333',
        'secondary' : '#DEDEDE'
      },
      fontSize: {
        14: '14px',
      },
      backgroundColor: {
        'primary' : '#333333',
        'secondary' : '#DEDEDE'
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        'primary' : '#333333',
        'secondary' : '#DEDEDE'
      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
      },
      backgroundImage: {
        'home-bg': "url('/public/images/home.jpg')",
        'home-bg2': "url('/public/images/bg2-01.jpg')",
      },
    },
  },
  plugins: [],
};

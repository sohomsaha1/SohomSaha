module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    // fontSize: {
    //   'menu': '2.7rem'
    // },
    extend: {
      spacing: {
        'mainbox': '5.9rem',
        'card': '23.5rem'
      },
      colors: {
        'ddd': '#ededed',
        'cyber': '#11f1f1'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  variants: {
    scrollbar: ['rounded']
  }
}

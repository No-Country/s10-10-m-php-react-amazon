const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: '#52525B',
        secondColorTextForms: '#ADB5BD',
        primary: '#045162',
        secondary: '#FFGBCC',
        neutral1: 'black',
        neutral2: 'grey',
        neutral3: 'white',
        denotativo1: 'red',
        denotativo2: 'yellow',
        denotativo3: 'green'
      },
      fontSize: {
        customSizeTitle: '24px'
      },
      width: {
        widthMainBtn: '156.72px',
        widthCardsHome: '157.17px'
      },
      height: {
        heightMainBtn: '39.78px',
        heightImgCardHome: '115px',
        heightCardsHome: '156.21px',
      },
      typography: {
        fontFamily: {
          main: ['Montserrat', 'Roboto', 'Poppins']
        },
       
      }
      
      
    },
  },
  plugins: [],
});
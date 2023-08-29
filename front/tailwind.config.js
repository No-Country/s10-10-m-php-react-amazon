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
        colorModal: '#D9D9D9',
        colorPrimary: '#045162',
        colorSecondary: '#FFGBCC',
        colorNeutral1: 'black',
        colorNeutral2: '#ADB5BD',
        colorNeutral3: 'white',
        colorDenotativo1: 'red',
        colorDenotativo2: 'yellow',
        colorDenotativo3: 'green'
      },
      fontSize: {
        sizeTitle: '24px',
        sizeSubtitle: '20px',
        sizeText: '16px',
        sizeButtonCTAs: '16px',
        sizeTextButton: '14px',
        sizeLabel: '14px',
        sizePlaceholder: '16px',
        sizeNote: '14px',
        sizeCategory: '16px',
        sizeFilter: '14px'
      },
      fontWeight: {
        weightTitle: 'bold',
        weightSubtitle: 'medium',
        weightText: 'regular',
        weightButtonCTAs: 'bold',
        weightTextButton: 'bold',
        weightLabel: 'medium',
        weightPlaceholder: 'regular',
        weightNote: 'regular',
        weightCategory: 'bold',
        weightFilter: 'medium'
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
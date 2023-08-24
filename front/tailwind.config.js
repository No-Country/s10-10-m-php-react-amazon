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
        heightCardsHome: '156.21px'
      }
    },
  },
  plugins: [],
});
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./content/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:"#2E4059",
        secondary:"#F07A40",
        tertiary:"#EB5454",
        textColor:"#6C757D",
        shadowcolor:"#4535AF",
        light:"#F3E2D9",
        light_2 :"#F4E8F0",
        bgColor_1:"#F5F5F5",
        light_3:"#EADCF5"
      },
      backgroundImage: {
        'flare': "url('/content/assets/img/Flare.png')",
        'flare2': "url('/content/assets/img/Flare_2.png')",
        'backgroundHeader': "url('/content/assets/img/Line.jpg')",
      },
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        'extra-bold': '800',
        black: '900',
      }
    },
  },
  plugins: [],
}


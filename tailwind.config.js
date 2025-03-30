/**@type {import ('tailwindcss').Config} */
module.exports = {
  purge: ["*"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
      mullish: ["Mulish", "sans-serif"],
      mono: ["'Space Mono'", "monospace"], // Add Space Mono
      boldonse: ["Boldonse", "sans-serif"],
    },
    colors: {
      blackgray: "#252328",
      darkgray: "#4a4748",
      gray: "#919091",
      deepBlue: "#02042a",
      lightBlue: "#2b84ea",
      lightBlue300: "#4b94ed",
      lightBlue500: "#0b72e7",
      greenLight: "#61cea6",
      grayText: "#818597",
      lightGray: "#e2e2e2",
      grayBlue: "#344a6c",
      deepBlueHead: "#162f56",
      gray2: "#525a76",
  },},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  purge: ["./src/**/*.tsx", "./src/**/*.html.ejs"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require("@tailwindcss/custom-forms")
  ],
};

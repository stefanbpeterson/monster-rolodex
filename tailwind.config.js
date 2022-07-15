/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'sonic-background': "url('./assets/images/sonic-background.png')"
      })
    },
  },
  plugins: [],
}

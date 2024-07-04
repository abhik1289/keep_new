/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "primary": "#FFC95F",
        "background":"#1B6B93"
      },
      fontFamily: {
        'primary': ['Poppins', 'sans-serif'],
        'secondary': ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
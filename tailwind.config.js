/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-dark": "#1f2335",
        "background": "#24283b",
        "background-highlight": "#292e42",
        "terminal-black": "#414868",
        "foreground": "#c0caf5",
        "foreground-dark": "#a9b1d6",
        "foreground-gutter": "#3b4261",
        "dark3": "#545c7e",
        "comment": "#565f89",
        "dark5": "#737aa2",
        "blue0": "#3d59a1",
        "blue": "#7aa2f7",
        "cyan": "#7dcfff",
        "blue1": "#2ac3de",
        "blue2": "#0db9d7",
        "blue5": "#89ddff",
        "blue6": "#B4F9F8",
        "blue7": "#394b70",
        "gentoo": "#c574dd",
        "magenta": "#bb9af7",
        "magenta2": "#ff007c",
        "purple": "#9d7cd8",
        "orange": "#ff9e64",
        "yellow": "#e0af68",
        "green": "#9ece6a",
        "green1": "#73daca",
        "green2": "#41a6b5",
        "teal": "#1abc9c",
        "red": "#f7768e",
        "red1": "#db4b4b",
      }
    },
  },
  plugins: [],
}

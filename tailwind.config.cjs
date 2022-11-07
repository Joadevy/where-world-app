module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      gridTemplateColumns: {
        mobile: "repeat(auto-fill, minmax(175px, 1fr))",
        desktop: "repeat(auto-fill, minmax(225px, 1fr))",
      },
      colors: {
        "vl-gray-light": "hsl(0, 0%, 98%)", // Light Mode Background
        "vd-blue-light": "hsl(200, 15%, 8%)", // Light Mode Text
        "d-gray-light": "hsl(0, 0%, 52%)", // Light Mode Input

        "vd-blue-dark": "hsl(207, 26%, 17%)", // Dark Mode Background
        white: "hsl(0, 0%, 100%)", // Dark Mode Text & Light Mode Elements
        "d-blue-dark": "hsl(209, 23%, 22%)", // Dark Mode Elements
      },
      fontFamily: {
        nuno: ["Nunito Sans", "Courier New"],
      },
    },
  },
  plugins: [],
};

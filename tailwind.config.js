module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3B999B",
          secondary: "#EE5873",
          accent: "#5778A3",
          neutral: "#E3E4E6",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
}
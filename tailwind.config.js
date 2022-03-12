module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    colors: {
      gray: {
        50: "#E9E9E9",
        100: "#DADADA",
        200: "#7B7A80",
        200: "#7B7A80",
        300: "#211F27",
        400: "#141219",
        500: "#0E0C13",
      },

      white: "#FFFFFF",

      "th-bg": "var(--bg)",
      "th-card": "var(--card)",
      "th-text-primary": "var(--text-primary)",
      "th-text-secondary": "var(--text-secondary)",
    },

    extend: {
      width: {
        screenshot: "493px",
      },
      maxWidth: {
        screenshot: "493px",
        content: "920px",
      },
      borderWidth: {
        6: "6px",
      },
    },
  },
};

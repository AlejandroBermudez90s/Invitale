/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de marca InvitAle
        navy: "#081033",
        "navy-deep": "#0b306d",
        gold: "#c9a300",
        "gold-light": "#e0c04d",
        cream: "#f2ece0",
        ink: "#12162b",
      },
      fontFamily: {
        display: ["var(--font-prata)", "serif"],
        body: ["var(--font-jost)", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      keyframes: {
        revealUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        revealUp: "revealUp 1.1s cubic-bezier(0.4, 0, 0.2, 1) both",
      },
    },
  },
  plugins: [],
};

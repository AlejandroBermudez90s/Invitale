/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta real de marca, muestreada del imagotipo y la tarjeta física:
        gold: "#c9a300", // oro exacto del corazón y el trazo (RGB 204,163,0)
        "gold-light": "#e0c04d",
        night: "#252527", // negro cálido de la trasera de la tarjeta (no azul navy)
        paper: "#fdfaf5", // crema casi blanco de la delantera de la tarjeta
        cream: "#f2ece0", // crema secundario, para dar aire entre bloques sobre "paper"
        ink: "#1c1c1c", // texto sobre fondos claros
      },
      fontFamily: {
        display: ["var(--font-prata)", "serif"],
        body: ["var(--font-jost)", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
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
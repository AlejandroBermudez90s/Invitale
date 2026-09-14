/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
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
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "0.55", transform: "scale(1.08)" },
        },
        growLine: {
          "0%": { transform: "scaleX(0)", opacity: "0" },
          "100%": { transform: "scaleX(1)", opacity: "1" },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(4px)" },
        },
      },
      animation: {
        revealUp: "revealUp 1.8s cubic-bezier(0.4, 0, 0.2, 1) both",
        floatSlow: "floatSlow 8s ease-in-out infinite",
        glowPulse: "glowPulse 9s ease-in-out infinite",
        growLine: "growLine 1.6s cubic-bezier(0.4, 0, 0.2, 1) both",
        bounceSlow: "bounceSlow 2.2s ease-in-out infinite",
      }
    },
  },
  plugins: [],
};
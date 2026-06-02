/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      /* ================= PREMIUM BRAND COLORS ================= */
      colors: {
        brand: {
          navy: "#071739",
          blue: "#3046D3",
          cyan: "#33C7D9",
          red: "#E54B4B",

          dark: "#030B1C",
          light: "#F8FAFC",
          gray: "#94A3B8",

          glowBlue: "#4F6BFF",
          glowCyan: "#6FE7F5",
          glowRed: "#FF6B6B",
        },
      },

      /* ================= FONTS ================= */
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"], // FIXED (was wrong variable)
        body: ["var(--font-dm)", "sans-serif"],
      },

      /* ================= SHADOWS ================= */
      boxShadow: {
        premium: "0 10px 40px rgba(0,0,0,0.25)",
        neonBlue: "0 0 30px rgba(48,70,211,0.45)",
        neonCyan: "0 0 30px rgba(51,199,217,0.35)",
        neonRed: "0 0 30px rgba(229,75,75,0.35)",
      },

      /* ================= BACKGROUNDS ================= */
      backgroundImage: {
        heroGlow:
          "radial-gradient(circle at top right, rgba(51,199,217,0.18), transparent 35%), radial-gradient(circle at bottom left, rgba(229,75,75,0.12), transparent 30%)",

        premiumGradient:
          "linear-gradient(135deg, #071739 0%, #0B1F4D 40%, #3046D3 100%)",
      },

      /* ================= ANIMATIONS ================= */
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite alternate",
      },

      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },

        glow: {
          "0%": { boxShadow: "0 0 15px rgba(51,199,217,0.2)" },
          "100%": { boxShadow: "0 0 35px rgba(51,199,217,0.55)" },
        },
      },

      /* ================= BORDER RADIUS ================= */
      borderRadius: {
        luxury: "28px",
      },

      /* ================= SPACING ================= */
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
    },
  },

  plugins: [],
}

plugins: [require('@tailwindcss/line-clamp')]
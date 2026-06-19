/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        // VOID CORE
        void: "#020617",
        deep: "#0f172a",
        panel: "#111827",

        // RIFT COLORS
        primary: "#2563eb",
        secondary: "#38bdf8",
        arcane: "#7c3aed",

        // ACCENTS
        accent: "#facc15",
        danger: "#ef4444",
        success: "#22c55e",
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },

      boxShadow: {
        glow: "0 0 30px rgba(37, 99, 235, 0.35)",
        rift: "0 0 40px rgba(56, 189, 248, 0.25)",
      },

      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },

      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },

        glow: {
          "0%": { opacity: 0.6 },
          "100%": { opacity: 1 },
        },
      },
    },
  },

  plugins: [],
};

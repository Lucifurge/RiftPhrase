/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        secondary: "#0ea5e9",
        accent: "#facc15",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      boxShadow: {
        glow: "0 0 25px rgba(37, 99, 235, 0.35)",
      },

      animation: {
        float: "float 6s ease-in-out infinite",
      },

      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
      },
    },
  },

  plugins: [],
};

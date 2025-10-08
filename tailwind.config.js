/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        yakaziBlue: "#0F172A",
        yakaziBlueDark: "#1E293B",
        yakaziTurquoise: "#14B8A6",
        yakaziWhite: "#F9FAFB"
      },
      fontFamily: {
        sans: ["Poppins", "Inter", "sans-serif"]
      },
      boxShadow: {
        yakaziGlow: "0 0 20px rgba(20, 184, 166, 0.6)",
        yakaziInner: "inset 0 0 8px rgba(20, 184, 166, 0.5)"
      },
      backgroundImage: {
        "yakazi-gradient": "linear-gradient(90deg, #14B8A6 0%, #0EA5E9 100%)"
      }
    }
  },
  plugins: []
};

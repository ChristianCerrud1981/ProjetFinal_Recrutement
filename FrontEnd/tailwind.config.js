/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Habilita el modo oscuro basado en clases
  theme: {
    extend: {
      colors: {
        // Colores personalizados para tema claro
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
        },
        // Colores para el tema oscuro (se aplicarán automáticamente)
        dark: {
          bg: "#1a1a1a",
          card: "#2d2d2d",
          text: "#e5e5e5",
        },
      },
    },
  },
  plugins: [],
};

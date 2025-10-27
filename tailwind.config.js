// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', // Si usas App Router
  ],
  theme: {
    extend: {
      fontFamily: {
        // Opción 1: Para usarla en elementos específicos, por ejemplo, títulos
        'alfa': ['var(--font-alfa-slab-one)', 'sans-serif'],
        // 'sans-serif' como fallback si la fuente no carga por alguna razón.

        // Opción 2 (menos común para Alfa Slab One por ser "display"):
        // Si quisieras que fuera la fuente principal para todo el sitio, la pondrías en 'sans'
        // sans: ['var(--font-alfa-slab-one)', ...require('tailwindcss/defaultTheme').fontFamily.sans],
      },
    },
  },
  plugins: [],
};
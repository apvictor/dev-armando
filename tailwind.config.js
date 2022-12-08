/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html",
   ],
   theme: {
      extend: {
         colors: {
            purple: "#3A0CA3",
            yellow: "#FFD60A",

            gray: "#858585",
            dark: "#1E1E1E",
            light: "#EEEEEE",

            danger: "#dc3545",
            success: "#28a745",
            warning: "#ffc107",
         }
      },
   },
   darkMode: "class",
   plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'main_color':'#e5e7eb',
         'highlight':'#8b5cf6',
       },
       boxShadow: {
        'shad': '0px 1px 14px 4px rgba(0, 0, 0, 0.38)',
      }
    },
  },
  plugins: [],
};

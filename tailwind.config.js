/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#6176F7', 
        secondary : '#FFA337',
      },
      fontFamily: {
        public: ['Public Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

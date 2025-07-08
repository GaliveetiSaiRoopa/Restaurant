/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        //@media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
        "3xl": "1920px",
      },
      fontFamily: {
        cursive: ['"Pacifico"', "cursive"], // or any other cursive font
        sans: ["Poppins", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      colors: {
        primary: "#1e223d",
        SpaceCadet: "#141C4C",
        CalmWaters: "#F1F4F8",
      },
    },
  },
  plugins: [],
};

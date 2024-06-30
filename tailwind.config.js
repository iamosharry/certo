/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        inset: "inset 0 0 10px rgba(0, 0, 0, 0.5)",
      },
      screens: {
        sm: "360px", // Small screens start at 360px
        md: "768px", // Medium screens start at 768px
        lg: "960px", // Large screens start at 1024px
        xl: "1280px", // Extra large screens start at 1280px
        "2xl": "1440px", // Custom extra large screen at 1440px
      },
    },
  },
  plugins: [],
};

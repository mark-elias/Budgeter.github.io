/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customLightPurple: "#EDEBFF",
        customMediumPurple: "#B8B8FF",
        customPurple: "#9381FF",
      },
    },
  },
  plugins: [],
};

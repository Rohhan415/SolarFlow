/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        PageNotFound: "url(./assets/image3.jpg)",
        ContactPage: "url(./assets/image4.jpg)",
      },
    },
  },
  plugins: [],
};

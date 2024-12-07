import daisyui from "daisyui";
import animations from "@midudev/tailwind-animations";


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#22c55e",
        "primary-focus": "#16a34a",
      },
      backgroundImage:{
        "banner": "url('/r.png')",
      }
    },
  },
  plugins: [daisyui, animations],
  daisyui: {
    themes: ["light", "dark"],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    rtl: false,
    prefix: "",
    logs: true,
  },
};

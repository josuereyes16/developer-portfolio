import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#0066FF",
        darkBg: "#D2D0D0",
      },
      backgroundImage: {
        "gradient-covert": 
        "linear-gradient(90.21deg, rgb(153, 194, 255) -5.91%, rgb(51, 133, 255) 111.58%)",
      },
    },
  },
  plugins: [],
};
export default config;

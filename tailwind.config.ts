import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("tailwindcss-flip"), require("daisyui")],
  daisyui: {
    themes: true,
    darkTheme: "light",
    base: true,
    styled: true,
    utils: true,
    rtl: true,
    prefix: "",
    logs: true,
  },
};
export default config;

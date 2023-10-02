import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        "1": "1px",
      },
      minWidth: {
        "200px": "200px",
      },
    },
    fontFamily: {
      sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
    },
  },
  module: {
    rules: [
      {
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [],
};

export default config;

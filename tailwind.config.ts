import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderWidth: {
        '1': '1px',
      },
      minWidth: {
        '200px': '200px',
      },
    },
  },
  module: {
    rules: [
      {
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'myGreen': '#39B763',
      },
      padding: {
        'pxlg': '50px',
        'pxmd': '30px',
        'pxsm': '10px',
        'pylg': '8px',
        'pymd': '6px',
        'pysm': '7px',
      },
    },
  },
  plugins: [],
};

export default config;

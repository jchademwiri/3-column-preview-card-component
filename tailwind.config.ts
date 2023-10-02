import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brightOrange: 'hsl(31, 77%, 52%)',
        darkCyan: 'hsl(184, 100%, 22%)',
        veryDarkCyan: 'hsl(179, 100%, 13%)',
        transparentWhite: 'hsla(0, 0%, 100%, 0.75)',
        veryLightGray: 'hsl(0, 0%, 95%)',
      },
    },
  },
  plugins: [],
};
export default config;

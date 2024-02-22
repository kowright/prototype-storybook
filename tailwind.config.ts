import type { Config } from 'tailwindcss'

const colorTokens = require('./build/type/colors.json');
const spacingTokens = require('./build/type/spacing.json');

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
          backgroundImage: {
              "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
              "gradient-conic":
                  "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          },
          spacing: spacingTokens,
          colors: colorTokens,
    },
  },
  plugins: [],
};

export default config;
 
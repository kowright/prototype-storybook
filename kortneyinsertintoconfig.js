const fs = require('fs');
const colorTokens = require('./build/types/colors.json');
const spacingTokens = require('./build/types/spacing.json');
//const tailwindConfig = require('./tailwind.config.ts'); TODO reading existing file gives error on first line. using below for testing

const tailwindConfig = { //test config until can add to real file OR just make a new one 
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
            spacing: {
                'brand-sm': '500px',
            },
            colors: {
              
            },

        },
    },
    plugins: [],
};

//might need to check if there's already these section existing? 
tailwindConfig.theme.extend.colors = {
    ...tailwindConfig.theme.extend.colors,
    ...colorTokens,
}

tailwindConfig.theme.extend.spacing = {
    ...spacingTokens,
}

// Write the updated tailwind config back to the file
fs.writeFileSync('./build/config/tailwind.config3.ts', `import type { Config } from "tailwindcss"; \nconst config: Config = ${JSON.stringify(tailwindConfig, null, 2)};\n export default config;`);

console.log("tailwind config file made");
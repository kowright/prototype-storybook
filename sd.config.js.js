const StyleDictionaryModule = require('style-dictionary')
const { makeSdTailwindConfig } = require('sd-tailwindcss-transformer')

const StyleDictionary = StyleDictionaryModule.extend(
    makeSdTailwindConfig({
        type: 'all',
        source: [`./tokens.json`],
        tailwind: {
            content: [
                "./pages/**/*.{js,ts,jsx,tsx,mdx}",
                "./components/**/*.{js,ts,jsx,tsx,mdx}",
                "./app/**/*.{js,ts,jsx,tsx,mdx}",
                "./stories/**/*.{js,ts,jsx,tsx}",
            ],
        },
    })
)

StyleDictionary.buildAllPlatforms()
const StyleDictionary = require('style-dictionary');
const { registerTransforms } = require('@tokens-studio/sd-transforms');

registerTransforms(StyleDictionary);

StyleDictionary.registerFilter({
    name: 'spacing-filter',
    matcher: (token) => {
        return token.type === 'spacing';
    },
});

StyleDictionary.registerFilter({
    name: 'color-filter',
    matcher: (token) => {
        return token.type === 'color';
    },
});

const sd = StyleDictionary.extend({
    source: ['tokens.json'],
    platforms: {
        spacing: {
            buildPath: 'build/type/',
            transforms: [
                "ts/size/px",
                "name/cti/kebab"
            ],
            files: [
                {
                    destination: 'spacing.json',
                    format: 'json/flat',
                    filter: 'spacing-filter',
                },
            ],
        },
        color: {
            buildPath: 'build/type/',
   
            files: [
                {
                    destination: 'colors.json',
                    format: 'json/nested',
                    filter: 'color-filter',
                },
            ],
        },
    },
});

sd.buildAllPlatforms();

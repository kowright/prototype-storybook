This is a [Storybook](https://storybook.js.org/) project that has Next.js, Javascript, Typescript, Style Dictionary & ReactJS bootstrapping. 

## Getting Started

Use the commands below in the root of the project to see storybook:
```bash
node tokensToTailwindConverter.js
# This is the main script to convert the design tokens into tailwindCSS and create json files for the tailwind config to reference. 
npm run storybook
# This will run storybook with the newly created files.

```

The project will use design tokens generated [Style Dictionary](https://amzn.github.io/style-dictionary/#/) and run them through a script that is compatible with Tailwind (usable in 'tailwind.config.ts'). This will allow designers to use Figma and Style Dictionary to create variables and themes in their environment and be able to translate that into a dev environment in Storybook to make sure both parties are operating on the same information. 

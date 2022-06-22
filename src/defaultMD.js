import favicon from "./favicon.svg"

const defaultMD = `![favicon](${favicon}) 
#### Scaffold a "Vite+React+Tailwind" project
---
1. Run \`npm create vite@latest\` to create a brand new React project with _Vite_.
2. Install _TailwindCSS_ and its peer dependencies by running \`npm install -D tailwindcss postcss autoprefixer\`.
3. Running \`npx tailwindcss init\` creates the "tailwind.config.js" file.
4. Modify "tailwind.confi.js" file to be: \`module.exports = {content:["./src/**/*.{js,jsx}"], theme: {extend: {}}, plugins: []}\`.
5. Create a "postcss.config.js" file and add the following code: \`module.exports = {plugins: {tailwindcss: {}, autoprefixer: {}}}\`.
6. Add the Tailwind directives to "index.css" file: \`@tailwind base; @tailwind components; @tailwind utilities;\`.
7. Run \`npm run dev\`.
\n**Enjoy!** 😉
\n>“Awesome quote by” - **John Doe**
\nGreat link: [example.com](https://example.com)`

export default defaultMD
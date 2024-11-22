# BDP-UI

**An open-source UI component library for the Bitcoin Dev Project (BDP) Apps**

## Installation

To install the BDP-UI library, you can use the following command:

```bash
yarn add @bitcoin-dev-project/bdp-ui
```
or 
```bash
npm i @bitcoin-dev-project/bdp-ui
```

## Usage

Once installed, you can import the components or icons you need from the library:

## CSS workaround
Kindly import the css file to your global entry point.
Usually, that is `app/layout.tsx`

_note: import the css before your global css so if there are any conflicts your css takes precedence_
```tsx
// app/layout.tsx
...
import "@bitcoin-dev-project/bdp-ui/styles.css"
import "./globals.css";
...
```

If you use tailwind for styling, also point your tailwind config to the library
i.e
```tsx
// tailwind.config.ts
...
const config: Config = {
  darkMode: "class",
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/@bitcoin-dev-project/bdp-ui/dist/**/*.{js,mjs,jsx,ts,tsx}", // add it here
  ],
...
```

### Components
Here is how you can import and use components

```jsx
import { Button } from '@bitcoin-dev-project/bdp-ui';

function App() {
  return (
    <Button>Hello, World!</Button>
  );
}
```

### Icons
Here is how you can import icons

```jsx
import { GithubIcon } from '@bitcoin-dev-project/bdp-ui/icons';

function App() {
  return (
    <GithubIcon className="w-[40px] text-black" />
  );
}
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details 

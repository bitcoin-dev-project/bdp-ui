# BDP-UI

**An open-source UI component library for the Bitcoin Dev Project (BDP) Apps**

## Installation

To install the BDP-UI library, you can use the following command:

```bash
yarn add github:bitcoin-dev-project/bdp-ui 
```
or 
```bash
npm install github:bitcoin-dev-project/bdp-ui
```

## Usage

Once installed, you can import the components you need from the library:

note: you can set up an entry point in your project config to `/dist` to fix the autocomplete and linting issues. Or in typescript you can use the `paths` property in tsconfig.json to fix the import paths.

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "bdp-ui/*": ["./node_modules/bdp-ui/dist/*"]
    }
  }
}
```

### Components

```jsx
import { Button } from 'bdp-ui';

function App() {
  return (
    <Button>Hello, World!</Button>
  );
}
```

### Icons
```jsx
import { GithubIcon } from 'bdp-ui/icons';

function App() {
  return (
    <GithubIcon className="w-[40px] text-black" />
  );
}
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details 
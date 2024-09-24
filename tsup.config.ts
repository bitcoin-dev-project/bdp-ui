import { defineConfig } from 'tsup';
import fs from 'fs';

export default defineConfig({
  entry: ['src/index.ts', 'src/icons.ts'],
  format: ['cjs', 'esm'],
  outDir: 'dist',
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  injectStyle: false,
  async onSuccess() {
    await fs.promises.copyFile('src/styles/tailwind.output.css', 'dist/styles.css');
  },
});
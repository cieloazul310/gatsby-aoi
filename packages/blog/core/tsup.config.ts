import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src'],
  clean: true,
  target: 'es2019',
  outDir: 'lib',
  tsconfig: "./tsconfig.json",
});

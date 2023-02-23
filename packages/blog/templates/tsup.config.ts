import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src'],
  clean: true,
  target: 'es2019',
  outDir: 'lib',
  dts: true,
  tsconfig: './tsconfig.json',
});

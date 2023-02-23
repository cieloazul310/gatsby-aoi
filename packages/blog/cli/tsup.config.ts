import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src'],
  clean: true,
  target: 'es2020',
  outDir: 'lib',
});

import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/**/index.ts', 'src/index.react-server.ts', 'src/utils.ts'],
  format: ['cjs', 'esm'],
  clean: true,
  dts: true,
  minify: true,
  sourcemap: true,
  splitting: true
});

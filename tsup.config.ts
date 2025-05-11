import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs'],
  clean: true,
  dts: true,
  outDir: 'dist',
  target: 'node14',
  shims: true,
  banner: {
    js: '#!/usr/bin/env node',
  },
});

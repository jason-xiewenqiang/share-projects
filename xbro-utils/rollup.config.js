import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import tarser from '@rollup/plugin-terser';

export default {
  input: './src/index.ts',
  output: [
    {
      format: 'umd',
      file: 'lib/index.umd.js',
      name: 'XbroUtils',
      // plugins: [tarser()],
    },
    {
      format: 'esm',
      file: 'lib/index.js',
      // plugins: [tarser()],
    },
    {
      format: 'iife',
      file: 'lib/index.iife.js',
      name: 'XbroUtils',
      // plugins: [tarser()],
    },
    {
      format: 'cjs',
      file: 'lib/index.cjs.js',
      // plugins: [tarser()],
    },
  ],
  plugins: [
    nodeResolve(),
    json(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json', sourceMap: false }),
  ],
};

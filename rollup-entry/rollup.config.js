import { nodeResolve as resolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import babel from '@rollup/plugin-babel';
import pkg  from './package.json' assert { type: "json" };
import clear from 'rollup-plugin-clear';

console.log(`\n${pkg.name}-${pkg.version}\n`);

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/inde-cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/index.js',
      format: 'umd',
      name: 'Entry',
      plugins: [terser()]
    },
    {
      file: 'dist/index-iife.js',
      format: 'iife',
    },
  ],
  plugins: [
    clear({ targets: ['dist'] }),
    json(),
    resolve(),
    commonjs(),
    babel({ babelHelpers: 'bundled' })
  ]
}
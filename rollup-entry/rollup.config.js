import { nodeResolve as resolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  entry: 'src/index.js',
  output: [],
  plugins: [
    resolve(),
    commonjs(),
  ]
}
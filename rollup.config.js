import json from 'rollup-plugin-json';
import typescript from 'rollup-plugin-typescript2';
import node from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs'
import nodeBuiltins from 'builtin-modules';

module.exports = {
  input: 'index.ts',
  external: nodeBuiltins,
  output: [
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs',
      sourcemap: 'inline'
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'esm',
      sourcemap: 'inline'
    }
  ],
  plugins: [
    json(),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          module: "es2015"
        }
      }
    }),
    node(),
    commonjs({
      namedExports: {
        'pg-copy-streams': ['from'],
        'winston': ['createLogger', 'format', 'transports']
      }
    })
  ]
};

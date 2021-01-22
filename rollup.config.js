import { name, version, description } from './package.json'

const banner = `/* ${name} version v${version}, ${description} */`

/** @type {import('rollup').RollupOptions} */
const config = {
  input: 'src/index.ts',
  output: [
    {
      format: 'es',
      file: `dist/${name}.js`,
      banner,
    }
  ],
  plugins: [
    require('@rollup/plugin-json')(),
    require('@rollup/plugin-typescript')(),
    require('@rollup/plugin-commonjs')(),
    require('@rollup/plugin-node-resolve').nodeResolve(),
    require('rollup-plugin-progress')()
    // babel({
    //   babelHelpers: 'runtime'
    // })
  ]
}

export default config
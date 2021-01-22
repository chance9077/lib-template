module.exports = function(config) {
  config.set({
    basePath: '.',
    frameworks: ['mocha'],
    files: [
      './**/*.spec.ts',
    ],
    exclude: [
    ],
    preprocessors: {
      './**/*.spec.ts': ['rollup']
    },
    rollupPreprocessor: {
      plugins: [
        require('@rollup/plugin-json')(),
        require('@rollup/plugin-commonjs')(),
        require('@rollup/plugin-typescript')({
          tsconfig: './tsconfig.json'
        }),
        require('@rollup/plugin-node-resolve').nodeResolve(),
      ],
      output: {
        format: 'iife'
      }
    },
    reporters: ['progress', 'mocha'],
    port: 9876,
    colors: true,
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}

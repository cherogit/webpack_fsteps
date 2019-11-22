const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  plugins: [
    new CopyWebpackPlugin([
      {
        from: `${PATHS.src}/assets/img`,
        to: `${PATHS.dist}img`
      },
      {
        from: `${PATHS.src}/assets/fonts`,
        to: `${PATHS.dist}fonts`
      },
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig)
})

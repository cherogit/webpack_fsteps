const webpack = require('webpack'); // создается для регистрации плагинов.
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf')

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js'
    }
  },
  devtool: 'cheap-module-eval-source-map', // для быстрой сборки карты сайта.
  devServer: {
    contentBase: baseWebpackConfig.externals.paths.dist,
    port: 3000,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    })
  ]
})

module.exports = new Promise((resolve, reject) => { 
  resolve(devWebpackConfig)
})
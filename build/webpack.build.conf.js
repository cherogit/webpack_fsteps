const path = require('path')
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const buildWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    plugins: [
        new CopyWebpackPlugin([
            {
                from: path.join(__dirname, '../src/assets/img'),
                to: path.join(__dirname, '../../dist/img')
            },
            {
                from: path.join(__dirname, '../src/assets/fonts'),
                to: path.join(__dirname, '../../dist/fonts')
            },
        ])
    ]
})

module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConfig)
})

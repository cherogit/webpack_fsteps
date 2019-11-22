const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf')
const path = require('path')

const buildServerWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    entry: {
        app: path.join(__dirname, './../src/server.js'),
    },
    output: {
        filename: 'bundle_server.js',
        path: path.join(__dirname, './../../dist/js/'),
    },
    plugins: []
})

module.exports = new Promise((resolve, reject) => {
    resolve(buildServerWebpackConfig)
})
const webpack = require('webpack'); // создается для регистрации плагинов.
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.runtime.js'
        }
    },
    devtool: 'cheap-module-eval-source-map', // для быстрой сборки карты сайта.
    devServer: {
        contentBase: baseWebpackConfig.externals.paths.dist,
        port: 3000,
        writeToDisk: true,
        overlay: {
            warnings: true,
            errors: true
        },
    },

    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        }),
        new BrowserSyncPlugin({
                host: 'localhost',
                port: 3000,
                proxy: 'http://vertex-club.local',
                files: [
                    {
                        match: ['./src'],
                        fn(event, file) {
                            if (event === 'change') {
                                const bs = require('browser-sync').get('bs-webpack-plugin');
                                bs.reload();
                            }
                        },
                    },
                ],
            },
            {
                reload: false,
            }
        ),
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
    resolve(devWebpackConfig)
})
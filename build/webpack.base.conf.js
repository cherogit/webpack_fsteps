const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')
const {VueLoaderPlugin} = require('vue-loader')

const PATHS = {
    src: path.join(__dirname, '../src'),
    template: path.join(__dirname, '../../'),
    dist: 'dist/'
}

module.exports = {
    externals: { // для доступа к PATHS из других configs
        paths: PATHS
    },
    watch: true,
    entry: {
        bundle: `${PATHS.src}/entry-client.js`, // путь к index.js `${PATHS.src}/index.js`
    },
    output: {
        filename: `${PATHS.dist}js/[name].js`, // на выходе будет файл app.js это делается для множественных точек входа
        path: PATHS.template,
        publicPath: '/'
    },
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             vendor: {
    //                 name: 'vendors',
    //                 test: /node_modules/,
    //                 chunks: 'all',
    //                 enforce: true
    //             }
    //         }
    //     }
    // },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/' // Хватит исключения модулей, так как большинство библиотек под babel'ем.
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loader: {
                        scss: 'vue-style-loader!css-loader!sass-loader'
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader, // Лоадер - который позволяет разделять 'js' и 'css' файлы при 'import' в 'index.js'.
                    {
                        loader: 'css-loader',
                        options: {sourceMap: true}
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {
                                path: './postcss.config.js'
                            }
                        }
                    }, {
                        loader: 'sass-loader',
                        options: {sourceMap: true}
                    }
                ],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-sprite-loader',
                        options: {
                            extract: true,
                            spriteFilename: './dist/sprite/icons.svg',
                            esModule: false
                        }
                    },
                    {
                        loader: 'svgo-loader',
                        options: {
                            plugins: [
                                {removeTitle: true},
                                {convertColors: {shorthex: false}},
                                {convertPathData: false}
                            ]
                        }
                    }
                ]
            },
            // {
            //     test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            //     loader: 'file-loader',
            //     options: {
            //         name: '[name].[ext]'
            //     }
            // },
            // {
            //     test: /\.(png|jpg|jpeg|gif|svg)$/,
            //     loader: 'file-loader',
            //     options: {
            //         name: '[name].[ext]'
            //     }
            // }
        ]
    },
    resolve: {
        extensions: ['.js', '.scss'],
        alias: {
            '~': 'src',
            '@components': path.join(__dirname, '../src/components'),
            '@general': path.join(__dirname, '../src/general'),
            '@fonts': path.join(__dirname, '../src/assets/fonts'),
            'vue$': 'vue/dist/vue.min.js'
        }
    },
    plugins: [ // Регистрация плагинов.
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: `template_styles.css`,
            path: path.join(__dirname, '../../'),
        }),
        new webpack.ProvidePlugin({
            Vue: 'vue'
        }),
        new SpriteLoaderPlugin({
            plainSprite: true,
            spriteAttrs: {
                id: 'my-custom-sprite-id'
            }
        }),
    ],
}
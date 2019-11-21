const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

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
        app: PATHS.src, // путь к index.js `${PATHS.src}/index.js`
    },
    output: {
        filename: `${PATHS.dist}js/[name].js`, // на выходе будет файл app.js это делается для множественных точек входа
        path: PATHS.template,
        publicPath: '/'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendors',
                    test: /node_modules/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/' // Хватит исключения модулей, так как большинство библиотек под babel'ем.
            }, {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loader: {
                        scss: 'vue-style-loader!css-loader!sass-loader'
                    }
                }
            }, {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader, // Лоадер - который позволяет разделять 'js' и 'css' файлы при 'import' в 'index.js'.
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
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
                        options: { sourceMap: true }
                    }
                ],
            }, {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }, {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }
        ]
    },
    resolve: {
        alias: {
            '~': 'src',
            'vue$': 'vue/dist/vue.min.js'
        }
    },
    plugins: [ // Регистрация плагинов.
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: `${PATHS.dist}css/template_styles.css`,
        }),
        // new HtmlWebpackPlugin({
        //     template: `${PATHS.src}/index.html`,
        //     filename: './index.html',
        //     inject: false
        // }),
        new CopyWebpackPlugin([
            {
                from: `${PATHS.src}/assets/img`,
                to: `${PATHS.dist}img`
            },
            {
                from: `${PATHS.src}/assets/fonts`,
                to: `${PATHS.dist}fonts`
            },
            // {
            //     from: `${PATHS.src}/static`,
            //     to: `../`
            // }
        ])
    ],
}
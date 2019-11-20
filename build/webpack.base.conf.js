const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    assets: 'assets/'
}

module.exports = {
    externals: { // для доступа к PATHS из других configs
        paths: PATHS
    },


    watch: true,
    entry: {
        app: PATHS.src // путь к index.js `${PATHS.src}/index.js`
    },
    output: {
        filename: `${PATHS.assets}js/[name].js`, // на выходе будет файл app.js это делается для множественных точек входа
        path: PATHS.dist,
        publicPath: '/'
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/' // Хватит исключения модулей, так как большинство библиотек под babel'ем.
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
                                path: `${PATHS.src}/js/postcss.config.js`
                            }
                        }
                    }, {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }
        ]
    },
    plugins: [ // Регистрация плагинов.
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}css/[name].css`,
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/index.html`,
            filename: './index.html'
        }),
        new CopyWebpackPlugin([
            {
                from: `${PATHS.src}/img`,
                to: `${PATHS.assets}img`
            },
            {
                from: `${PATHS.src}/static`,
                to: ``
            }
        ])
    ],
}
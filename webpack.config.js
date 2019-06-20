const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    watch: true,
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].js', // на выходе будет файл app.js это делается для множественных точек входа
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist'
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
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ],
            }
        ]
    },
    devServer: {
        overlay: true // Show errors on browser
    },
    plugins: [ // Регистрация плагинов.
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
}
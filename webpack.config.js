const path = require('path')

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].js', // на выходе будет файл app.js это делается для множественных точек входа
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist'
    },
    devServer: {
        overlay: true // Show errors on browser
    }
}
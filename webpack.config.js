let path = require('path');

module.exports = {

    watch: true, // следить за изменениями в файлах
    watchOptions: {
        aggregateTimeout: 100 // т.е. пересобирать файлы начнет только спустя указанное в миллисекундах время (в данном случае 100)
    },
    mode: 'development',
    entry: "./app/app.jsx", // входная точка - исходный файл
    output: {
        path: path.resolve(__dirname, 'public/source'),
        publicPath: "/source/",
        filename: "bundle.js"
    },
    module: {
        rules: [   //загрузчик для jsx
            {
                test: /\.jsx?$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options: {
                    presets: ["env", "react"]    // используемые плагины
                }
            },
            {test: /\.less$/,
                use: [{loader: "style-loader"}, {
                    loader: "css-loader",
                    options: {sourceMap: true}
                }, {loader: "less-loader", options: {sourceMap: true}}]
            }
        ]
    },
    devServer: {
        proxy: {}
    }
}
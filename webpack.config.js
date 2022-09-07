const path = require("path")

module.exports = {
    mode: "development",
    devtool: false,
    entry: "./src/static/assets/js/src/app.js",
    output: {
        path: path.resolve(__dirname, 'src/static/assets/js/dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }]
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    }
}
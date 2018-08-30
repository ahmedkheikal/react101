var webpack = require('webpack');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + "/dist/assets",
        filename: "bundle.js",
        publicPath: "assets"
    },
    devServer: {
        inline: true,
        hot: true,
        contentBase: './dist',
        port: 8800,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                query: {
                    presets: ["latest", "stage-0", "react"]
                }
            },
            // {
            //     test: /\.json$/,
            //     exclude: /(node_modules)/,
            //     loader: 'json-loader'
            // },
            {
                test: /\.css$/,
                exclude: /(node_modules)/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules)/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]

    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    mode: "development",
    context: this.context || this.rootContext || this.contextm
}

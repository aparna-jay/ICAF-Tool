
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack')
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    mode: 'development',
    output: {
        filename: "bundle.[hash].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: 'auto'
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        })
    ],
    resolve: {
        modules: [__dirname, "src", "node_modules"],
        extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: require.resolve("babel-loader"),
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.png|svg|jpg|gif$/,
                use: ["file-loader"],
            },
        ],
    },
};

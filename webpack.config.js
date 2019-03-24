const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry : '/',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'disct')
    },
    context: path.resolve(__dirname, './src/client/'),
    plugins: [
        new HtmlWebpackPlugin({
            template: './template/index.html'
        }),
        new CleanWebpackPlugin(['dist']),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, '/public/assets'),
        open: true,
        port: 5000,
        compress: true,
        proxy: {
            "/api": "http://localhost:5000"
        }
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },

    module: {
        rules:[
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: './assets'
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                    // you can specify a publicPath here
                    // by default it use publicPath in webpackOptions.output
                    publicPath: path.resolve(__dirname, 'public')
                    }
                },
                "css-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: [/node_modules/, /backend_src/, /serve.js/],
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env", "react"],
                        "plugins": ["transform-class-properties", "transform-object-rest-spread"]
                    }
                }
            }
        ]
    }
}
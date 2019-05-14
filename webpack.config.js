var webpack = require('webpack');
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var nodeExternals = require('webpack-node-externals');
const LoadablePlugin = require('@loadable/webpack-plugin')

var webpackClient = {
    context: path.resolve(__dirname, './src/client'),
    entry :  {
        client: './client.js'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'public')
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new CleanWebpackPlugin(['public']),
        new MiniCssExtractPlugin({
            filename: "style.css",
            chunkFilename: "[id].css"
        }),
        new webpack.DefinePlugin({
            __isBrowser__: true
        }),
        new LoadablePlugin()
    ],
    devServer: {
        contentBase: path.resolve(__dirname, '/public/'),
        open: true,
        port: 3000,
        compress: true
    },
    module: {
        rules:[
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: [{
                    loader: 'file-loader!isomorphic',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '/assets',
                        publicPath: path.resolve('/assets')
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
                        presets: ["@babel/env", "@babel/react"],
                        "plugins": ["transform-class-properties", "transform-object-rest-spread", "@loadable/babel-plugin"]
                    }
                }
            }
        ]
    }
};

var webpackServer = {
    target: 'node',
    entry :  './src/server/serve.js',
    output : {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '../public',
        filename: 'server.bundle.js'
    },
    externals: [nodeExternals()],
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new MiniCssExtractPlugin({
            filename: "style.css"
        }),
        new webpack.DefinePlugin({
            __isBrowser__: false
        }),
        new LoadablePlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: [{
                    loader: 'file-loader'
                }]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/env", "@babel/react"],
                        "plugins": ["transform-class-properties", "transform-object-rest-spread", "@loadable/babel-plugin"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    "css-loader"
                ]
            },
        ]
    }
};

module.exports = [webpackClient, webpackServer];


// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//
// module.exports = {
//     entry : '/',
//     output: {
//         filename: '[name].bundle.js',
//         path: path.resolve(__dirname, 'dist')
//     },
//     context: path.resolve(__dirname, './src/client/'),
//     plugins: [
//         // new HtmlWebpackPlugin({
//         //     template: './template/index.html'
//         // }),
//         new CleanWebpackPlugin(['dist']),
//         new MiniCssExtractPlugin({
//             filename: "[name].css",
//             chunkFilename: "[id].css"
//         })
//     ],
//     devServer: {
//         contentBase: path.resolve(__dirname, '/public/assets'),
//         open: true,
//         port: 5000,
//         compress: true,
//         proxy: {
//             "/api": "http://localhost:5000"
//         }
//     },
//     optimization: {
//         splitChunks: {
//             chunks: 'all'
//         }
//     },
//
//     module: {
//         rules:[
//             {
//                 test: /\.(jpg|png|gif|svg)$/,
//                 use: [{
//                     loader: 'file-loader',
//                     options: {
//                         name: '[name].[ext]',
//                         outputPath: './assets'
//                     }
//                 }]
//             },
//             {
//                 test: /\.css$/,
//                 use: [
//                 {
//                     loader: MiniCssExtractPlugin.loader,
//                     options: {
//                     // you can specify a publicPath here
//                     // by default it use publicPath in webpackOptions.output
//                     publicPath: path.resolve(__dirname, 'public')
//                     }
//                 },
//                 "css-loader"
//                 ]
//             },
//             {
//                 test: /\.js$/,
//                 exclude: [/node_modules/, /src/serve.js/],
//                 use: {
//                     loader: "babel-loader",
//                     options: {
//                         presets: ["env", "react"],
//                         "plugins": ["transform-class-properties", "transform-object-rest-spread"]
//                     }
//                 }
//             }
//         ]
//     }
// }

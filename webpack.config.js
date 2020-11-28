const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const htmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: './src/shop.js',
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'shop.js'
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm.js'
        },
        extensions: ["*", ".js", ".vue", ".json"],
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader'
                }]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'babel-loader' }
                ]
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    "postcss-loader",
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|swg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
            favicon: "./public/favicon.ico",
        }),
    ]
}
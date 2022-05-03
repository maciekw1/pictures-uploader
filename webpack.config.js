const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
    mode: 'development',

    entry: './js/main.js',

    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '',
        filename: 'bundle.js'
    },

    devServer: {
        static: './build',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass')
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        })
    ],
};

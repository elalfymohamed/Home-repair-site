const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(css|s(c|a)ss)$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif|ico|webp|jpeg)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'images',
                    name: '[path][contenthash].[ext]',
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/index.html',
        }),
    ],
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    },

};

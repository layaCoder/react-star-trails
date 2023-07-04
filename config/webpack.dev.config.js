const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    devtool: 'eval-cheap-module-source-map',
    mode: 'development',
    devServer: {
        static: { directory: path.join(__dirname, 'dist') },
        port: 9000,
        compress: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader', // 将 JS 字符串生成为 style 节点
                    'css-loader', // 将 CSS 转化成 CommonJS 模块
                    'postcss-loader',
                ],
            },
            {
                test: /\.less$/,
                use: ['style-loader',
                    'css-loader',
                    'less-loader',
                    'postcss-loader',],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            inject: 'body',
            hash: false,
        }),
    ],
});
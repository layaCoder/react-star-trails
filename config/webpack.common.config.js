const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, '../dist'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            '@babel/plugin-transform-runtime',
                            '@babel/plugin-proposal-class-properties',
                        ],
                    },
                },
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'images',
                    limit: 8192,
                },
            },
        ],
    },
    resolve: {
        // -extensions: 如果有多个文件有相同的名字，但后缀名不同，webpack 会解析列在数组首位的后缀的文件 并跳过其余的后缀。
        //               使用此选项会 覆盖默认数组，这就意味着 webpack 将不再尝试使用默认扩展来解析模块。
        // -modules: 如果你想要添加一个目录到模块搜索目录，此目录优先于 node_modules/ 搜索。
        // -alias: 创建 import 或 require 的别名，来确保模块引入变得更简单。例如，一些位于 src/ 文件夹下的常用模块
        extensions: ['.js', '.jsx', '.json', '.less'],
        modules: [path.resolve(__dirname, '../src'), 'node_modules'],
        alias: {
            $components: path.join(__dirname, '../src/components'),
            $assets: path.join(__dirname, '../src/assets'),
            $pages: path.join(__dirname, '../src/pages'),
            $util: path.join(__dirname, '../src/util'),
            $mock: path.join(__dirname, '../src/mock'),
        }
    }
};
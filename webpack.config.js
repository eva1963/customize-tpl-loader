
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {resolve} = require('path');

// 引入包分析插件
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// // 引入打包进度插件
// const ProgressBarPlugin = require('progress-bar-webpack-plugin');
// // 引入打包大小分析插件
// const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
// 引入打包速度分析插件
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
// 引入打包体积分析插件
// const { BundleStatsWebpackPlugin } = require('bundle-stats-webpack-plugin');


// 使用打包速度分析插件
const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap({
    mode: 'development',
    entry: resolve(__dirname, 'src/app.js'),
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // 引入loader 方案1
    resolveLoader: {
        modules: ['node_modules', resolve(__dirname, 'loaders')]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['thread-loader', 'cache-loader', 'babel-loader']
            },
        {
            test: /\.tpl$/,
            use: [
                'babel-loader',
                {
                    // 引入loader 方案2
                    // loader: resolve(__dirname,'./loaders/tpl-loader'),

                    // 引入loader 方案1
                    loader: 'tpl-loader',
                    options: {
                        log: true
                    }
                }
            ]
        }
        ]
    },
    devtool: 'source-map',
    devServer: {
        port: 3333
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname,'index.html')
        })
    ]
})
/**
 * Created by cendawei on 2017/4/18.
 */
var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var dirs = fs.readdirSync(path.resolve(__dirname, '../js/views/'));
var entries = {};
dirs.forEach(function (dir) {
    entries[dir] = './js/views/' + dir + '/index.js';
})

var baseConfig = {
    entry: entries,
    output: {
        path: path.resolve(__dirname, '../build/js/'),
        filename: '[name].[chunkhash:8].js',
        publicPath: '/build/js/',
        chunkFilename: '[id].chunk.[chunkhash:8].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|libs)/,
                loader: 'babel-loader'
            },
            {
                test: /\.art$/,
                loader: "art-template-loader"
            }
        ]
    },
    externals: {
        'jquery': 'jQuery'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        'alias': {
            'api': path.resolve(__dirname, '../js/core/api.js'),
            'validate': path.resolve(__dirname, '../js/core/validate.js'),
            'ui': path.resolve(__dirname, '../js/core/ui.js'),
            'utils': path.resolve(__dirname, '../js/core/utils.js'),
            'templates': path.resolve(__dirname, '../templates')
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: process.env.NODE_ENV === 'product' ? 'commons.[chunkhash:8].js' : 'commons.js',
            minChunks: Math.ceil(Object.keys(entries).length / 2)
        })
        /*new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, '../../views/common/header.html'),
            template: '../templates/common/header.html',
            inject: true,
            chunks: ['commons']
        })*/
    ]
}

Object.keys(entries).forEach(function (file) {
    var filename = file + '/index.html';
    baseConfig.plugins.push(new HtmlWebpackPlugin({
        filename: path.resolve(__dirname, '../../views/', filename),
        template: '../templates/' + file + '/index.html',
        inject: "body",
        chunks: ['commons', file]
    }))
})

module.exports = baseConfig;
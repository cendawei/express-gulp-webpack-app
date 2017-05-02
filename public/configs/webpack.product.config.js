/**
 * Created by cendawei on 2017/4/18.
 */
var merge = require('webpack-merge');
var webpack = require('webpack');
var path = require('path');

var baseConfig = require('./webpack.base.config');
var prodConfig = merge({}, baseConfig, {
    output: {
        path: path.resolve(__dirname, '../../statics/build/js/'),
        filename: '[name].[chunkhash:8].js',
        publicPath: '/webroot/build/js/',
        chunkFilename: '[id].chunk.[chunkhash:8].js'
    }
});
prodConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
);

module.exports = prodConfig;
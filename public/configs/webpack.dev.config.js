/**
 * Created by cendawei on 2017/4/18.
 */
var merge = require('webpack-merge');

var baseConfig = require('./webpack.base.config');
var devConfig = merge({
    devtool: 'source-map'
}, baseConfig, {
    output: {
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    }
})

module.exports = devConfig;
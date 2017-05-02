/**
 * Created by cendawei on 2017/4/18.
 */
const _ = require('lodash');
const baseConfig = {
    'JS_PATH': '/build/js',
    'CSS_PATH': '/build/css',
    'IMG_PATH': '/images',
    'LIB_PATH': '/libs'
}
module.exports = {
    'development': _.defaultsDeep(baseConfig),
    'production': _.defaultsDeep({
        'JS_PATH': '/webroot/build/js',
        'CSS_PATH': '/webroot/build/css',
        'IMG_PATH': '/webroot/images',
        'LIB_PATH': '/webroot/libs'
    }, baseConfig),
    'test': _.defaultsDeep({
        'JS_PATH': '/webroot/build/js',
        'CSS_PATH': '/webroot/build/css',
        'IMG_PATH': '/webroot/images',
        'LIB_PATH': '/webroot/libs'
    }, baseConfig)
}
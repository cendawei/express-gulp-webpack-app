/**
 * Created by cendawei on 2017/4/18.
 */
const _ = require('lodash');
const basePath = require('../configs/base')[process.env.NODE_ENV];
const cssMap = require('../statics/build/css/rev-manifest.json');

module.exports = {
    getHtmlData: function (opts) {
        if(process.env.NODE_ENV === 'development'){
            for(let a in cssMap) {
                cssMap[a] = a;
            }
        }
        return _.defaultsDeep(opts, basePath, { cssMap });
    }
}
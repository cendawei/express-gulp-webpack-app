/**
 * Created by cendawei on 2017/4/18.
 */
const _ = require('lodash');
const {errorCodes} = require('../configs')

module.exports = {
    getResult({codeText, msg, data}) {
        let rs = {}
        rs = errorCodes[codeText]
        msg && (rs.msg = msg)
        data && (rs.data = data)
        return rs
    }
}
/**
 * Created by cendawei on 2017/4/28.
 */
const testModel = require('../models/test')
const {getResult} = require('../core/utils')
const {omit} = require('lodash')

module.exports = {
    async getList (req, res, next) {
        const data = await testModel.getAll();
        let result = {}
        if(data.ok) {
            result['codeText'] = 'success'
            result['data'] = omit(data, 'ok')
        } else {
            result['codeText'] = 'failure'
        }
        res.json(getResult(result))
    }
}
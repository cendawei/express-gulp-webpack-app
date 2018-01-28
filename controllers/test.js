/**
 * Created by cendawei on 2017/4/28.
 */
const testModel = require('../models/test')
const {getResult} = require('../core/utils')

module.exports = {
    async index (req, res, next) {
        const data = await testModel.getAll();
        const result = {
            codeText:'success',
            data
        }
        res.json(getResult(result))
    }
}
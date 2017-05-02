/**
 * Created by cendawei on 2017/4/28.
 */
const model = require('../models/activity_xiaomi');
module.exports = {
    index: function () {
        const dbresult = model.getCen();
        let data = [];
        return dbresult.then((res) => {
            res.forEach((item, index) => {
                data.push({
                    'name': item.name,
                    'phone': item.phone
                })
            })
            return {
                data
            }
        })
    }
}
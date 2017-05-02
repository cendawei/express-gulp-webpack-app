/**
 * Created by cendawei on 2017/4/28.
 */
const controler = require('../controllers/activity_xiaomi');

module.exports = function (app) {
    app.get('/activity_xiaomi', async (req, res, next) => {
        const result = await controler.index();
        res.render('activity_xiaomi/index', app.get('utils').getHtmlData(result))
    })
}
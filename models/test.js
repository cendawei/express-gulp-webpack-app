/**
 * Created by cendawei on 2017/4/18.
 */
const Sequelize = require('sequelize');
const connect = require('./index');

const index_table = connect.define('index', {
    // id: Sequelize.INTEGER,
    name: Sequelize.STRING,
    // phone: Sequelize.STRING.BINARY,
    // addtime: Sequelize.INTEGER,
});

module.exports = {
    async getAll() {
        const res = await index_table.findAll();
        return {
            ok: true,
            list: res
        }
    }
}
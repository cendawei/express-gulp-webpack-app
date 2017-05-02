/**
 * Created by cendawei on 2017/4/18.
 */
const Sequelize = require('sequelize');
const connect = require('./index');

const activity_xiaomi = connect.define('v9_activity_xiaomi', {
    // id: Sequelize.INTEGER,
    name: Sequelize.STRING,
    phone: Sequelize.STRING.BINARY,
    addtime: Sequelize.INTEGER,
}, {
    timestamps: false,
    freezeTableName: true // Model tableName will be the same as the model name
});

module.exports = {
    async getCen() {
        return await activity_xiaomi.findAll({
            where: {
                name: {
                    $like: '岑%'
                }
            }
        });
    }
}
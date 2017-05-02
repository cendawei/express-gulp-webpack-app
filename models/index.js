/**
 * Created by cendawei on 2017/4/17.
 */
const Sequelize = require('sequelize');
const dbconfig = require('../configs/database')[process.env.NODE_ENV];

module.exports =  new Sequelize(dbconfig.database, dbconfig.username, dbconfig.password, {
    host: dbconfig.host,
    dialect: dbconfig.dialect
});
/**
 * Created by cendawei on 2017/4/17.
 */
module.exports = {
    'development': {
        "host": "127.0.0.1",
        "port": "3306",
        "database": "app_name",
        "username": "root",
        "password": "root",
        "dialect": "mysql"
    },
    'production': {
        // "host": "127.0.0.1",
        "host": "120.78.95.62",
        "port": "3306",
        "database": "app_name",
        "username": "root",
        "password": "root",
        "dialect": "mysql"
    },
    'test': {
        "host": "120.78.95.62",
        "port": "3306",
        "database": "app_name",
        "username": "root",
        "password": "root",
        "dialect": "mysql"
    },
}
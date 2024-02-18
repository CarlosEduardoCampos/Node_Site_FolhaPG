const mysql = require('mysql');

require('dotenv').config();

const connMYSQL = () => {
    return mysql.createConnection({
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASS || '',
        database: process.env.MYSQL_DATA || '',
        port: process.env.MYSQL_PORT || 3306
    })
}

module.exports = connMYSQL;
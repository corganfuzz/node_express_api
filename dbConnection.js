var mysql = require('mysql');
var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'chanela20',
    database: 'demo'
});
module.exports = connection;

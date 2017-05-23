var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER || 'devuser',
    password: process.env.DB_PASS || 'okpassokpass',
    database: process.env.DB_NAME || 'okdevdb'
});

module.exports = connection;

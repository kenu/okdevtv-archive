var connection = require('./db');

var tip = {
    save: function (res, data) {
        connection.query('insert into tip set ?', data,
            function (err, result, fields) {
                if (err) {
                    throw err;
                }
                connection.end();
            })
    },
    list: function (res) {
        connection.query('select * from tip order by id desc', [],
            function (err, rows, fields) {
                res.json({
                    "tips": rows
                });
                connection.end();
            });
    }
}

module.exports = tip;

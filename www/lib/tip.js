var connection = require('./db');

var tip = {
    save: function (res, data) {
        connection.query('insert into tip set ?', data,
            function (err) {
                if (err) {
                    throw err;
                }
                connection.end();
            })
    },
    list: function (res) {
        connection.query('select * from tip order by id desc', [],
            function (err, rows) {
                res.json({
                    "tips": rows
                });
                connection.end();
            });
    }
}

module.exports = tip;

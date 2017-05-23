var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'okdevtv.com',
  user     : 'okuser',
  password : 'okdude',
  database : 'javatest'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows) {
  if (err) {
      throw err;
  }

  return ('The solution is: ' + rows[0].solution);
});

connection.end();

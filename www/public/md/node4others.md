## Node.js for PHP Developer
php
```
function roomlist() {
    $rooms = array();
    $room_list = mysql_query(
        'SELECT room FROM '.SQL_PREFIX.'chats GROUP BY room ORDER BY room ASC'
    );
    while (
        $row = mysql_fetch_assoc($room_list)) {
        $room = $row['room'];
        $rooms[] = $room;
    }
    print json_encode($r);
}
```

node.js
```
function roomlist() {
    varrooms = [];
    link.query(
        'SELECT room FROM ' + SQL_PREFIX + 'chats GROUP BY room ORDER BY room ASC',
        function (err, rows, fields) {
            for (var r = 0; r < rows.length; ++r) {
                var row = rows[r];
                var room = row['room'];
                rooms.push(room);
            }
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            res.end(JSON.stringify(r));
        }
    });
};
```

code from: Node.js for PHP developers, viii
### Chapters
Chapter 1, Node.js Basics
Chapter 2, A Simple Node.js Framework
Chapter 3, Simple Callbacks
Chapter 4, Advanced Callbacks
  * This chapter presents a more sophisticated and generic way to refactor blocking PHP 4 source code to simulate anonymous functions, function variables, and clo‐ sure.
  * For PHP 5 source code, it explains how to use PHP 5 features to actually implement anonymous functions, function variables, and closure.

Chapter 5, HTTP Responses
Chapter 6, Syntax
Chapter 7, Variables
Chapter 8, Classes
Chapter 9, File Access
Chapter 10, MySQL Access
Chapter 11, Plain Text, JSON, and XML
Chapter 12, Miscellaneous Functions
  * Node.js implementations for PHP API functions.
  * speed along conversion
  * contrast PHP and Node.js.

## Node.js for Java Developer
* enide plugin
* https://strongloop.com/strongblog/node-js-java-getting-started/

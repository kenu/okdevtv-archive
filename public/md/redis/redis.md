# Redis
* in-memory data structure store, used as a database, cache and message broker.
* https://redis.io


## install

```
mkdir ~/local && cd ~/local
sudo yum groupinstall "Development Tools"
wget http://download.redis.io/releases/redis-4.0.10.tar.gz
tar xvfz redis-4.0.10.tar.gz
cd redis-4.0.10
cd deps
make hiredis jemalloc linenoise lua
make
```

## 실행
* server
  * `src/redis-server`
  * port : 6379

* client
  * `src/redis-cli`

## command
* `set name kenu`

* `get name`

* protected-mode 해제
  * `config set protected-mode no`

```
Error ReplyError: Ready check failed: DENIED Redis is running in protected mode because protected mode is enabled, no bind address was specified, no authentication password is requested to clients. In this mode connections are only accepted from the loopback interface. If you want to connect from external computers to Redis you may adopt one of the following solutions: 1) Just disable protected mode sending the command 'CONFIG SET protected-mode no' from the loopback interface by connecting to Redis from the same host the server is running, however MAKE SURE Redis is not publicly accessible from internet if you do so.
```

## node.js for redis
* https://github.com/NodeRedis/node_redis

```
var redis = require("redis"),
    client = redis.createClient({host:'127.0.0.1'});

// if you'd like to select database 3, instead of 0 (default), call
// client.select(3, function() { /* ... */ });

client.on("error", function (err) {
    console.log("Error " + err);
});

client.set("string key", "string val", redis.print);
client.hset("hash key", "hashtest 1", "some value", redis.print);
client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
client.hkeys("hash key", function (err, replies) {
    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
        console.log("    " + i + ": " + reply);
    });
    client.quit();
});
```

## ref
* redis on windows
  * http://hwigyeom.ntils.com/entry/Windows-%EC%97%90-Redis-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0-1

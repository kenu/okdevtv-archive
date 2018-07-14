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

## node.js for redis
* https://github.com/NodeRedis/node_redis

## ref
* redis on windows
  * http://hwigyeom.ntils.com/entry/Windows-%EC%97%90-Redis-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0-1

# nginx errors

* 413 Request Entity Too Large
  * msg
```
error: RPC failed; HTTP 413 curl 22 The requested URL returned error: 413 Request Entity Too Large
fatal: The remote end hung up unexpectedly
```
  * nginx.conf 에 추가
```
client_max_body_size 20M;
```
  * ref : http://snake1rabbit2.tistory.com/33
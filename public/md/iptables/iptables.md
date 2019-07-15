# iptables

* `iptables -I INPUT 1 -s 65.55.xxx.100 -j DROP`
  * 우선추가
* `iptables -D INPUT -s 40.74.xxx.192 -j DROP`
  * 삭제
* `iptables -L`
* `iptables -L -n` # no reverse dns lookup
* `service iptables save`
* `service iptables restart`

* `iptables -A INPUT -s 65.55.xxx.100 -j DROP`
  * 추가

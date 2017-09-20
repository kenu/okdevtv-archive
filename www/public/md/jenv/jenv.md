# jenv
* http://jenv.io
* Java environment manager

* `curl -L -s get.jenv.io | bash`
* `source /Users/heogn/.jenv/bin/jenv-init.sh`

* `jenv install go`

* `jenv list java`

## set jdk
```
mkdir -p $HOME/.jenv/candidates/java
ln -s /Library/Java/JavaVirtualMachines/jdk-9.jdk/Contents/Home $HOME/.jenv/candidates/java/9

jenv default java 9
Default java version set to current

java -version
java version "9"
Java(TM) SE Runtime Environment (build 9+181)
Java HotSpot(TM) 64-Bit Server VM (build 9+181, mixed mode)
```

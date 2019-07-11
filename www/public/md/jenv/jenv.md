# jenv
* https://www.jenv.be/
* Java environment manager

* `brew install jenv`
* `git clone https://github.com/gcuisinier/jenv.git ~/.jenv`
* `echo 'export PATH="$HOME/.jenv/bin:$PATH"' >> ~/.zshrc`

* `jenv install go`

* `jenv list java`

## set jdk
* for redistribution issue download and install from OpenJDK https://github.com/ojdkbuild/ojdkbuild

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

```
jenv list
jenv default java 1.8.0_144
```


## ref
* http://www.jenv.be/ Another jenv

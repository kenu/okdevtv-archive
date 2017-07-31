# Java

## JDK, JRE
* Java Development Kit
* Java Runtime Environment
* JDK = JRE + javac

## Install
* http://java.sun.com
* CentOS
```
yum list | grep jdk
sudo yum remove java-1.7.0-openjdk.x86_64 -y
sudo yum install java-1.8.0-openjdk-devel.x86_64 -y
```

* Ubuntu openjdk

```
sudo add-apt-repository ppa:openjdk-r/ppa

sudo apt-get update
sudo apt-get install openjdk-8-jdk -y
```

* Ubuntu oracle-jdk
```
sudo add-apt-repository ppa:webupd8team/java
sudo apt-get update
sudo apt-get install oracle-java8-installer
sudo apt-get install oracle-java8-set-default
```

* mac
```
export JAVA_HOME="$(/usr/libexec/java_home -v 1.8)"
```

* 자바의신 1권 36p


## 기본 용어
* 패키지(package)
* 클래스(class)
* 메소드(method)
* 명령문(statement)

* 자바의신 1권 20p
* 들여쓰기(indent)
* 예약어(reserved word)

## 참고
* 2시간만에 자바를 쉽게 배우고 싶어요.
  * http://www.slideshare.net/kenu/java-start01-in-2hours

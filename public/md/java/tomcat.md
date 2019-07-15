# Tomcat
* https://tomcat.apache.org
* 서블릿 컨테이너 표준 구현 서버
* JAVA_HOME 환경 변수 필요

## run
```
bin/startup.sh
```

## folder
* conf
  * server.xml
* webapps
  * ROOT

## SSL
* http://tomcat.apache.org/tomcat-8.5-doc/ssl-howto.html
```
keytool -genkey -alias tomcat -keyalg RSA -keystore ~/.ssh/okdevtv.keystore
```

* conf/server.xml
```
<Connector
           protocol="org.apache.coyote.http11.Http11NioProtocol"
           port="8443" maxThreads="200"
           scheme="https" secure="true" SSLEnabled="true"
           keystoreFile="${user.home}/.ssh/okdevtv.keystore" keystorePass="okpassokpass"
           clientAuth="false" sslProtocol="TLS"/>
```

* check
```
curl https://localhost:8443 -k
```

## ref
* http://kenu.github.io/tomcat70/docs/

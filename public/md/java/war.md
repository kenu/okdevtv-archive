# WAR
* Web Application aRchive
* same with JAR

## Directory Structure
* `/WEB-INF` : should be hidden from browser
* `/WEB-INF/web.xml` : web application configuration file
* `/` : visible from browser

## Compress
* move to web app home
* `jar cvf app.war *`

## realted `server.xml`

```
<Host name="localhost"  appBase="webapps"
      unpackWARs="true" autoDeploy="true">
```

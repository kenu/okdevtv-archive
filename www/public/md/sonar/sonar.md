# SonarQube
* 코드 품질 검사 도구
* Continuous code quality
* https://www.sonarqube.org/

## Features
* Code smells
* Bugs
* Vulnerabilities

## SonarQube
* free
  * JavaScript
  * Java
  * Python
  * PHP
  * C#
  * Web
  * XML
* cost
  * COBOL, C/C++, PL/SQL, PL/I, ABAP, VB.NET, VB6, RPG, Flex, Objective-C, Swift

## SonarQube Scanner
* Download http://docs.sonarqube.org/display/SCAN/Analyzing+with+SonarQube+Scanner
* add sonar-scanner/bin directory to $PATH
* check `sonar-scanner` cmd
* mac
```
brew install sonar-scanner
```

## JavaScript
* SonarJS plugin (default installed)
* In project root directory, `sonar-project.properties`

```
# must be unique in a given SonarQube instance
sonar.projectKey=my:project
# this is the name and version displayed in the SonarQube UI. Was mandatory prior to SonarQube 6.1.
sonar.projectName=My project
sonar.projectVersion=1.0

# Path is relative to the sonar-project.properties file. Replace "\" by "/" on Windows.
# Since SonarQube 4.2, this property is optional if sonar.modules is set.
# If not set, SonarQube starts looking for source code from the directory containing
# the sonar-project.properties file.
sonar.sources=.

# Encoding of the source code. Default is default system encoding
#sonar.sourceEncoding=UTF-8
```
* run `sonar-scanner` in project root


## android sonar
* `app/build.gradle`

```
apply plugin: "sonar-runner"
sonarRunner {
    sonarProperties {
        property "sonar.host.url", "http://localhost:9000/"
//        property "sonar.jdbc.url", "jdbc:mysql://DB의 url 및 ip:3306/sonar?useUnicode=true&characterEncoding=utf8"
//        property "sonar.jdbc.username", "sonar"
//        property "sonar.jdbc.password", "sonar"
//        property "sonar.login", "admin"
//        property "sonar.password", "admin"
        property "sonar.projectKey", "Sonar:Test"
        property "sonar.projectName", "프로젝트명"
        property "sonar.projectVersion", "1.0"
        property "sonar.sourceEncoding", "UTF-8"
        property "sonar.language", "java"
        property "sonar.sources", "src/main/java"
        property "sonar.profile", "Sonar way"
    }
}
```
* `./gradlew sonarRunner`
* `open http://localhost:9000`

## ref
* http://galmaegi74.tistory.com/9

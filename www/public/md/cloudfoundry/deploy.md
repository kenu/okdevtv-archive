# 전자정부프레임워크 빌드팩 배포
* push app : hello-egov-board-1.0.0.war
* Jboss
* no start 옵션으로 앱을 푸시한다.
`cf push egov-test -b egov_buildpack -p hello-egov-board-1.0.0.war --no-start`
Creating app egov-test in org cgshome-org / space Dev as admin... OK Creating route egov-test.paasta.koscom.co.kr... OK Binding egov-test.paasta.koscom.co.kr to egov-test... OK Uploading egov-test... Uploading app files from: /tmp/unzipped-app743146461 Uploading 3.4M, 720 files Done uploading OK
Jboss 사용을 위해서 앱에 환경변수를 등록한다
cf set-env egov-test JBP_CONFIG_COMPONENTS '[containers: Jboss]'
앱을 실행한다.
cf start egov-test
Tomcat
no start 옵션으로 앱을 푸시한다.
cf push egov-test -b egov_buildpack -p hello-egov-board-1.0.0.war --no-start 
Creating app egov-test in org cgshome-org / space Dev as admin... OK Creating route egov-test.paasta.koscom.co.kr... OK Binding egov-test.paasta.koscom.co.kr to egov-test... OK Uploading egov-test... Uploading app files from: /tmp/unzipped-app743146461 Uploading 3.4M, 720 files Done uploading OK
Tomcat 사용을 위해서 앱에 환경변수를 등록한다
cf set-env egov-test JBP_CONFIG_COMPONENTS '[containers: Tomcat]'
앱을 실행한다.
cf start egov-test

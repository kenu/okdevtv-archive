#!bin/bash
## from https://gist.github.com/changhwa/0820d66dd7235d415c103228e66122c5
## ref https://github.com/rcoli/spring-boot-jenkins
export JAVA_HOME=/usr/local/java/jdk18
export PATH=$PATH:$JAVA_HOME/bin

BASE_URL=/usr/local/program
BUILD_NUMBER=$1
JAR_FILE_NAME=application.jar
TEMP_FOR_CHECK_LOG_FILE=temp-check-log.log
SPRING_PROFILE=prod

function stopJar(){
  pkill -f 'java -jar'
}

function newSymbolic(){
  rm -rf $BASE_URL/webapps && ln -s $BASE_URL/releases/$BUILD_NUMBER $BASE_URL/webapps
}

function changePermission(){
  chmod 755 $BASE_URL/webapps/$JAR_FILE_NAME
}

function run(){
  nohup java -jar -Djava.security.egd=file:/dev/./urandom -Dspring.profiles.active=$SPRING_PROFILE $BASE_URL/webapps/$JAR_FILE_NAME $> $TEMP_FOR_CHECK_LOG_FILE 2>&1 &
  echo "Run Spring Boot Project"
  echo " "
}

function runWatch(){
  tail -f $TEMP_FOR_CHECK_LOG_FILE |
    while IFS= read line
    do
      echo $line
      if [[ "$line" == *"Started "* ]]; then
        echo "END Deploy!!"
        pkill -f 'tail -f' && rm -rf $TEMP_FOR_CHECK_LOG_FILE
      fi
    done
}

## function call
# 1. jar application을 종료한다
stopJar
# 2. 배포한 release 파일과 web root 폴더를 심볼릭 링크를 생성한다
newSymbolic
# 3. jar 파일의 권한을 변경한다
changePermission
# 4. Application 실행
run
# 5. 스프링부트 실행여부를 체크하는 메소드
runWatch

# AWS EC2
* Elastic Compute Cloud
* https://aws.amazon.com 에서 EC2 선택
* IaaS(Infrastructure as a Service)
* 서버 임대

* 신규 가입시 1년간 t2.micro(1CPU, 1Core, 8G SSD) 서버 750시간 매월 무료

## 접속 방법
* EC2 instance 생성
  * OS 선택
  * spec 선택
  * key 생성 또는 선택
  * Launch
* `ssh -i /path/to/key.pem ec2-user@ipaddress` # Amazon AMI(Amazon Machine Image)
* `ssh -i /path/to/key.pem ubuntu@ipaddress` # Ubuntu

# aws cli


```
wget https://bootstrap.pypa.io/get-pip.py
sudo python get-pip.py 
sudo pip install awscli
```

```
www@ubuntu:~$ aws configure
AWS Access Key ID [None]: AAAAA5QSQWJ7UXXXXXLGA
AWS Secret Access Key [None]: n9zWro6z1thxEwenIRg0lw539d1iVU6+se7jnv1
Default region name [None]: ap-northeast-2
Default output format [None]: json

aws ec2 describe-instances
```

### EC2 security key 생성

```
aws ec2 create-security-group --group-name okdevtv-sg --description "okdevtv security group"
aws ec2 authorize-security-group-ingress --group-name okdevtv-sg --protocol tcp --port 22 --cidr 0.0.0.0/0
aws ec2 describe-security-groups
#devenv-key.pem 생성 후 퍼미션 400으로 조정
aws ec2 create-key-pair --key-name devenv-key --query 'KeyMaterial' --output text > devenv-key.pem
chmod 400 devenv-key.pem
```

### EC2 instance 생성

```
#ami-4d1fd123 이미지 목록에서 확인
aws ec2 describe-images --owners self amazon --filter "Name=root-device-type,Values=ebs" | grep ami-4d1fd123
#EC2 t2.micro 인스턴스 생성
aws ec2 run-instances --image-id ami-4d1fd123 --security-group-ids okdevtv-sg --count 1 --instance-type t2.micro --key-name devenv-key --query 'Instances[0].InstanceId'
```

### s3 create-bucket
```
aws s3api create-bucket --bucket okdevtv2017 --region us-east-1

aws s3api list-buckets

aws s3 cp access*.gz s3://okkylogs2017/
```

### 인스턴스 접속
```
ssh -i devenv-key.pem ec2-user@인스턴스아이피
```

### ec2 file cp to s3
```
aws configure
aws s3 cp file s3://bucketName/
```

## 참고: 
* Deploying a Development Environment in Amazon EC2 Using the AWS Command Line Interface
  * http://docs.aws.amazon.com/cli/latest/userguide/tutorial-ec2-ubuntu.html
* Finding a Linux AMI
  * http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/finding-an-ami.html
* AWS Command Line Interface
  * https://aws.amazon.com/ko/cli/
* S3 Reference
  * http://docs.aws.amazon.com/cli/latest/reference/s3/
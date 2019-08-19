# openvpn

## Simple Setup with OpenVPN AMI image
* Create EC2 instance
* AMI marketplace
* Search `OpenVPN` freetier : 2 concurrent users, no fees
* `3. 인스턴스 구성`
  * `종료 방지 기능 활성화`, check `우발적인 종료로부터 보호`
* `4. 스토리지 추가`
  * `30G`
  * Uncheck `종료 시 삭제`
* `5. 태그 추가`
  * `Name`, `OpenVPN`
* 키 페어 선택하고 인스턴스 시작
* `탄력적 IP`에서 IP 추가 `OpenVPN` 인스턴스 연결
* 터미널에서 접속
  * `ssh -i ~/keys/okdevtv.pem openvpnas@PublicIP`
* 라이선스 동의 및 기본 설정
* `openvpn` 관리자 패스워드 설정
  * `sudo passwd openvpn`
* 관리자 화면 접속
  * OS별 `OpenVPN Connect` 다운로드 및 접속


## Other way
* `static.key`

```
su
openvpn server.conf
```

```
sudo openvpn client.conf
ssh dev@okdevtv.com
ssh dev@10.8.0.1
```

## ref
* docker-openvpn
  * https://elegantcoder.com/aws-openvpn-begins/
* How To Create A Free Personal VPN In The Cloud Using EC2 & OpenVPN
  * https://medium.com/@tatianaensslin/how-to-create-a-free-personal-vpn-in-the-cloud-using-ec2-openvpn-626c40e96dab

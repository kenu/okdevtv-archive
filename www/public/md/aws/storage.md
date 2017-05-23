# AWS Storage

## 볼륨 생성과 마운트하기

* 참고 : http://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/ebs-using-volumes.html

```
# 볼륨 확인하기
lsblk

[ec2-user@ip-172-31-19-36 ~]$ lsblk
NAME    MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
xvda    202:0    0    8G  0 disk 
└─xvda1 202:1    0    8G  0 part /
xvdf    202:80   0  100G  0 disk 
[ec2-user@ip-172-31-19-36 ~]$ sudo file -s /dev/xvdf
/dev/xvdf: data

[ec2-user@ip-172-31-19-36 ~]$ sudo mkfs -t ext4 /dev/xvdf
mke2fs 1.42.12 (29-Aug-2014)
Creating filesystem with 26214400 4k blocks and 6553600 inodes
Filesystem UUID: 2a502a3e-e07e-4f9c-8590-e8f9bcd4f0a0
Superblock backups stored on blocks: 
	32768, 98304, 163840, 229376, 294912, 819200, 884736, 1605632, 2654208, 
	4096000, 7962624, 11239424, 20480000, 23887872

Allocating group tables: done
Writing inode tables: done
Creating journal (32768 blocks): done
Writing superblocks and filesystem accounting information: done   

[ec2-user@ip-172-31-19-36 ~]$ sudo file -s /dev/xvdf
/dev/xvdf: Linux rev 1.0 ext4 filesystem data, UUID=2a502a3e-e07e-4f9c-8590-e8f9bcd4f0a0 (extents) (large files) (huge files)


[ec2-user@ip-172-31-19-36 ~]$ sudo mkdir /opt/elk
[ec2-user@ip-172-31-19-36 ~]$ sudo mount /dev/xvdf /opt/elk
[ec2-user@ip-172-31-19-36 ~]$ sudo cp /etc/fstab /etc/fstab.orig
[ec2-user@ip-172-31-19-36 ~]$ sudo vi /etc/fstab
```
아래 라인 추가  
`/dev/xvdf   /opt/elk    ext4    defaults,nofail 0   2`


```
[ec2-user@ip-172-31-19-36 ~]$ sudo mount -a
[ec2-user@ip-172-31-19-36 ~]$ cat /etc/fstab
#
LABEL=/     /           ext4    defaults,noatime  1   1
tmpfs       /dev/shm    tmpfs   defaults        0   0
devpts      /dev/pts    devpts  gid=5,mode=620  0   0
sysfs       /sys        sysfs   defaults        0   0
proc        /proc       proc    defaults        0   0
/dev/xvdf   /opt/elk    ext4    defaults,nofail 0   2
[ec2-user@ip-172-31-19-36 ~]$ 
```


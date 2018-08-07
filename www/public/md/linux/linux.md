# Linux command

# Linux

* 1991 Linus Torvalds
* mimic of Unix
* for pc

## Basic commands
|basic commands	| mac	| windows |
|----|----|----|
|change directory	| cd	| cd|
|list files	|ls	|dir|
|list files info	|ls -l	|dir|
|view file content	|cat filename	|type filename|
|open site	|open http://www.naver.com	|explorer http://www.naver.com|
|edit file	|nano filename	|notepad filename|

## File extract 1 line
```
sed -n '3p' file

# Here's another:
head -n 3 file | tail -n 1
```

## File Encoding
* 확인
  `file -bi filename`

## File opened count
* `lsof | wc -l`

## inode file rm
```
ls -altri
find . -inum 782263 -exec rm -i {} \;
```

## nobody 소유의 폴더 찾기
```
find . -type d  -user nobody
```

## 심볼릭 링크 찾기
```
find . -type l
```

## Port check
* `lsof -i tcp:3000`

* 열린 포트 확인
```
lsof -i -nP | grep LISTEN | awk '{print $(NF-1)" "$1}' | sort -u
*:27017 mongod
*:8082 node
```

## LC_CTYPE warning
* /etc/environment
```
LANG=en_US.utf-8
LC_ALL=en_US.utf-8
```

## change file encoding
```
iconv -f euc-kr -t utf-8 kimchi.txt > kimchi_utf8.txt
```

### multi files

```
mkdir utf8
for file in *.csv; do
    iconv -f euc-kr -t utf-8 "$file" > "utf8/${file%.csv}.utf8.csv"
done
```

## date
```
date '+%Y%m%d %H%M%S' # today
date -v-3d '+%Y%m%d %H%M%S' # 1 days before
# or
date -d "3days ago" '+%Y-%m-%d %H' # bash
```

## Timezone
* ~/.bash_profile
```
# .bash_profile
TZ='Asia/Seoul'; export TZ
```

* for cron
```
sudo cp -p /usr/share/zoneinfo/Asia/Seoul /etc/localtime
sudo service crond restart
```

## sudo
```
# vi /etc/sudoers
```

```
## Allows people in group wheel to run all commands
# %wheel        ALL=(ALL)       ALL
%dev    ALL=(ALL)       ALL
```

## VGA 확인
```
sudo yum install pciutils
lspci | grep -i vga
```

## file filter
```
find . -type f | egrep "gif$|jpg$|jpeg$|svg$|png$" | wc -l
```

## archive filtered list containing spaces in file name
```
find . -type f | grep -v list_files |egrep "php$|html$|htm$|js$|css$|inc$" > list.txt
tar cvfz text.tgz -T list.txt

find . -type f | grep -v list_files |egrep "gif$|jpg$|jpeg$|svg$|png$|ico$" > list_img.txt
tar cvfz img.tgz -T list_img.txt
```

## Process 확인
```
ps -ef | grep httpd
ps x -o  "%p %r %c"
```

* group process kill
```
ps -ef | grep httpd
kill -TERM -- -22590
```

## htop

```
sudo yum install htop
```

```
htop
htop -p "$(pgrep -vfd, 'java|python')"
```

## 열린 포트 확인
```
lsof -i -nP | grep LISTEN | awk '{print $(NF-1)" "$1}' | sort -u
*:27017 mongod
*:8082 node
```

## ls for second
```
ls -la --time-style=full-iso
``` 

## other topics
* [cron](https://okdevtv.com/mib/linux/cron)
* [curl](https://okdevtv.com/mib/linux/curl)
* [pigz](https://okdevtv.com/mib/linux/pigz) : parallel gzip

## Mail
* 파일첨부
  * `mutt -s "subject" -i body.txt -a attachment.txt recipient@example.com`

## Ref
* vi 에디터에서 utf8, euc-kr 전환하기
  * http://egloos.zum.com/indirock/v/3791689
* Linux file descriptors
  * https://www.cyberciti.biz/tips/linux-procfs-file-descriptors.html
* Mutt
  * https://www.thegeekdiary.com/linux-unix-send-mail-with-attachment-using-mutt/
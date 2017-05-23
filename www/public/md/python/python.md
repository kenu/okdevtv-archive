# Python
* https://www.python.org/
* 1991 Guido Van Rossum
* hacker's favorite language

## basic
|python 실행	|python|
|----|----|
|python 종료	|ctrl + D or `exit()`|
|python file 실행	|`python sample.py`|
|python 버전 확인	|`python -V`|

## pip
* `curl -O https://bootstrap.pypa.io/get-pip.py`
* `sudo python get-pip.py`

* mac permission
  * `sudo chown -R kenu:staff /Library/Python/2.7/site-packages`

### commands
* `pip --help`
* `pip list`
* `pip install virtualenv`
* `pip uninstall virtualenv`

## virtualenv
* closed env
* `virtualenv venv`
* `source venv/bin/activate`
* `deactivate`

### python3 (mac)
* install brew
  * https://brew.sh

* install python3

```
brew install python3
virtualenv -p python3 venv3
source venv3/bin/activate

python -V
deactivate
```

## mac
* `Python is not installed as a framework` issue?
* `vi ~/.matplotlib/matplotlibrc`
```
backend: TkAgg
```

## 파일
* 파일 열어서 한 줄씩 출력하기
* 결과 파일 생성하기
* 참고: https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files

## 문자열(String)
* 문자열 포함
* 문자열 위치
* 문자열 추출

## list(array)
* 배열


## scipy on windows
* Unofficial Windows Binaries for Python Extension Packages
  * http://www.lfd.uci.edu/~gohlke/pythonlibs/#scipy
## ref
* 생활코딩 Python & Ruby
  * https://opentutorials.org/course/1750
* Tutoiral Point Python
  * https://www.tutorialspoint.com/python/
* Python 10 tasks
  * [10 things possible with Python](https://okdevtv.com/mib/python/10)
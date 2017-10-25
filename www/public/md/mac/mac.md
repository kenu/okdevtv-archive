* 맥 brew 설치법
* 맥 node.js 설치법
* node cluster 테스트

## brew 설치법
* http://brew.sh 접속
* terminal을 엽니다.
```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
* brew install tree
* brew install wget

* brew update
* brew upgrade

* 문서
  * https://git.io/brew-docs
* 트러블슈팅
  * First, please run `brew update` and `brew doctor`


## Roll back ro Back Tick(\`) from (₩)
```
mkdir -p ~/Library/KeyBindings
vi ~/Library/KeyBindings/DefaultkeyBinding.dict
```

```
{
    "₩" = ("insertText:", "`");
}
```

  * restart application

## 맥 node.js 설치법
* http://nodejs.org
* download and install

* `node --version`
* `npm --version` 확인


## rootless
* Option + R boot, terminal
* `csrutil disable --without debug`

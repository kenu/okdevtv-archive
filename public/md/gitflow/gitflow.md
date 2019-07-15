# gitflow
* branch strategy 브랜치 전략
* git은 브랜치를 맘대로 빠르게 누구도 모르게 딸 수 있다.
* 로컬에서 브랜치를 맘대로
* 리모트로 공유도 가능, 삭제도 가능

## branch
* 목록
  * `git branch`
  * `git branch -v`
* 생성
  * `git checkout -b branchname`
* 삭제
  * `git branch -d branchname`
* 브랜치 머지
  * master, develop 두 브랜치가 있다면
  * master로 checkout, 베이스가 master 브랜치임
  * `git checkout master`
  * `git merge develop`
* 리모트 공유
  * `git push origin develop`
* 리모트 삭제
  * `git push origin :develop`
* 리모트 브랜치를 로컬로 가져오기
  * `git checkout -b develop origin/develop`

## git flow
* Vincent Driessen 블로그와 GitHub
* 2010 created
* 브랜치를 알아야 사용할 수 있는 기술
* git flow vs. github flow
  * https://lucamezzalira.com/2014/03/10/git-flow-vs-github-flow/
  * http://scottchacon.com/2011/08/31/github-flow.html

### 기본 명령
* git flow 시작
  * `git flow init`
* feature/okfeature11 브랜치 따기 
  * `git flow feature start okfeature11`
* feature/okfeature11 브랜치 종료하고 부모 브랜치에 머지
  * `git flow feature finish okfeature11`


## References
* http://nvie.com/posts/a-successful-git-branching-model/
  * 번역 http://hundredin.net/2014/04/06/a-successful-git-branching-model/
* https://github.com/nvie/gitflow
* Git 브랜치 - 리모트 브랜치
  * https://git-scm.com/book/ko/v1/Git-브랜치-리모트-브랜치
* git flow
  * http://ohgyun.com/402
  
  
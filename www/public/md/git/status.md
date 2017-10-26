# Git Status

## branch diverged
```
On branch master
Your branch and 'origin/master' have diverged,
and have 2 and 7 different commits each, respectively.
  (use "git pull" to merge the remote branch into yours)
```
* Status
<img src="images/branch-diverged.png" alt="branch diverged" class="img">


* Solve
```
# folder backup
# git local commit
# git pull remote
# merge conflict
# git local commit
# git push

gitk
git status
git pull origin master
git commit -m "tmp"
git commit -am "tmp"
git pull origin master
git add .
git status
git commit -m "tmp2"
git pull origin master
atom .
git status
git add .
git commit -m "tmp3"
git status
git push origin master
gitk
```

* 결과

<img src="images/branch-merged.png" alt="branch merged" class="img">



## 파일 하나 롤백
```
git checkout b1fea8b -- server.js
```

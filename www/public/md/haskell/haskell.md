# haskell

* 고급진 순수 함수형 프로그래밍 언어
* https://www.haskell.org
* Prime Number 구하는 예제
```
primes = filterPrime [2..] 
  where filterPrime (p:xs) = 
          p : filterPrime [x | x <- xs, x `mod` p /= 0]
```
* 다른 언어에 비해서 학습 난이도 높음.

## 설치
* https://www.haskell.org/downloads



## 참고



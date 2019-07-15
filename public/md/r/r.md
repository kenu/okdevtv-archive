# R lang
* https://www.r-project.org/
* https://www.rstudio.com/

## R Studio
* 한글 이슈
* for mac `defaults write org.R-project.R force.LANG en_US.UTF-8`
* Console
  * Tools > Global Options ... > Code > Saving
  * Default Text Encoding > UTF-8
* plot
  * `par(family="AppleGothic")`
  * `plot(cars, main = "차량 주행 속도와 정지 거리 사이의 관계")`
* optional
  * `install.packages("extrafont")`
  * `library(extrafont)`
  * `font_import()`

## package install
```
update.packages()
install.packages('zoo')
```

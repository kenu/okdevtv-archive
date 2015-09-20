# 이미지 처리
Learn 
how to use common techniques 
* process 
* load Bitmap objects 

* keeps your user interface (UI) components responsive 
* avoids exceeding your application memory limit.

If you're not careful, 
bitmaps can quickly consume your available memory budget 
leading to an application crash 
due to the dreaded exception:
java.lang.OutofMemoryError: bitmap size exceeds VM budget.


## 여러 이미지 GridView에 불러오기
how to load multiple bitmaps 
into ViewPager and GridView components 

* 백그라운드 쓰레드(background thread)
* 이미지 캐시(bitmap cache)
* 동시성(concurrency)
* 설정 변경(configuration changes)
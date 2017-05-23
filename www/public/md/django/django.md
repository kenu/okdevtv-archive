# Django
* python의 웹프레임워크
* https://www.djangoproject.com/
* 경쟁 제품 : [flask](http://flask.pocoo.org/)

## 요구사항
* [python](https://python.org)
* pip
* virtualenv

## virtualenv 환경
```
virtualenv .venv  # 환경 생성
source .venv/bin/activate  # 환경 진입
```
or
```
python3 -m venv myvenv
```
## django 설치
```
sudo pip install django

django-admin startproject mysite
```
* set django version
```
pip install django==1.8
```


## setup
```
django-admin startproject mysite .
```

* settings.py
```
    # TIME_ZONE = 'UTC'
    TIME_ZONE = 'Asia/Seoul'
    STATIC_URL = '/static/'
    STATIC_ROOT = os.path.join(BASE_DIR, 'static')
```

* migrate to database
```
python manage.py migrate
```

* run django server
```
python manage.py runserver
```
  * http://127.0.0.1:8000/

## Create Django App
```
python manage.py startapp blog
```
* append app into settings.py
```
    INSTALLED_APPS = (
        'django.contrib.admin',
        'django.contrib.auth',
        'django.contrib.contenttypes',
        'django.contrib.sessions',
        'django.contrib.messages',
        'django.contrib.staticfiles',
        'blog',
    )
```

## define model

* `blog/models.py`

```
    from django.db import models
    from django.utils import timezone

    class Post(models.Model):
        author = models.ForeignKey('auth.User')
        title = models.CharField(max_length=200)
        text = models.TextField()
        created_date = models.DateTimeField(
                default=timezone.now)
        published_date = models.DateTimeField(
                blank=True, null=True)

        def publish(self):
            self.published_date = timezone.now()
            self.save()

        def __str__(self):
            return self.title
```
* sync table database
```
python manage.py makemigrations blog
python manage.py migrate blog
```

## django admin
* `blog/admin.py`

```
from django.contrib import admin
from .models import Post

admin.site.register(Post)
```

* create super user
```
python manage.py createsuperuser
```

## Version Control with git(optional)
* https://okdevtv.com/mib/git-step

## 참고
* django 
  * https://www.djangoproject.com/
* django girls tutorial
  * https://tutorial.djangogirls.org/ko/
* django unittest
  * https://docs.djangoproject.com/ja/1.9/topics/testing/overview/
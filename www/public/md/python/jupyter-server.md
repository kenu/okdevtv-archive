# Jupyter Server

## CentOS 6.8 @DigitalOcean
```
yum update -y
python -V
which yum
vi /usr/bin/yum
```

```
#!/usr/bin/python2.6
```

```
cd /usr/bin
ls -al python*
rm -rf python
yum -y update
yum groupinstall -y 'development tools'
yum install -y zlib-dev openssl-devel sqlite-devel bzip2-devel
yum install xz-libs
cd
wget http://www.python.org/ftp/python/2.7.13/Python-2.7.13.tar.xz
tar xvf Python-2.7.13.tar.xz
cd Python-2.7.13
./configure --prefix=/usr/local
make && make altinstall
vi ~/.bash_profile

PATH=/usr/local/bin:$PATH:$HOME/bin

. ~/.bash_profile
which python2.7
ln -s /usr/local/bin/python2.7 /usr/bin/python
which python
python -V
curl -O https://bootstrap.pypa.io/get-pip.py
python get-pip.py
pip --version
pip install virtualenv
virtualenv ~/venv
source venv/bin/activate
pip install jupyter matplotlib
jupyter notebook
deactivate

# install nginx 
yum install epel-release
yum install nginx -y
cd /etc/nginx/conf.d
ls -altr
vi default.conf
```

```
    location / {
        proxy_pass http://localhost:8888;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
```


```
nginx -t
service nginx start
cd ~/
mkdir pythonstudy
cd pythonstudy
source ~/venv/bin/activate
jupyter notebook
nohup jupyter notebook &
jupyter notebook list
deactivate
```
* ref : https://gist.github.com/xuelangZF/570caf66cd1f204f98905e35336c9fc0

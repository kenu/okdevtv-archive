# Uptime
* A remote monitoring application using Node.js, MongoDB, and Twitter Bootstrap.
* https://github.com/fzaninotto/uptime
<img src="https://camo.githubusercontent.com/4f3f0f0b79d15372f3a89e5f9085cade4bffb064/68747470733a2f2f7261772e6769746875622e636f6d2f667a616e696e6f74746f2f757074696d652f646f776e6c6f6164732f636865636b5f64657461696c732e706e67" />

## install

* node.js
```
sudo yum update -y
mkdir local && cd local/
wget https://nodejs.org/dist/v6.11.3/node-v6.11.3-linux-x64.tar.xz
tar xvf node-v6.11.3-linux-x64.tar.xz
ln -s node-v6.11.3-linux-x64 node
```

* Linux Dev Tools

```
sudo yum groupinstall -y "Development Tools"
sudo yum install git -y
```

* MongoDB

```
wget https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-amazon-3.4.9.tgz
tar xvfz mongodb-linux-x86_64-amazon-3.4.9.tgz
ln -s mongodb-linux-x86_64-amazon-3.4.9 mongodb
```

* set Path

```
vi ~/.bash_profile
```

```
PATH=$PATH:$HOME/.local/bin:$HOME/bin

PATH=$PATH:/home/ec2-user/local/node/bin
PATH=$PATH:/home/ec2-user/local/mongodb/bin
```

```
. ~/.bash_profile
```

* configure DB user

```
mkdir -p ~/local/data
nohup bin/mongod --dbpath /home/ec2-user/local/data &
mongo
```

```
use uptime
db.createUser(
   {
     user: "uptime",
     pwd: "uptime",
     roles: [ "readWrite", "dbAdmin" ]
   }
)
```

* pm2

```
npm install -g pm2
```

## uptime

```
git clone git://github.com/fzaninotto/uptime.git
cd uptime/
```

* configure DB info

```
vi config/default.yaml
```

```
mongodb:
  server:   localhost
  database: uptime
  user:     uptime
  password: uptime
  connectionString: mongodb://localhost:27017/uptime
```

* start / stop

```
cd ~/local/uptime
pm2 start app
pm2 stop app
```

* production mode start

```
NODE_ENV=production pm2 start app
```

## ref
* https://github.com/fzaninotto/uptime/issues/320#issuecomment-136410046

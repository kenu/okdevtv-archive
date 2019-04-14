# Elastic Stack Update
* Downloads and unpack
* Kill old version processes
* Change symbolic links to new versions


## Downloads and unpack

```bash
cd local
ls -altr
cd ~/local
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.0.0.tar.gz
tar xfz elasticsearch-7.0.0.tar.gz
cd ~/local
wget https://artifacts.elastic.co/downloads/kibana/kibana-7.0.0-linux-x86_64.tar.gz
tar xfz kibana-7.0.0-linux-x86_64.tar.gz 
cd ~/local
wget https://artifacts.elastic.co/downloads/logstash/logstash-7.0.0.tar.gz
tar xvfz logstash-7.0.0.tar.gz
```

* Kill old version processes

```bash
ps -ef | grep elastic
kill -9 1167
ls -altr
ps -ef | grep node
kill -9 3576
ls -altr
htop
ps -ef | grep logstash
kill -9 556
htop
df -h
```

## Change symbolic links to new versions

```bash
rm -rf elasticsearch
ln -s elasticsearch-7.0.0 elasticsearch
ls -altr
rm -rf kibana logstash
ln -s logstash-7.0.0 logstash
ln -s kibana-7.0.0-linux-x86_64 kibana
ls -altr
```

## Migrate `data/` folder and small config

```bash
cd elasticsearch
mv ../elasticsearch-6.4.2/data .
ls -altr
diff ../elasticsearch-6.4.2/config/elasticsearch.yml config/elasticsearch.yml 
vi config/elasticsearch.yml 
```

* `config/elasticsearch.yml`

```
http.cors.enabled: true
http.cors.allow-origin: "*"
network.host: 0.0.0.0
```

```bash
bin/elasticsearch -d
htop
cd ~/kibana-6.4.2-linux-x86_64/
ls -altr
nohup bin/kibana &
cd ~/logstash
mv ../logstash-6.4.2/logconf/ .
./bin/logstash-plugin install logstash-input-beats
nohup bin/logstash -f logconf/pet-friends.conf &
ls -altr
htop
history
```
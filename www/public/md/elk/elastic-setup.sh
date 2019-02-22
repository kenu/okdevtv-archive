sudo yum install nginx -y
sudo service nginx start
curl -i http://localhost
sudo chmod 644 /var/log/nginx
sudo chown -R ec2-user:ec2-user /usr/share/nginx/html
echo "<h1>Hello World</h1>" > /usr/share/nginx/html/hello.html

sudo yum remove java-1.7.0-openjdk.x86_64 -y
sudo yum install java-1.8.0-openjdk-devel.x86_64 -y

mkdir ~/local
cd ~/local
rm -rf elasticsearch kibana logstash
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-6.6.1.tar.gz
tar xfz elasticsearch-6.6.1.tar.gz
ln -s elasticsearch-6.6.1 elasticsearch
cd elasticsearch
bin/elasticsearch -d
cd ~/local
wget https://artifacts.elastic.co/downloads/kibana/kibana-6.6.1-linux-x86_64.tar.gz
tar xfz kibana-6.6.1-linux-x86_64.tar.gz
ln -s kibana-6.6.1-linux-x86_64 kibana
cd kibana
cd ~/local
wget https://artifacts.elastic.co/downloads/logstash/logstash-6.6.1.tar.gz
tar xfz logstash-6.6.1.tar.gz
ln -s logstash-6.6.1 logstash
cd logstash

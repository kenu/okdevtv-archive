# Metricbeat

```
cd ~/local
<<<<<<< HEAD
wget https://artifacts.elastic.co/downloads/beats/metricbeat/metricbeat-6.1.1-linux-x86_64.tar.gz
tar xvfz metricbeat-6.1.1-linux-x86_64.tar.gz
ln -s metricbeat-6.1.1-linux-x86_64 metricbeat
=======
wget https://artifacts.elastic.co/downloads/beats/metricbeat/metricbeat-6.1.0-linux-x86_64.tar.gz
tar xvfz metricbeat-6.1.0-linux-x86_64.tar.gz
ln -s metricbeat-6.1.0-linux-x86_64 metricbeat
>>>>>>> b93359d14ef33f7634b3c4d68d4f1bb7b74509f4
cd metricbeat
```

## run
* change metricbeat.yml permission
```
sudo chown root metricbeat.yml
```

* for linux
```
sudo ./metricbeat -e -c metricbeat.yml
```

* for mac
```
sudo ./metricbeat -e -c metricbeat.yml -d "publish"
```

## Import Kibana dashboard

```
./scripts/import_dashboards
```

## Apache module
```
metricbeat.modules:
- module: apache
  metricsets: ["status"]
  enabled: true
  period: 10s

  # Apache hosts
  hosts: ["http://127.0.0.1"]
```

## ref
* https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-getting-started.html
* Apache httpd
* https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-module-apache.html

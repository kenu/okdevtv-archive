# Metricbeat

```
cd ~/local
wget https://artifacts.elastic.co/downloads/beats/metricbeat/metricbeat-5.5.2-linux-x86_64.tar.gz
tar xvfz metricbeat-5.5.2-linux-x86_64.tar.gz
ln -s metricbeat-5.5.2-linux-x86_64 metricbeat
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

## ref
* https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-getting-started.html

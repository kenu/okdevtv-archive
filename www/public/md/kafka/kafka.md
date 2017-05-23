# kafka
* https://kafka.apache.org
* distributed streaming platform

## download
* http://kafka.apache.org/downloads

## quickstart
* http://kafka.apache.org/quickstart
* step
  1. Download
  2. Start the server
    * zookeeper
      * `bin/zookeeper-server-start.sh config/zookeeper.properties`
      * `bin\windows\zookeeper-server-start.bat config/zookeeper.properties`
    * kafka
      * `bin/kafka-server-start.sh config/server.properties`
      * `bin\windows\kafka-server-start.bat config/server.properties`
      
  3. start topic
    * `bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic test`
    * `bin\windows\kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic test`

  4. Send some messages
    * `bin/kafka-console-producer.sh --broker-list localhost:9092 --topic test`
    * `bin\windows\kafka-console-producer.bat --broker-list localhost:9092 --topic test`
```
This is a message
This is another message
```
  5. Start a consumer
    * `bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test --from-beginning`
    * `bin\windows\kafka-console-consumer.bat --bootstrap-server localhost:9092 --topic test --from-beginning`

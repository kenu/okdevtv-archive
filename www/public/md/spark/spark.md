# Spark
* https://spark.apache.org
* RDD(Resilient Distributed Dataset)

## Getting Started
* `bin/pyspark`

```
textFile = sc.textFile("README.md")
textFile.count()

textFile.first()

linesWithSpark = textFile.filter(lambda line: "Spark" in line)
linesWithSpark.collect()

textFile.map(lambda line: len(line.split())).reduce(lambda a, b: a if (a > b) else b)
```

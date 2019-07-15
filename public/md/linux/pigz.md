# PIGZ
* A parallel implementation of gzip for modern multi-processor, multi-core machines
* Enhanced gzip
* http://zlib.net/pigz/

* Compress
```
pigz filename
```

* Uncompress
```
pigz -d filename.gz
punzip -d filename.gz
```

* tar option
```
tar -I pigz -cf OUTPUT_FILE.tgz FILES
tar -I pigz -xf OUTPUT_FILE.tgz
```

## ref
* https://stackoverflow.com/questions/12313242/utilizing-multi-core-for-targzip-bzip-compression-decompression

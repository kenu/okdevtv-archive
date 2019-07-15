# MXnet
* Deep Learning open sources package
* http://mxnet.io
* http://incubator.apache.org/projects/mxnet.html

## install
* Linux
```
pip install mxnet       # CPU
pip install mxnet-mkl   # CPU with MKL-DNN acceleration
pip install mxnet-cu75  # GPU with CUDA 7.5
pip install mxnet-cu80  # GPU with CUDA 8.0
```

* Mac
```
pip install mxnet
```

## get started
* http://mxnet.io/get_started/
```
import mxnet as mx
a = mx.nd.ones((2, 3))
b = a * 2 + 1
b.asnumpy()  # print b by converting to a numpy.ndarray object
```

## tutuorial

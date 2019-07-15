# tensorflow ubuntu gpu
* on aws ubuntu g2.2xlarge
* k520, 8.0.44_367

## VGA 확인
```
sudo yum install pciutils
lspci | grep -i vga
```

## env setup
```
sudo apt-get update
sudo apt-get upgrade -y
sudo apt-get install -y build-essential cmake git unzip pkg-config libopenblas-dev liblapack-dev
sudo apt-get install -y linux-image-generic linux-image-extra-virtual linux-source linux-headers-generic
```

```
sudo vi /etc/modprobe.d/blacklist-nouveau.conf
```

```
blacklist nouveau
blacklist lbm-nouveau
options nouveau modeset=0
alias nouveau off
alias lbm-nouveau off
```

```
echo options nouveau modeset=0 | sudo tee -a /etc/modprobe.d/nouveau-kms.conf
sudo update-initramfs -u
sudo reboot 
```

## cuda

```
df -h
sudo chown ubuntu:ubuntu -R /mnt
cd /mnt
# https://developer.nvidia.com/cuda-downloads
# downloads Legacy CUDA Toolkit cuda_8.0.44_linux.run
chmod +x cuda_8.0.44_linux.run
mkdir /mnt/installers
sudo ./cuda_8.0.44_linux.run -extract=/mnt/installers
cd /mnt/installers
sudo ./NVIDIA-Linux-x86_64-367.48.run 
modprobe nvidia
sudo ./cuda-linux64-rel-8.0.44-21122537.run 
sudo ./cuda-samples-linux-8.0.44-21122537.run 
```

* vi ~/.profile
```
export CUDA_HOME=/usr/local/cuda-8.0
export PATH=/usr/local/cuda/bin:$PATH
export LD_LIBRARY_PATH=/usr/local/cuda/lib64:$LD_LIBRARY_PATH
```

```
source ~/.profile
nvcc --version
```

* https://developer.nvidia.com/rdp/cudnn-download
* Download cuDNN v5 (May 27, 2016), for CUDA 8.0
```
tar xvfz cudnn-8.0-linux-x64-v6.0.tgz
cd cuda
sudo cp lib64/* /usr/local/cuda/lib64/
sudo cp include/* /usr/local/cuda/include/
```

```
sudo apt install libcupti-dev -y
```



## tensorflow env
```
sudo apt install python3-pip --upgrade
pip3 install virtualenv --upgrade
virtualenv /mnt/tf
source /mnt/tf/bin/activate
pip install --upgrade tensorflow-gpu
```


### devices
```
from tensorflow.python.client import device_lib
device_lib.list_local_devices()
```

### sample
```
import tensorflow as tf
# Creates a graph.
a = tf.constant([1.0, 2.0, 3.0, 4.0, 5.0, 6.0], shape=[2, 3], name='a')
b = tf.constant([1.0, 2.0, 3.0, 4.0, 5.0, 6.0], shape=[3, 2], name='b')
c = tf.matmul(a, b)
# Creates a session with log_device_placement set to True.
sess = tf.Session(config=tf.ConfigProto(log_device_placement=True))
# Runs the op.
print(sess.run(c))
```

* output
```
Device mapping:
/job:localhost/replica:0/task:0/gpu:0 -> device: 0, name: Tesla K40c, pci bus
id: 0000:05:00.0
b: /job:localhost/replica:0/task:0/gpu:0
a: /job:localhost/replica:0/task:0/gpu:0
MatMul: /job:localhost/replica:0/task:0/gpu:0
[[ 22.  28.]
 [ 49.  64.]]
```



## ref
* http://www.pyimagesearch.com/2016/07/04/how-to-install-cuda-toolkit-and-cudnn-for-deep-learning/
* http://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html#axzz4dfIE2Rxb
* AWS의 GPU를 이용한 TensorFlow
  * http://goodtogreate.tistory.com/entry/AWS%EC%9D%98-GPU%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-TensorFlow
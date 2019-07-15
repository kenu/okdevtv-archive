# BOSH
* https://bosh.io/
* BOSH is a project that unifies release engineering, deployment, and lifecycle management of small and large-scale cloud software. 
* BOSH can provision and deploy software over hundreds of VMs. 
* It also performs monitoring, failure recovery, and software updates with zero-to-minimal downtime.

* While BOSH was developed to deploy Cloud Foundry PaaS, it can also be used to deploy almost any other software (Hadoop, for instance). 
* BOSH is particularly well-suited for large distributed systems. 
* In addition BOSH supports multiple Infrastructure as a Service (IaaS) providers like VMware vSphere, vCloud Director, Amazon Web Services EC2, and OpenStack. 
* There is a Cloud Provider Interface (CPI) that enables users to extend BOSH to support additional IaaS providers such as Google Compute Engine and Apache CloudStack.

## Stemcell
* 버전별 OS 이미지 특정 IaaS 패키지용
* vSphere, AWS, OpenStack, vCloud 인프라스트럭처에 공통인 이미지
  *  vSphere 위에 Ubuntu Trusty와 CentOS 6.5
* tarball로 배포 (*.tgz)

## Release
* versioned collection of configuration properties, configuration templates, start up scripts, source code, binary artifacts, and anything else required to build and deploy software in a reproducible way.
* the layer placed on top of a stemcell.
* For example, a Redis release might include start-up and shutdown scripts for redis-server, a tarball with Redis source code obtained from the Redis official website, and a few configuration properties allowing cluster operators to alter that Redis configuration.

## Deployment
* collection of VMs, built from a stemcell, that has been populated with specific releases and disks that keep persistent data. 
* These resources are created based on a manifest file in the IaaS and managed by the BOSH Director, a centralized management server.

## bosh-init
* tool for creating and updating the Director in an environment
<img src="http://bosh.io/docs/images/bosh-architecture.png" alt="bosh-init">

### Director
* Task Queue
* Workers
* Cloud Provider Interface (CPI)

### Health Monitor
* Resurrector

### DNS Server

### Director's persisitent data
* Database
* Blobstore

### Agent

### Cross-component communication
* Message Bus (NATS)
* Registry

## bosh-lite
* a vagrant VM that comes with pre-installed BOSH server (Director)
* http://mariash.github.io/learn-bosh/#prepare

## Vagrant
* the command line utility for managing the lifecycle of virtual machines

## References
* https://bosh.io/docs/#intro

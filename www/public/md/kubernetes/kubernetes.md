# Kubernetes
* Deploy a containerized application on a cluster
* Scale the deployment
* Update the containerized application with a new software version
* Debug the containerized application

## Tutorial

### Minikube
* `minikube version`
* `minikube start`
* `kubectl version`
* `kubectl cluster-info`
* `kubectl get nodes`

### kubernates run
```
kubectl run kubernetes-bootcamp --image=gcr.io/google-samples/kubernetes-bootcamp:v1 --port=8080
kubectl get deployments

NAME                  READY   UP-TO-DATE   AVAILABLE   AGE
kubernetes-bootcamp   1/1     1            1           73s
```

### kubectl proxy
* `kubectl proxy`
* `curl http://localhost:8001/version`

* `kubectl get` - list resources
* `kubectl describe` - show detailed information about a resource
* `kubectl logs` - print the logs from a container in a pod
* `kubectl exec` - execute a command on a container in a pod

## Install on MacOS
* `brew install kubernetes-cli`
* `brew cask install minikube`
  * [VirtualBox](https://www.virtualbox.org) 필요
* Other platform : https://kubernetes.io/docs/tasks/tools/install-kubectl/

## ref
* https://kubernetes.io/docs/tutorials/kubernetes-basics/

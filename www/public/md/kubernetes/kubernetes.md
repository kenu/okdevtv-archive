# Kubernetes
* Deploy a containerized application on a cluster
* Scale the deployment
* Update the containerized application with a new software version
* Debug the containerized application

## Minikube
* `minikube version`
* `minikube start`
* `kubectl version`
* `kubectl cluster-info`
* `kubectl get nodes`

## kubernates run
```
kubectl run kubernetes-bootcamp --image=gcr.io/google-samples/kubernetes-bootcamp:v1 --port=8080
kubectl get deployments

NAME                  READY   UP-TO-DATE   AVAILABLE   AGE
kubernetes-bootcamp   1/1     1            1           73s
```

## kubectl proxy
* `kubectl proxy`
* `curl http://localhost:8001/version`

## ref
* https://kubernetes.io/docs/tutorials/kubernetes-basics/

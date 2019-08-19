# Elastic Kubernetes Service

## Requirements
* awscli
* kubectl
* IAM Administrator

## eksctl
```
brew tap weaveworks/tap
brew install weaveworks/tap/eksctl
eksctl version
```

## cluster 생성
```
eksctl create cluster --name okdevtv

eksctl create cluster --name okdevtv --node-type t2.micro
# default t3.medium

eksctl create cluster --name okdevtv --node-type t2.micro --ssh-access --ssh-public-key /Users/kenu.heo/keys/okdevtv.pub
# not pem, but public key which can be generated from private key.
# ssh-keygen -y -f ~/keys/okdevtv.pem > ~/keys/okdevtv.pub
```

## cluster 상태
```
eksctl utils describe-stacks --name=okdevtv
eksctl utils describe-stacks --name=okdevtv --region=ap-northeast-2
```

## Guestbook exam

```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/examples/master/guestbook-go/redis-master-controller.json
> replicationcontroller/redis-master created

kubectl apply -f https://raw.githubusercontent.com/kubernetes/examples/master/guestbook-go/redis-master-service.json
> service/redis-master created

kubectl apply -f https://raw.githubusercontent.com/kubernetes/examples/master/guestbook-go/redis-slave-controller.json
> replicationcontroller/redis-slave created

kubectl rolling-update redis-slave --image=k8s.gcr.io/redis-slave:v2 --image-pull-policy=Always

Command "rolling-update" is deprecated, use "rollout" instead
Created redis-slave-3804187ba3edb492a52de28854679c54
Scaling up redis-slave-3804187ba3edb492a52de28854679c54 from 0 to 2, scaling down redis-slave from 2 to 0 (keep 2 pods available, don't exceed 3 pods)
Scaling redis-slave-3804187ba3edb492a52de28854679c54 up to 1
Scaling redis-slave down to 1
Scaling redis-slave-3804187ba3edb492a52de28854679c54 up to 2
Scaling redis-slave down to 0
Update succeeded. Deleting old controller: redis-slave
Renaming redis-slave-3804187ba3edb492a52de28854679c54 to redis-slave
replicationcontroller/redis-slave rolling updated

kubectl apply -f https://raw.githubusercontent.com/kubernetes/examples/master/guestbook-go/redis-slave-service.json
service/redis-slave created

kubectl apply -f https://raw.githubusercontent.com/kubernetes/examples/master/guestbook-go/guestbook-controller.json
replicationcontroller/guestbook created

kubectl apply -f https://raw.githubusercontent.com/kubernetes/examples/master/guestbook-go/guestbook-service.json
service/guestbook created

kubectl get services -o wide

NAME           TYPE           CLUSTER-IP       EXTERNAL-IP                                                                    PORT(S)          AGE     SELECTOR
guestbook      LoadBalancer   10.100.115.172   a968acdc1ada211e9965e0a440f6d044-1573675550.ap-northeast-2.elb.amazonaws.com   3000:31968/TCP   43s     app=guestbook
kubernetes     ClusterIP      10.100.0.1       <none>                                                                         443/TCP          11m     <none>
redis-master   ClusterIP      10.100.236.142   <none>                                                                         6379/TCP         4m34s   app=redis,role=master
redis-slave    ClusterIP      10.100.55.192    <none>                                                                         6379/TCP         66s     app=redis,role=slave
```

* https://raw.githubusercontent.com/kubernetes/examples/master/guestbook-go/redis-master-controller.json
* https://raw.githubusercontent.com/kubernetes/examples/master/guestbook-go/redis-master-service.json

* https://raw.githubusercontent.com/kubernetes/examples/master/guestbook-go/redis-slave-controller.json
* https://raw.githubusercontent.com/kubernetes/examples/master/guestbook-go/redis-slave-service.json

* https://raw.githubusercontent.com/kubernetes/examples/master/guestbook-go/guestbook-controller.json
* https://raw.githubusercontent.com/kubernetes/examples/master/guestbook-go/guestbook-service.json

```
open http://a968acdc1ada211e9965e0a440f6d044-1573675550.ap-northeast-2.elb.amazonaws.com:3000
```

## Guestbook 삭제

```
kubectl delete rc/redis-master rc/redis-slave rc/guestbook svc/redis-master svc/redis-slave svc/guestbook

replicationcontroller "redis-master" deleted
replicationcontroller "redis-slave" deleted
replicationcontroller "guestbook" deleted
service "redis-master" deleted
service "redis-slave" deleted
service "guestbook" deleted
```

## cluster 삭제
```
kubectl get svc --all-namespaces

NAMESPACE     NAME         TYPE        CLUSTER-IP    EXTERNAL-IP   PORT(S)         AGE
default       kubernetes   ClusterIP   10.100.0.1    <none>        443/TCP         16m
kube-system   kube-dns     ClusterIP   10.100.0.10   <none>        53/UDP,53/TCP   16m

kubectl delete svc kubernetes
service "kubernetes" deleted

kubectl get svc --all-namespaces

NAMESPACE     NAME         TYPE        CLUSTER-IP    EXTERNAL-IP   PORT(S)         AGE
default       kubernetes   ClusterIP   10.100.0.1    <none>        443/TCP         9s
kube-system   kube-dns     ClusterIP   10.100.0.10   <none>        53/UDP,53/TCP   16m

eksctl delete cluster --name okdevtv
[ℹ]  using region ap-northeast-2
[ℹ]  deleting EKS cluster "okdevtv"
[✔]  kubeconfig has been updated
[ℹ]  cleaning up LoadBalancer services
[ℹ]  2 sequential tasks: { delete nodegroup "ng-28ee2d30", delete cluster control plane "okdevtv" [async] }
[ℹ]  will delete stack "eksctl-okdevtv-nodegroup-ng-28ee2d30"
[ℹ]  waiting for stack "eksctl-okdevtv-nodegroup-ng-28ee2d30" to get deleted
```

## ref
* eksctl
  * https://docs.aws.amazon.com/ko_kr/eks/latest/userguide/getting-started-eksctl.html

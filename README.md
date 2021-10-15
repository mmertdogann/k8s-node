 # k8s-node

A simple containerized (`Docker`) and orchestrated (`Kubernetes`) web application

<br>

## Technologies

The project has been created using these technologies:

* **Node.js** as JavaScript runtime 
* **Express** as web application framework
* **Docker** as containerization platform
* **Kubernetes** as container-orchestration system
* **kubectl** as command-line tool to interact kubernetes

<br>

## Setup & Installtion

**Install:**

1. `Node.js` from <a href="https://nodejs.org/en/download/">here</a>
2. `Docker` from <a href="https://docs.docker.com/get-docker/">here</a> then enable kubernetes
3. `kubectl` from <a href="https://kubernetes.io/docs/tasks/tools/">here</a> 

<br>

```bash
git clone <repo-url>
```
<br>

> For acquiring the Docker image either pull the [image](https://hub.docker.com/r/mmertdogann/k8snode) or build a new image using Dockerfile via type this command:

```bash
docker build -t <image-name> .
```

⚠️ If you will use the newly created Docker image, you need to change the image property of the deployment manifest with the new `<image-name>`.

<br>

## Running The App

In order to run the application, you need to create `deployment`, `service`, `config` and `secret` from yaml files using these commands:

```bash
kubectl apply -f nodeapp.config.yaml
kubectl apply -f nodeapp.secret.yaml
kubectl apply -f nodeapp.deployment.yaml
kubectl apply -f nodeapp.service.yaml
```

Getting basic info about kubernetes components:

```bash
kubectl get node
kubectl get pod
kubectl get service
kubectl get all
```

<br>

## Viewing The App

Open a browser and then go to `localhost`. There will be a beautiful Hello World! text ready for you to see.

To observe console outputs, you need to use this command:

```bash
kubectl logs <pod-name>
```

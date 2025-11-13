# Noble Market - Kubernetes Deployment

## Prerequisites
- Kubernetes cluster (Minikube, Kind, or cloud provider)
- kubectl CLI installed
- Docker images built and pushed to a registry

## Deployment Steps

### 1. Create Namespace
```bash
kubectl apply -f namespace.yaml
```

### 2. Create ConfigMap
```bash
kubectl apply -f configmap.yaml
```

### 3. Deploy Database
```bash
kubectl apply -f postgres-pvc.yaml
kubectl apply -f postgres-deployment.yaml
kubectl apply -f postgres-service.yaml
```

### 4. Deploy Backend
```bash
kubectl apply -f backend-deployment.yaml
kubectl apply -f backend-service.yaml
```

### 5. Deploy Frontend
```bash
kubectl apply -f frontend-deployment.yaml
kubectl apply -f frontend-service.yaml
```

### 6. Verify Deployment
```bash
kubectl get all -n noble-market
```

## Access the Application

Get the frontend service external IP:
```bash
kubectl get service frontend-service -n noble-market
```

## Cleanup
```bash
kubectl delete namespace noble-market
```

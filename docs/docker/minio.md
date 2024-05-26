---
outline: deep
---



# 安装MinIO

## docker-compose

### docker-compose.yml

```yaml
version: '3.9'
services:
  minio:
    image: minio/minio:RELEASE.2023-11-20T22-40-07Z
    container_name: minio
    restart: always
    network_mode: bridge
    privileged: true
    environment:
      - MINIO_ROOT_USER: admin
      - MINIO_ROOT_PASSWORD: admin123
      - TZ: Asia/Shanghai
    command: server /data --console-address ":9001"
    ports:
      - "9000:9000"
      - "9001:9001"      
    volumes:
      - ./minio/data:/data


```



### 启动容器

```bash
docker-compose up -d
```





## docker run

```bash
docker run -d \
--name=minio \
--restart=always \
--network=bridge \
--privileged \
-p 9000:9000 \
-p 9001:9001 \
-e MINIO_ROOT_USER=admin \
-e MINIO_ROOT_PASSWORD=admin123 \
-e TZ=Asia/Shanghai
-v ./minio/data:/data \
minio/minio:RELEASE.2023-11-20T22-40-07Z \
server /data --console-address ":9001"
```


---
outline: deep
---
# 安装MySQL

## docker-compose 

### docker-compose.yml

```yaml
version: '3'
services:
  mysql:
    image: mysql:8.1.0
    container_name: mysql8
    restart: always
    network_mode: bridge
    privileged: true
    command: --default-authentication-plugin=mysql_native_password --lower_case_table_names=1
    environment:
      - MYSQL_ROOT_PASSWORD: root
      - TZ: Asia/Shanghai
    ports:
      - "3306:3306"
    volumes:
      - ./mysql/data:/var/lib/mysql
      - ./mysql/conf/my.cnf:/etc/my.cnf

```

### my.cnf

文件路径：**`./mysql/conf`**

```bash
[mysqld]

skip-host-cache
skip-name-resolve
datadir=/var/lib/mysql
socket=/var/run/mysqld/mysqld.sock
secure-file-priv=/var/lib/mysql-files
user=mysql

pid-file=/var/run/mysqld/mysqld.pid
server-id=1
log-bin=mysql-bin
max_connections=1000
character-set-server=utf8mb4
default-storage-engine=INNODB
lower_case_table_names=1
max_connect_errors=100

collation-server=utf8mb4_unicode_ci
init_connect='SET NAMES utf8mb4'
default-time-zone='+8:00'

[client]
socket=/var/run/mysqld/mysqld.sock

!includedir /etc/mysql/conf.d/

```

### 启动容器

```bash
docker-compose up -d
```



## docker run

> [!TIP]
>
> 配置文件同上



```bash
docker run -d \
--name=mysql8 \
--restart=always \
--network=bridge \
--privileged \
-e MYSQL_ROOT_PASSWORD=root \
-e TZ=Asia/Shanghai \
-p 3308:3306 \
-v ./mysql/data:/var/lib/mysql \
-v ./mysql/conf/my.cnf:/etc/my.cnf \
mysql:8.1.0 \
--default-authentication-plugin=mysql_native_password --lower_case_table_names=1

```


---
outline: deep
---
# 常用命令

## 启动类命令

```bash
# 启动docker
systemctl start docker

# 停止docker
systemctl stop docker

# 重启docker
systemctl restart docker

# 查看docker状态
systemctl status docker

# 开机启动
systemctl enable docker

# 查看docker概要信息
docker info

# 查看docker帮助文档
docker --help

# 查看docker命令命令帮助文档
docker 具体命令 --help
```



## 镜像命令

> [!TIP]
>
> 中括号内为可选参数



### docker images

```bash
# 查看所有镜像
docker images [-a]

# 查看具体某个镜像
docker images -q 镜像ID
```

```bash
# 镜像库               版本号                          镜像 ID         创建时间         镜像大小
REPOSITORY            TAG                            IMAGE ID       CREATED         SIZE
minio/minio           RELEASE.2023-11-20T22-40-07Z   88c665b1183a   6 months ago    147MB
redis                 7-alpine                       2d5230e57b1b   8 months ago    37.8MB
mysql                 latest                         c138801544a9   10 months ago   577MB
```

### docker search 

搜索镜像

```bash
docker search 镜像名称 [--limit 数量]
```



### docker pull

从远程仓库下载镜像到本地

```bash
docker pull 镜像名称[:版本号]
```



### docker system df

查看镜像/容器/数据卷所占用空间

```bash
docker system df
```

```bash
TYPE            TOTAL     ACTIVE    SIZE      RECLAIMABLE
Images          11        7         7.109GB   989.3MB (13%)
Containers      7         4         3.114MB   3.07MB (98%)
Local Volumes   5         3         3.691GB   3.374GB (91%)
Build Cache     0         0         0B        0B
```



### docker rmi

删除镜像

```bash
# 删除单个
docker rmi -f 镜像ID

# 删除多个
docker rmi -f 镜像ID1 镜像ID2

# 删除全部
docker rmi -f $(docker images -qa)
```



## 容器命令

### docker run

新建、启动容器

```bash
# 语法
docker run [options] image [command][arg...]
```

options 常用说明：

- `--name=`：给容器指定一个名称，不使用则会随机分配一个名称
- `-d`：后台运行容器并返回一个容器ID （后台守护式容器）
- `-i`：以交互模式运行容器，通常和-t同时使用（前台交互式容器）
- `-t`：为容器重新分配一伪输入终端，通常和-i同时使用（前台交互式容器）
- `-P`：随机端口映射，大写P
- `-p`：指定端口映射，小写p
- `-v`：指定容器卷
- `-e`：指定环境变量

### docker update

更新容器属性

```bash
# 语法
docker update [属性名]=[属性值] [容器ID或名字]
# 更新重启策略
docker update --restart=always 990ccd8ccb94
```



### docker ps

列出当前所有正在运行的容器

```bash
# 语法
docker ps [options]
```

options常用说明：

- `-a`：列出当前所有正在运行的容器 + 历史上运行过得容器
- `-l`：显示最近创建的容器
- `-n`：显示最近n个创建的容器
- `-q`：静默模式，只显示容器编号

### 退出容器

- `exit`：run进去容器，exit退出，容器停止
- `ctrl+p+q`：run进去容器，ctrl+p+q退出，容器不停止

### 容器重启、停止、删除

- `docker start [容器ID]`：启动已经停止运行的容器

- `docker restart [容器ID]`：重启容器

- `docker stop [容器ID]`：停止正在运行的容器

- `docker kill [容器ID]`：强制停止正在运行的容器

- `docker rm [容器ID]`：删除已经停止的容器

- `docker rm -f [容器ID]`：强制删除容器

- `docker rm -f $(docker ps -aq)`：一次性删除多个容器（谨慎使用）

  

  

### 容器日志、进程、进入命令行

查看容器日志

```bash
# 语法 docker logs [options] 容器ID
docker logs -f --since 2024-05-05 -t --tail 200 990ccd8ccb94
```

OPTIONS说明：

- `-f` : 跟踪日志输出
- `--since` : 显示某个开始时间的所有日志
- `-t` : 显示时间戳
- `--tail` : 仅列出最新N条容器日志

查看容器进程：`docker ps -a | grep [名称]`
```bash
docker ps -a | grep mysql
docker ps -a | grep redis
```

查看容器内运行的进程

```bash
# 语法 docker top 容器ID
docker top 990ccd8ccb94
```

查看容器内部细节

```bash
# 语法 docker inspect 容器ID
docker inspect 990ccd8ccb94
```

进入正在运行的容器并以命令行进行交互

```bash
# 语法 docker exec -it 容器ID bash
docker exec -it 990ccd8ccb94 bash
```



### 容器复制、导入、导出

复制

```bash
# 语法 docker cp [容器ID]:[容器内路径] [目的主机路径]
docker cp 990ccd8ccb94:/opt/test.txt /Users/hu/Downloads/test.txt
```

导出

*export导出容器的内容作为一个tar文档文件[对应import命令]*

```bash
# 语法 docker export [容器ID] > [文件名.tar]
docker export 990ccd8ccb94 > test.tar
```

导入

*从归档文件中创建镜像。*

```bash
# 语法 docker import [OPTIONS] file|URL|- [REPOSITORY[:TAG]]
docker import  my_ubuntu_v3.tar my/ubuntu:v4  
```



## 清除缓存

清除Docker容器

```bash
docker container prune
```

清除Docker镜像

```bash
docker image prune
```

清除Docker卷

```bash
docker volume prune
```

清除Docker网络

```bash
docker network prune
```

清除Docker所有未使用的资源

```bash
docker system prune
```

清除Docker所有未使用的资源（包括镜像）

```bash
docker system prune -a
```

清除Docker容器、镜像、卷和网络的缓存

```bash
docker builder prune
```


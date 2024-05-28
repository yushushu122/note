---
outline: deep
---

# 安装docker

## CentOS

> [!TIP]
>
> 安装环境为 CentOS7 CentOS8 CentOS9

### 卸载旧版本

旧版本的Docker使用`docker`或`docker-engine`。在尝试安装新版本之前，请卸载任何此类旧版本，以及相关的依赖项。

```bash
sudo yum remove docker \
                docker-client \
                docker-client-latest \
                docker-common \
                docker-latest \
                docker-latest-logrotate \
                docker-logrotate \
                docker-engine
```

### 安装必要的一些系统工具

```bash
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
```

### 添加软件源

```bash
sudo yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

非阿里云用户替换

```sh
sudo sed -i 's+download.docker.com+mirrors.aliyun.com/docker-ce+' /etc/yum.repos.d/docker-ce.repo
```

### 安装Docker-CE

```sh
sudo yum makecache fast
sudo yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

### 开启Docker服务

```bash
sudo systemctl start docker
sudo systemctl enable docker
```

### 卸载Docker

1.卸载Docker Engine、CLI、containerd和Docker Compose软件包：

```bash
sudo yum remove docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-ce-rootless-extras
```

2.主机上的图像、容器、卷或自定义配置文件不会自动删除。要删除所有图像、容器和卷：

```bash
sudo rm -rf /var/lib/docker
sudo rm -rf /var/lib/containerd
```



## Ubuntu

### 卸载旧版本

```bash
for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done
```

### 安装必要的一些系统工具

```bash
sudo apt-get update
sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common
```

### 安装GPG证书

```bash
curl -fsSL https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -
```

### 添加软件源

```bash
sudo add-apt-repository "deb [arch=amd64] https://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"
```

### 安装Docker-CE

```bash
sudo apt-get -y update
sudo apt-get -y install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

### 卸载Docker

1.卸载Docker Engine、CLI、containerd和Docker Compose软件包：

```bash
sudo apt-get purge docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-ce-rootless-extras
```

2.主机上的图像、容器、卷或自定义配置文件不会自动删除。要删除所有图像、容器和卷：

```bash
sudo rm -rf /var/lib/docker
sudo rm -rf /var/lib/containerd
```



## 替换镜像源

```bash
cd /etc/docker
sudo touch daemon.json
sudo vim daemon.json
```

```json
{
  "registry-mirrors": [
    "https://docker.m.daocloud.io",
    "http://hub-mirror.c.163.com"
  ]
}
```


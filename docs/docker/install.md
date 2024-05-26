---
outline: deep
---

# 安装docker

> [!WARNING]
>
> 安装环境为 CentOS 7

## 安装必要的一些系统工具

```bash
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
```

## 添加软件源信息

```bash
sudo yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

### 替换

```sh
sudo sed -i 's+download.docker.com+mirrors.aliyun.com/docker-ce+' /etc/yum.repos.d/docker-ce.repo
```

## 更新并安装Docker-CE

```sh
sudo yum makecache fast
sudo yum -y install docker-ce
```

## 开启Docker服务

```
sudo systemctl start docker
sudo systemctl enable docker
```


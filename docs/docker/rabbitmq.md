---
outline: deep
---
# 安装RabbitMQ

## docker-compose

### docker-compose.yml

```yaml
version: '3'
services:
  rabbitmq:
    image: rabbitmq:3.11.23-management
    container_name: rabbitmq
    restart: always
    privileged: true
    network_mode: bridge
    ports:
      - "5671:5671"
      - "15672:15672"
      - "5672:5672"
    environment:
      - RABBITMQ_DEFAULT_USER=guest
      - RABBITMQ_DEFAULT_PASS=guest
    volumes:
      - ./rabbitmq/conf:/etc/rabbitmq/conf.d
      - ./rabbitmq/plugins/rabbitmq_delayed_message_exchange-3.11.1.ez:/plugins/rabbitmq_delayed_message_exchange-3.11.1.ez

```

延迟队列插件下载 [delayed_message_exchange](https://chenzhenhu.com/docker/attchs/rabbitmq_delayed_message_exchange-3.11.1.ez)

文件路径：**`./rabbitmq/plugins`**

### rabbitmq.conf

文件路径：**`./rabbitmq/conf`**

```bash
## DEFAULT SETTINGS ARE NOT MEANT TO BE TAKEN STRAIGHT INTO PRODUCTION
## see https://www.rabbitmq.com/configure.html for further information
## on configuring RabbitMQ

## allow access to the guest user from anywhere on the network
## https://www.rabbitmq.com/access-control.html#loopback-users
## https://www.rabbitmq.com/production-checklist.html#users
loopback_users.guest = false

## Send all logs to stdout/TTY. Necessary to see logs when running via
## a container
log.console = true

```



### 启动容器

```bash
docker-compose up -d
# 启用延时队列插件
docker exec -it rabbitmq rabbitmq-plugins enable rabbitmq_delayed_message_exchange
```



## docker run

> [!TIP]
>
> 配置文件同上

```bash
docker run -d \
--name=rabbitmq \
--restart=always \
--network=bridge \
--privileged \
-p 5671:5671 \
-p 5672:5672 \
-p 15672:15672 \
-e RABBITMQ_DEFAULT_USER=guest \
-e RABBITMQ_DEFAULT_PASS=guest \
-v ./rabbitmq/conf:/etc/rabbitmq/conf.d \
-v ./rabbitmq/plugins/rabbitmq_delayed_message_exchange-3.11.1.ez:/plugins/rabbitmq_delayed_message_exchange-3.11.1.ez \
rabbitmq:3.11.23-management

```



## 常用命令

新增用户

语法: rabbitmqctl add_user [用户名] [密码]

```bash
rabbitmqctl add_user test 123456
```

删除用户

语法: rabbitmqctl delete_user [用户名]

```bash
rabbitmqctl delete_user test
```

修改密码

语法: rabbitmqctl change_password [用户名] [密码]

```bash
rabbitmqctl change_password test test123
```

查看用户

````bash
rabbitmqctl list_users
````

创建 vhosts

语法: rabbitmqctl add_vhosts [vhostpath]

```bash
rabbitmqctl add_vhosts /test
```

删除 vhosts

语法: rabbitmqctl delete_vhosts [路径]

```bash
rabbitmqctl delete_vhosts /test
```

查看 vhosts

```bash
rabbitmqctl list_vhosts
```

vhosts 给用户赋予相关权限

语法：rabbitmqctl set_permissions [-p vhostpath] [user] [conf] [write] [read]

```bash
# 所有权限
rabbitmqctl set_permissions -p /test admin ".*" ".*" ".*"
# 只读权限
rabbitmqctl set_permissions -p /test admin "" "" ".*"
```

vhosts 清除权限

语法：rabbitmqctl clear_permissions [-p vhostpath] [user]

```bash
rabbitmqctl clear_permissions -p /test admin
```

启用插件

语法：rabbitmq-plugins enable [插件名称]

```bash
rabbitmq-plugins enable rabbitmq_delayed_message_exchange
```

禁用插件

语法：rabbitmq-plugins disable [插件名称]

```bash
rabbitmq-plugins disable rabbitmq_delayed_message_exchange
```





## 启用SSL

> [!TIP]
>
> 本地开发请忽略，此为生产服务器配置



### 安装 ca-certificates

CentOS

```bash
yum install -y ca-certificates
```

Ubuntu

```bash
sudo apt install -y ca-certificates
```

### 下载证书生成工具

https://github.com/rabbitmq/tls-gen.git

```sh
git clone --depth=1 https://github.com/rabbitmq/tls-gen.git tls-gen
cd tls-gen
cd basic
make PASSWORD=123456 #自定义
cd result

# 复制证书文件到 RabbitMQ cert 证书文件夹, 根据自己的路径修改
cp -rf * /rabbitmq/cert 

# 复制 rabbitmq CA证书到根证书文件夹
cp ca_certificate.pem /etc/pki/ca-trust/source/anchors/rabbitmq_ca_certificate.pem
# 将自签名证书添加到受信任的证书列表中
update-ca-trust check
```

### 修改 rabbitmq.conf

```bash
## DEFAULT SETTINGS ARE NOT MEANT TO BE TAKEN STRAIGHT INTO PRODUCTION
## see https://www.rabbitmq.com/configure.html for further information
## on configuring RabbitMQ
# 禁用 TCP 端口
listeners.tcp = none
# SSL 端口号
listeners.ssl.default=5671
ssl_options.cacertfile=/etc/rabbitmq/cert/ca_certificate.pem
ssl_options.certfile=/etc/rabbitmq/cert/server_certificate.pem
ssl_options.keyfile=/etc/rabbitmq/cert/server_key.pem
# 生成证书时的密码
ssl_options.password=123456
ssl_options.verify=verify_peer
ssl_options.fail_if_no_peer_cert=true

## allow access to the guest user from anywhere on the network
## https://www.rabbitmq.com/access-control.html#loopback-users
## https://www.rabbitmq.com/production-checklist.html#users
loopback_users.guest = false

## Send all logs to stdout/TTY. Necessary to see logs when running via
## a container
log.console = true

```



### 重启 RabbitMQ

```bash
docker restart rabbitmq
```



### 验证

```bash
# 切换到证书文件夹
cd /rabbitmq/cert
# 验证
openssl s_client -connect localhost:5671 \
  -cert client_certificate.pem \
  -key client_key.pem \
  -CAfile ca_certificate.pem
```

输出内容

```bash
New, TLSv1/SSLv3, Cipher is ECDHE-RSA-AES256-GCM-SHA384
Server public key is 2048 bit
Secure Renegotiation IS supported
Compression: NONE
Expansion: NONE
No ALPN negotiated
SSL-Session:
    Protocol  : TLSv1.2
    Cipher    : ECDHE-RSA-AES256-GCM-SHA384
    Session-ID: 2F9C04170FF7C23A80E9322837D46F2A9348EAAA14AF380E263ACB9B1E27338B
    Session-ID-ctx:
    Master-Key: B2265A741BE9F32CDA65C4F0FDE119DBCD41761AB1D95F506D561095E78DC10089FE53DBE3DBD14C86FB99A12D50A72E
    Key-Arg   : None
    Krb5 Principal: None
    PSK identity: None
    PSK identity hint: None
    Start Time: 1716718659
    Timeout   : 300 (sec)
    Verify return code: 0 (ok)
```

Verify return code: 0 (ok) 说明验证成功，如果为 error 请排查错误



### 生成Java truststore 文件

```bash
keytool -import -alias rabbitmq_server -file ./server_certificate.pem -keystore ./truststore -storepass 123456
```


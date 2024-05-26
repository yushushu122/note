# NodeJS

## 单版本 NodeJS

安装最新版本

```bash
brew install node
```

安装指定版本

```bash
# @版本号
brew install node@18
```

## 多版本 nodejs

### 使用 nvm 管理 nodejs

> [!TIP]
>
> nvm是node的包管理工具。由于在打开不同的项目时，不同的项目在安装依赖时可能会和node版本有关，所以这就需要我们在不同的项目下使用不同的node版本。 nvm就是一个比较好用node管理工具，切换node版本。



```bash
brew install nvm
```

输出内容

```bash
Please note that upstream has asked us to make explicit managing
nvm via Homebrew is unsupported by them and you should check any
problems against the standard nvm install method prior to reporting.

You should create NVM's working directory if it doesn't exist:

  mkdir ~/.nvm

Add the following to ~/.zshrc or your desired shell
configuration file:

  export NVM_DIR="$HOME/.nvm"
  [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion

```

```bash
vim ~/.zshrc
# 复制 export NVM_DIR 开头的代码，粘贴到.zshrc文件内容最后一行
export NVM_DIR="$HOME/.nvm"
  [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion

```

保存重启终端



配置国内镜像源

```bash
echo "export NVM_NODEJS_ORG_MIRROR=https://npmmirror.com/mirrors/node/" >>~/.zshrc
source ~/.zshrc
```

### 安装 nodejs

安装最新版本

```bash
nvm install node

```

安装指定版本

```bash
# nvm intall 版本号
nvm install 18
```

切换 nodejs

```bash
# nvm use 版本号
nvm use 18
```

设置默认版本

```bash
# nvm alias default 版本号
nvm alias default 18
```

查看目前安装 nodejs

```bash
nvm ls
```

输入内容

```bash
      v12.22.12
       v14.21.3
->     v18.18.0
default -> 18 (-> v18.18.0)
iojs -> N/A (default)
unstable -> N/A (default)
node -> stable (-> v18.18.0) (default)
stable -> 18.18 (-> v18.18.0) (default)
lts/* -> lts/iron (-> N/A)
lts/argon -> v4.9.1 (-> N/A)
lts/boron -> v6.17.1 (-> N/A)
lts/carbon -> v8.17.0 (-> N/A)
lts/dubnium -> v10.24.1 (-> N/A)
lts/erbium -> v12.22.12
lts/fermium -> v14.21.3
lts/gallium -> v16.20.2 (-> N/A)
lts/hydrogen -> v18.19.0 (-> N/A)
lts/iron -> v20.10.0 (-> N/A)
```



## 安装 nrm 管理 npm 镜像源

```bash
npm install -g nrm --registry http://registry.npmmirror.com
```

切换到淘宝镜像

```bash
nrm use taobao
```

查看镜像源列表

```bash
nrm ls
```

输入内容, 淘宝镜像有个*号，说明已切换到淘宝镜像

```bash
  npm ---------- https://registry.npmjs.org/
  yarn --------- https://registry.yarnpkg.com/
  tencent ------ https://mirrors.cloud.tencent.com/npm/
  cnpm --------- https://r.cnpmjs.org/
* taobao ------- https://registry.npmmirror.com/
  npmMirror ---- https://skimdb.npmjs.com/registry/
```

新增其他镜像

```bash
# nrm add 镜像名 镜像地址
nrm add tocersoft https://mvn.tocersoft.net/repository/npm-public/
```


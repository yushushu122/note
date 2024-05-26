# macOS

## 安装 Xcode Command Line Tools

> [!TIP]
>
> 已安装 Xcode 开发软件跳过此步骤



```bash
xcode-select --install
```





## 终端



## 安装 NodeJS

### 单版本 nodejs 

```bash
# 安装最新版本
brew install node
# 安装指定版本 @版本号
brew install node@18
```

### 多版本 nodejs

使用 nvm 管理 nodejs

```bash
brew install nvm
```

配置国内镜像源

```bash
echo "export NVM_NODEJS_ORG_MIRROR=https://npmmirror.com/mirrors/node/" >>~/.zshrc
source ~/.zshrc
```

安装 nodejs

```bash
# 安装最新版本
nvm install node
# 安装指定版本
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

### 安装 nrm 管理 npm 镜像源

```bash
npm install -g nrm --registry http://registry.npmmirror.com
```






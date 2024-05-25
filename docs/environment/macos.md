# macOS

## 安装 Xcode Command Line Tools

> [!TIP]
>
> 已安装 Xcode 开发软件跳过此步骤



```bash
xcode-select --install
```



## Homebrew

### macOS 和 Linux 缺失软件包的管理器

官方地址：[brew.sh](https://brew.sh)

安装命令

Github镜像(不推荐，需要科学上网)

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

国内镜像(推荐)

```bash
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```

卸载

```bash
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/HomebrewUninstall.sh)"
```



## 终端

### iTerm2

官方地址：[iterm2.com](https://iterm2.com)

直接下载安装。

### oh-my-zsh

终端美化工具

官方地址：[ohmyz.sh](https://ohmyz.sh)

安装命令

Github 镜像(不推荐，需要科学上网)

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

国内镜像(推荐)

```bash
sh -c "$(curl -fsSL https://chenzhenhu.com/script/ohmyzsh-install.sh)"
```

### 安装字体 

[Meslo LGM NF ](https://github.com/ryanoasis/nerd-fonts/releases/download/v3.0.2/Meslo.zip) (推荐)

```bash
brew tap homebrew/cask-fonts
brew install --cask font-meslo-lg-nerd-font
```

### 安装主题 

[powerlevel10k](https://github.com/romkatv/powerlevel10k) (推荐)

```bash
brew install powerlevel10k
echo "source $(brew --prefix)/share/powerlevel10k/powerlevel10k.zsh-theme" >>~/.zshrc
# 重启 zsh
exec zsh
```

> [!TIP]
>
> 此时会显示主题配置界面，按照自己喜好配置即可，配置的第一步是安装字体，字体上面已经安装过了，这步可以跳过 n。想重新打开配置界面，在终端输入 
>
> **`p10k configure`**

将需要回答一些问题：

<<< @/snippets/p10k.ansi

## 安装 Java

> [!TIP]
>
> Adoptium Eclipse Temurin（原AdoptOpenJDK）是一个由社区驱动的OpenJDK发行版。它提供免费、稳定、可扩展的OpenJDK构建，并具有较长的可用性和更新周期。该发行版的背后是Eclipse基金会，项目稳定，得到了多家大厂的支持，不依赖于特定厂商。
> Adoptium Eclipse Temurin提供了两个不同的Java[虚拟机](https://cloud.baidu.com/product/bcc.html)（JVM）供用户选择：HotSpot和OpenJ9。HotSpot是Oracle JDK的默认JVM，具有广泛的应用和优化。OpenJ9则是由IBM开发的JVM，具有高性能和可扩展性。
> 在选择Adoptium Eclipse Temurin时，你可以根据自己的需求选择合适的JVM。如果你对Oracle JDK有依赖或者想保持与Oracle JDK的兼容性，HotSpot可能是更好的选择。如果你需要高性能和可扩展性，则OpenJ9可能更适合你。

安装 temurin openjdk

```bash
brew search temurin
# Java8，安装自己需要的版本
brew install temurin@8 
```



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






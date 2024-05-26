# 终端

## iTerm2

官方地址：[iterm2.com](https://iterm2.com)

[直接下载安装](https://iterm2.com/downloads/stable/iTerm2-3_5_0.zip)

brew 安装

```bash
brew install iterm2
```



## Oh My Zsh

终端美化工具

官方地址：[ohmyz.sh](https://ohmyz.sh)

### 安装命令

Github 镜像(不推荐，需要科学上网)

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

国内镜像(推荐)

```bash
sh -c "$(curl -fsSL https://chenzhenhu.com/script/ohmyzsh-install.sh)"
```

## 安装字体 

[Meslo LGM NF ](https://github.com/ryanoasis/nerd-fonts/releases/download/v3.0.2/Meslo.zip) (推荐)

```bash
brew tap homebrew/cask-fonts
brew install --cask font-meslo-lg-nerd-font
```

## 安装主题 

[powerlevel10k](https://github.com/romkatv/powerlevel10k) (推荐)

```bash
brew install powerlevel10k
echo "source $(brew --prefix)/share/powerlevel10k/powerlevel10k.zsh-theme" >>~/.zshrc
# 重启 zsh
exec zsh

```

## 配置主题

> [!TIP]
>
> 此时会显示主题配置界面，按照自己喜好配置即可，配置的第一步是安装字体，字体上面已经安装过了，这步可以跳过 n。想重新打开配置界面，在终端输入 
>
> **`p10k configure`**

将需要回答一些问题：

<<< @/snippets/p10k.ansi
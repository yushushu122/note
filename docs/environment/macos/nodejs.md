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



## NVM 进阶用法

### .nvmrc

.nvmrc 的作用：便于切换 node 版本，保证多人开发环境的一致性

.nvmrc 是一个文件，文件内容非常简单，只有一个 [nvm](https://so.csdn.net/so/search?q=nvm&spm=1001.2101.3001.7020) 可识别的 node 版本文本内容，比如: v12.18.2，这个文件应该放在项目根目录下，并且不应被 git 忽略

```bash
echo "14.21.3" > .nvmrc

echo "v14.21.3" > .nvmrc # to default to the latest LTS version

echo "lts/*" > .nvmrc # to default to the latest version
```

然后当你运行 nvm 时:

```bash
nvm use
Found '/path/to/project/.nvmrc' with version <14.21.3>
Now using node v14.21.3 (npm v6.14.18)
```

`nvm use` 将从当前目录向上遍历目录结构，查找 `.nvmrc` 文件。换句话说，运行 `nvm use`et。在带有 `.nvmrc` 的目录的任意子目录中，都将使用 `.nvmrc`。

`.nvmrc` 文件的内容必须是 `<version>`（如 `nvm --help` 所描述），后面跟着一个换行符。不允许有尾随空格，并且需要尾随换行符。

#### bash

将以下内容放在末尾：`$HOME/.bashrc`

```bash
cdnvm() {
    command cd "$@" || return $?
    nvm_path="$(nvm_find_up .nvmrc | command tr -d '\n')"

    # If there are no .nvmrc file, use the default nvm version
    if [[ ! $nvm_path = *[^[:space:]]* ]]; then

        declare default_version
        default_version="$(nvm version default)"

        # If there is no default version, set it to `node`
        # This will use the latest version on your machine
        if [ $default_version = 'N/A' ]; then
            nvm alias default node
            default_version=$(nvm version default)
        fi

        # If the current version is not the default version, set it to use the default version
        if [ "$(nvm current)" != "${default_version}" ]; then
            nvm use default
        fi
    elif [[ -s "${nvm_path}/.nvmrc" && -r "${nvm_path}/.nvmrc" ]]; then
        declare nvm_version
        nvm_version=$(<"${nvm_path}"/.nvmrc)

        declare locally_resolved_nvm_version
        # `nvm ls` will check all locally-available versions
        # If there are multiple matching versions, take the latest one
        # Remove the `->` and `*` characters and spaces
        # `locally_resolved_nvm_version` will be `N/A` if no local versions are found
        locally_resolved_nvm_version=$(nvm ls --no-colors "${nvm_version}" | command tail -1 | command tr -d '\->*' | command tr -d '[:space:]')

        # If it is not already installed, install it
        # `nvm install` will implicitly use the newly-installed version
        if [ "${locally_resolved_nvm_version}" = 'N/A' ]; then
            nvm install "${nvm_version}";
        elif [ "$(nvm current)" != "${locally_resolved_nvm_version}" ]; then
            nvm use "${nvm_version}";
        fi
    fi
}

alias cd='cdnvm'
cdnvm "$PWD" || exit
```



#### zsh

将以下内容放在末尾：`$HOME/.zshhrc`

```bash
# place this after nvm initialization!
autoload -U add-zsh-hook

load-nvmrc() {
  local nvmrc_path
  nvmrc_path="$(nvm_find_nvmrc)"

  if [ -n "$nvmrc_path" ]; then
    local nvmrc_node_version
    nvmrc_node_version=$(nvm version "$(cat "${nvmrc_path}")")

    if [ "$nvmrc_node_version" = "N/A" ]; then
      nvm install
    elif [ "$nvmrc_node_version" != "$(nvm version)" ]; then
      nvm use
    fi
  elif [ -n "$(PWD=$OLDPWD nvm_find_nvmrc)" ] && [ "$(nvm version)" != "$(nvm version default)" ]; then
    echo "Reverting to nvm default version"
    nvm use default
  fi
}

add-zsh-hook chpwd load-nvmrc
load-nvmrc
```



#### fish

这需要安装 [低音](https://github.com/edc/bass)。

```bash
# ~/.config/fish/functions/nvm.fish
function nvm
  bass source ~/.nvm/nvm.sh --no-use ';' nvm $argv
end

# ~/.config/fish/functions/nvm_find_nvmrc.fish
function nvm_find_nvmrc
  bass source ~/.nvm/nvm.sh --no-use ';' nvm_find_nvmrc
end

# ~/.config/fish/functions/load_nvm.fish
function load_nvm --on-variable="PWD"
  set -l default_node_version (nvm version default)
  set -l node_version (nvm version)
  set -l nvmrc_path (nvm_find_nvmrc)
  if test -n "$nvmrc_path"
    set -l nvmrc_node_version (nvm version (cat $nvmrc_path))
    if test "$nvmrc_node_version" = "N/A"
      nvm install (cat $nvmrc_path)
    else if test "$nvmrc_node_version" != "$node_version"
      nvm use $nvmrc_node_version
    end
  else if test "$node_version" != "$default_node_version"
    echo "Reverting to default Node version"
    nvm use default
  end
end

# ~/.config/fish/config.fish
# You must call it on initialization or listening to directory switching won't work
load_nvm > /dev/stderr
```


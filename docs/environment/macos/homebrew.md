# Homebrew

> [!TIP]
>
> macOS 和 Linux 缺失软件包的管理器

官方地址：[brew.sh](https://brew.sh)

## 安装命令

Github镜像(不推荐，需要科学上网)

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

国内镜像(推荐)

```bash
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```

```bash
               开始执行Homebrew自动安装程序
             [cunkai.wang@foxmail.com]
       https://zhuanlan.zhihu.com/p/111014448

请选择下列一个 数字编号 后回车
（这里只是下载brew，随意选。国内下载源有5种稍后让你选择配置）

1、通过清华大学下载brew
2、通过Gitee下载brew
3、！我已经安装brew，跳过克隆，直接带我去配置国内下载源
4、不克隆brew，只把仓库地址设置成Gitee
5、不克隆brew，只把仓库地址设置成清华大学

请输入序号: 1
```

```bash
    你选择了Gitee brew本体下载源

请输入开机密码，输入过程不显示，输入完后回车
已获取权限
==> 安装过程开始调用Brew官方安装脚本，提示会变成英文，看不懂的复制到在线翻译。
  如果下载速度慢可以ctrl+c或control+c重新运行脚本选择下载源

  ->  !!!!是否删除之前本机安装的Brew（是Y  否N） 我没有检测本机是否安装brew，选哪个都会继续运行
  (Y/N): Y
```

```bash
Press RETURN/ENTER to continue or any other key to abort: 按回车键
```

```bash
完成  退出brew官方安装脚本  完成

==> 配置国内镜像源HOMEBREW BOTTLE
此处如果显示Password表示需要再次输入开机密码，输入完后回车

        Homebrew已经安装成功，接下来配置国内软件下载源。

请选择今后brew install的时候访问那个国内镜像，例如阿里巴巴，输入5回车。

1、中科大国内源（推荐）
2、清华大学国内源
3、上海交通大学国内源
4、腾讯国内源
5、阿里巴巴国内源(推荐)
请输入序号: 5
```

重启终端



## 卸载命令

```bash
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/HomebrewUninstall.sh)"
```


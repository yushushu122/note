# Xcode Command Line Tool

## 介绍

Xcode Command Line Tool是 macOS上的一套在终端上运行的开发工具。

此软件包通过安装命令行开发人员工具以及 macOS SDK 框架和标头，通过终端实现 UNIX 风格的开发。包含许多有用的工具，例如 Apple LLVM 编译器、链接器和 Make。如果您使用 Xcode，这些工具也会嵌入到 Xcode IDE 中。

## 安装 Xcode Command Line

:::tip
如果你已安装 Xcode 软件，可以跳过。<br/>
执行下面命令，会弹出安装确认窗口，点击安装即可。
:::

```bash
xcode-select-install
```

验证

```bash
xcode-select -p
```

```bash
# 输出内容
/Library/Developer/CommandLineTools/
```


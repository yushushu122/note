# Azul Zulu JDK

> [!TIP]
>
> Azul Zulu JDK是Java开发者的优选方案，具有显著成本效益、稳定安全、100%开源和与OracleJDK高度兼容等特点。通过TCK测试，确保新旧应用无需修改即可运行。提供快速安全的补丁更新，易于从OracleJDK迁移，是企业保障Java应用性能、成本和安全的理想选择。

## 安装 zulu openjdk

```bash
brew tap mdogan/zulu
# 安装自己需要的版本
brew install zulu-jdk8
brew install zulu-jdk11
brew install zulu-jdk17
brew install zulu-jdk21
```

## 验证

```bash
java -version
```

```bash
openjdk version "1.8.0_412"
OpenJDK Runtime Environment (Zulu 8.78.0.19-CA-macos-aarch64) (build 1.8.0_412-b08)
OpenJDK 64-Bit Server VM (Zulu 8.78.0.19-CA-macos-aarch64) (build 25.412-b08, mixed mode)
```

## 在不同 JDK 版本之间切换

首先在 ~/.zshrc 或者 ~/.bashrc 中添加如下脚本：

```bash
jdk() {
  version=$1
  export JAVA_HOME=$(/usr/libexec/java_home -v"$version");
  java -version
}

```

重启终端

```bash
jdk 1.8
jdk 11
jdk 17
```


# 常见问题



## 提示程序含有恶意代码或者已经打开所有来源还是提示扔到垃圾桶

解决方法：在终端输入 xattr -r -d com.apple.quarantine 加上程序的App绝对路径，App建议直接拖放到终端，会自动填写路径

```bash
xattr -r -d com.apple.quarantine /Applications/软件名称.app
```


# 代码片段
## Java

```java
/**
 * 构建树结构
 * @param list      数据列表
 * @param parentValue  父级值
 * @param key       获取Key的方法
 * @param parentKey 获取父级Key的方法
 * @param consumer  设置子级的方法
 * @return          树结构
 * @param <T>       数据类型
 * @param <R>       数据比较类型
 */
public static <T, R> List<T> buildTree(List<T> list, R parentValue,
                                       Function<? super T, ? extends R> key,
                                       Function<? super T, ? extends R> parentKey,
                                       BiConsumer<T, List<T>> consumer) {
    List<T> resultList = new ArrayList<>(10);
    for (T item : list) {
        R pid = parentKey.apply(item);
        if (Objects.equals(pid, parentValue)) {
            R id = key.apply(item);
            List<T> children = buildTree(list, id, key, parentKey, consumer);
            if (CollUtils.isNotEmpty(children)) {
                consumer.accept(item, children);
            }
            resultList.add(item);
        }
    }
    return resultList;
}
```


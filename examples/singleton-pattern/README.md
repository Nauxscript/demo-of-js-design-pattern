# 单例模式 Singleton Pattern

## What?
单例模式的定义是：
> 保证一个类仅有一个实例，并提供一个访问它的全局访问点。

而对于 javascript 这样一门无类（non-class）语言，其可以更加直接地理解为：
> 确保只有一个实例，并提供全局访问。

## Why?
在开发过程中，我们可能有某些数据是只需要一个的；如前端页面的一个全局的 window，多页面共同使用的一个全局缓存，一个唯一的用来承载不同弹窗的根容器 div 节点，诸如此类。在正常的逻辑中，如果他们尚未存在，则应当被创建；而如果已经存在，则应当有且只有一个。

## Wow!

### Demo: 全局弹窗
[全局弹窗 Global Dialog](./GlobalDialog/index.js)

### Demo: 全局缓存
[全局缓存 Global Cache](./GlobalCache/index.js)
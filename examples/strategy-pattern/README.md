# 策略模式 Strategy Pattern

## What?
单例模式的定义是：
> 定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换。

> “并且使它们可以相互替换”，这句话在很大程度上是相对于静态类型语言而言的。因为静态类型语言中有类型检查机制，所以各个策略类需要实现同样的接口。当它们的真正类型被隐藏在接口后面时，它们才能被相互替换。而在 JavaScript 这种“类型模糊”的语言中没有这种困扰，任何对象都可以被替换使用。因此，**JavaScript 中的“可以相互替换使用”表现为它们具有相同的目标和意图**

## Why?
在开发过程中，很多时候需要我们对不同的条件执行不同的逻辑，但可能不同的逻辑最终导向的是一致的结果；正如我们要去一个城市，可以选择火车、汽车、飞机甚至骑自行车、步行等等的“策略”；对于最终到达目的地来说，哪一个策略并不重要，他们可以随意替换。

## Wow!

### Demo: 第三方登录接入

对于一些医院信息系统来说，常常需要接入不同的厂商来实现如扫码登录、手机短信登录、PIN 码登录等；对于不同的医院，由于使用的厂商不一样，导致接口入参也不一致；如 A 医院的以上三种登录方式对应的接口入参是：

- 扫码登录：用户帐号 `userCode`、登录方式 `model` 为指定的 `qrCode`、特殊业务入参 `damnParamA`
- 短信登录：用户帐号 `userCode`、登录方式 `model` 为指定的 `SMS`、特殊业务入参 `damnParamA`、用户手机号 `cellphoneNumber`
- PIN 码登录：用户帐号 `userCode`、登录方式 `model` 为指定的 `PIN`、特殊业务入参 `damnParamA`、PIN 码 `pinValue`

而 B 医院的第三方登录接口的入参为：
- 扫码登录：用户帐号 `account`、登录方式 `method` 为指定的 `XXX_CODE`、特殊业务入参 `damnParamB`
- 短信登录：用户帐号 `account`、登录方式 `method` 为指定的 `XXX_SMS`、特殊业务入参 `damnParamB`、用户手机号 `phone`
- PIN 码登录：用户帐号 `account`、登录方式 `method` 为指定的 `XXX_PIN`、特殊业务入参 `damnParamB`、PIN 码 `pin`

对于不同的厂商接口，我们需要根据已有的用户数据和当前的厂商信息构造出对应的入参。

[第三方登录接入 Third-Party Login Methods](./LoginMethods/index.js): 

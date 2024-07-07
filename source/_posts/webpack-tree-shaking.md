---
title: 【webpack】TreeShaking工作原理
date: 2024-07-07 11:27:29
tags:
  - 前端
  - webpack
categories:
  - 前端
---

# [官方文档](https://webpack.js.org/guides/tree-shaking/#root)


# 为什么要开启TreeShaking
删除未被使用的代码(Dead Code)，减少打包体积

  - 永远不会被执行到的代码块
  - 代码被执行但是返回结果没有被使用
  - 没有被使用的变量、常量、方法、类

# 使用前提
 - TreeShaking宿主环境是Node，而不是浏览器
 - JS代码需要遵循ES6 Module规范（支持静态分析），而不是CommonJs或其他。通过分析ES6 Module的导入导出，构建依赖图，分析出模块间的依赖关系、变量引用关系。
 - webpack需要设置`mode: production`和`minification`（代码压缩），`development`模式下开启`optimization: { usedExports: ture }`。
 - 在使用babel-loader或ts-loader时需要保留`export`、`import`。

# 原理
1. 标记没有被使用的模块导出值。
     - Make 阶段，收集导出变量并记录到模块依赖图ModuleGraph 变量中。
     - Seal 阶段，遍历ModuleGraph 标记模块导出变量有没有被使用
     - 生成产物时，若变量没有被其他模块使用时则删除对应的导出语句
2. 使用Terser删除没有没使用导出。
> 标记功能需要配置 optimization.useExports = true 开启

## 标记效果
- webpack 负责对代码进行标记，把import & export 标记为3类：
所有 import 标记为 /* harmony import */
- 被使用过的 export 标记为/* harm export([type])*/ ，其中[type] 和 webpack 内部相关，可能是 binding，immutable 等等。
- 未被使用过的 import 标记为 /* unused harmony export [FuncName] */，其中[FuncName] 为export 的方法名称

## 副作用
> 代码除了返回值外，还做了其他事情。如修改外部变量、打印日志，动态引入CSS、JS资源等会产生附加影响的操作。

```js
const setTitle = () => document.title = "new title";

var a = setTitle();
```
变量`a`没有被使用但不应该被删除，否则title不会被更新。

## 处理副作用
1. 单个申明
    ```js
    import { something } from "lib";
    /**
     * 表明something()没有任何副作用，可以放心删除。
     */
    /*#__PURE__*/something();
    ```
2. sideEffects
    ```json
    // package.json
    // 说明该工程所有代码都没有副作用
    {
      "sideEffects": false
    }

    // package.json
    // lib下所有文件及其所有子文件夹文件均没有副作用
    // module1文件夹下的文件没有副作用（不包括子文件夹）
    // module2/file.js这个文件没有副作用
    {
      "sideEffects": [
        "lib/**/*",
        "module1/*",
        "module2/file.js"
      ]
    }
    ```
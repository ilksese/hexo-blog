---
title: hexo线上部署踩坑
date: 2024-07-01 18:54:25
tags:
  - hexo
categories: 杂记
description: hexo线上部署时遇到的问题和解决方法
cover: https://s2.loli.net/2024/07/01/d3lKD8u5bsSI74B.png
---

> submodule

使用`git clone https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly`的方式添加主题，在stage change时会遇到`hint: If you meant to add a submodule, use: xxx`
![git-submodule-hint.png](https://s2.loli.net/2024/07/01/KZnQSRJBkyLUxOh.png)  
不同仓库嵌套了，就会出现这个提示。处理方式如下：  
1. 确保万一先执行`git rm --cached themes/butterfly`，因为我安装的主题是butterfly，如果是其他主题，依照hint信息替换成对应主题名（子模块名）就行，`git rm --cached ${submodule_name}`。
2. 执行：`git submodule add https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly`。成功在项目根目录下会生成一个`.gitmodules`文件。内容如下，具体以实际的添加的主题（子模块）信息为准。
    ```txt
    [submodule "themes/butterfly"]
      path = themes/butterfly
      url = https://github.com/jerryc127/hexo-theme-butterfly.git
    ```
3. 重新stage change。
> 样式丢失

![hexo-style-lose.png](https://s2.loli.net/2024/07/01/CBPSxAbU394uMaV.png)  
问题原因：资源文件路径未设置或设置错误,导致相关样式文件找不到。  
解决方式：  
1. 修改项目根目录`_config.yml`文件，设置`url`为线上blog地址，如：`url: https://liudingchao.netlify.app/`。
2. 修改`index_generator` => `path: ''`为`path: '/'`
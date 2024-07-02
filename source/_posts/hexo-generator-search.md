---
title: 博客添加搜索功能
date: 2024-07-02 09:09:59
tags:
  - hexo
categories: 杂记
description: 使用hexo-generator-search给博客添加搜索功能
cover: https://s2.loli.net/2024/07/01/d3lKD8u5bsSI74B.png
---
# 使用hexo-generator-search给博客添加搜索功能


> 安装[hexo-generator-search](https://github.com/wzpan/hexo-generator-search)

```bash
npm install hexo-generator-search --save
```

> 配置butterfly的`_config.yml`

```yaml
# Local search
local_search:
  enable: true
  # Preload the search data when the page loads.
  preload: false
  # Show top n results per article, show all results by setting to -1
  top_n_per_article: 1
  # Unescape html strings to the readable one.
  unescape: false
  CDN:
```
> 重新构建

```bash
# setp 1
hexo clean
# setp 2
hexo generate
# or
hexo server
```
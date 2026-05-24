---
title: OpenCode隐私模式：临时环境配置与使用
date: 2026-05-24 10:30:10
tags:
  - opencode
  - AI
  - zsh
  - privacy
categories: 杂记
description: 通过XDG_DATA_HOME临时目录实现OpenCode隐私模式
---

# OpenCode隐私模式：临时环境配置与使用

> 在 `.zshrc` 中配置一个 Shell 函数，让 OpenCode 每次运行在临时环境中，退出后不留痕迹。

## 原理

OpenCode 的会话数据默认存储在 `XDG_DATA_HOME` 目录下（通常是 `~/.local/share/opencode`）。通过将该目录指向临时路径，并在退出后删除，即可实现"用完即焚"的隐私模式。

## 配置方法

在 `~/.zshrc` 中添加以下函数：

```zsh
# opencode 隐私模式：退出后自动删除临时 DB，不保留任何 session 历史
opencode-privacy() {
  local tmpdir=$(mktemp -d)
  XDG_DATA_HOME="$tmpdir" opencode "$@"
  rm -rf "$tmpdir"
}
```

重新加载配置：

```bash
source ~/.zshrc
```

## 使用方式

```bash
opencode-privacy
```

可以像正常使用 `opencode` 一样传参：

```bash
opencode-privacy "解释这段代码"
opencode-privacy --model claude-sonnet-4-5 "实现一个排序算法"
```

## 工作流程

1. `mktemp -d` 创建一个临时目录，如 `/tmp/tmp.XXXXXX`
2. `XDG_DATA_HOME` 环境变量覆盖默认数据目录，OpenCode 的所有数据写入临时目录
3. OpenCode 运行完毕后退出
4. `rm -rf "$tmpdir"` 删除整个临时目录，所有会话历史和缓存消失

## 验证

```bash
# 运行隐私模式
opencode-privacy

# 在 OpenCode 中查看数据目录
/debug

# 退出后检查临时目录是否被清理
ls /tmp/tmp.* 2>/dev/null || echo "已清理"
```

## 注意事项

- 该模式不会影响 AI 提供商的 API 调用记录 — 仅在本地不留痕迹
- 如需保留某些会话，请在退出前手动 `/share` 生成分享链接
- 可与项目级 `opencode.json` 配合使用，配置独立于数据目录，不受影响

## 总结

通过一行 Shell 函数，利用 `XDG_DATA_HOME` 的覆盖机制，即可实现 OpenCode 的隐私模式。不需要额外安装工具，不需要修改 OpenCode 本身，轻量且有效。
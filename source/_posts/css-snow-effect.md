---
title: 下雪效果
date: 2024-07-01 13:25:41
tags:
  - CSS
categories: 前端
description: CSS animation 下雪效果
cover: image/css.png
---
> 思路

- 先画出一个类似篮球场的椭圆`.cloud`。
- 使用伪元素`:before`和`box-shadow`创建两个小圆，叠放在椭圆`.cloud`上，构成云朵。
- 使用使用任意多个`span`标签模拟小雪花
- 创建`snowing`动画，从上到下掉落，到快要结束的距离再将透明度变换到0。
- 使用`animation-duration`差异化掉落的时间。

核心技巧：[box-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow)、[animation-duration](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-duration)

> 代码
```html
<div class="cloud">
  <div class="sonw">
    <span style="--i:20"></span>
    <span style="--i:11"></span>
    <span style="--i:16"></span>
    <span style="--i:14"></span>
    <span style="--i:12"></span>
    <span style="--i:17"></span>
    <span style="--i:18"></span>
    <span style="--i:13"></span>
    <span style="--i:15"></span>
    <span style="--i:19"></span>
  </div>
</div>
```
```css
body {
  background: black;
}
.cloud {
  width: 188px;
  height: 40px;
  background: #fff;
  border-radius: 30px;
  margin:  100px auto 0 auto;
  position: relative;
}
.cloud::before {
  position: absolute;
  content: "";
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 56px 0 0 22px #fff;
  top: -22px;
  left: 42px;
}

.sonw span {
  display: inline-block;
  width: 4px;
  height: 6px;
  border-radius: 1px;
  background: #fff;
  margin-left: 10px;
  animation: snowing 15s infinite linear;
  animation-duration: calc(15s / var(--i));
}
@keyframes snowing {
  0% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  70% {
    transform: translateY(150px) scale(.5);
    opacity: .5;
  }
  100% {
    transform: translateY(150px) scale(0);
    opacity: 0;
  }
}
```
<iframe height="400" style="width: 100%;" scrolling="no" title="css snow effect" src="https://codepen.io/yvocxwrs-the-encoder/embed/KKGOOad?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/yvocxwrs-the-encoder/pen/KKGOOad">
  css snow effect</a> by 咕噜咕噜 (<a href="https://codepen.io/yvocxwrs-the-encoder">@yvocxwrs-the-encoder</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
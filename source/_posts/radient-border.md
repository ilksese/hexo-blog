---
title: 渐变边框 radient-border
date: 2024-10-28 21:01:12
tags:
  - css
description: css实现渐变边框
cover: image/post-radient-border.png
---
<iframe height="210px" style="width: 100%;" scrolling="auto" src='/html/post-radient-border.html' frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true" style="box-shadow: 0px 0px 20px -10px #888;">
</iframe>

#### border-image
```css
#container-1 {
  width: fit-content;
  padding: 1em 2em;
  background-color: skyblue;
  border-image: linear-gradient(90deg, red 20%, yellow 60%, blue 100%) 1 1 1 1;
  border-width: 3px;
  border-style: solid;
  cursor: pointer;
  /* 圆角不生效（缺点） */
  /* border-radius: 2em; */
}
```
#### background

```css
#container-3 {
  width: fit-content;
  /* 透明边框 */
  border: 3px solid transparent;
  background:
    /* 背景色 */
    linear-gradient(skyblue, skyblue),
    /* 边框色 */
    linear-gradient(90deg, red 20%, yellow 60%, blue 100%);
  /*
    border-box
    背景图片的摆放以 border 区域为参考
    padding-box
    背景图片的摆放以 padding 区域为参考
    content-box
    背景图片的摆放以 content 区域为参考
  */
  background-origin: border-box;
  /*
    background-clip: 设置元素的背景（背景图片或颜色）是否延伸到边框、内边距盒子、内容盒子下面。
      border-box: 背景延伸至边框外沿（但是在边框下层）
      padding-box: 景延伸至内边距（padding）外沿。不会绘制到边框处。
      content-box: 背景被裁剪至内容区（content box）外沿。
      text: 背景被裁剪成文字的前景色。
    因此:
      第一张纯色背景图只裁剪保留了内容区域（border、padding区域被裁剪舍弃了）
      第二张渐变背景图只裁剪保留了边框区域（padding、content区域被裁剪舍弃了）
  */
  background-clip: content-box, border-box;
  border-radius: 2em;
  cursor: pointer;
  .text {
    padding: 1em 2em;
  }
}
```

> MDN：[background-origin](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-origin)、[background-clip](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-clip)
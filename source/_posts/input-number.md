---
title: input-number
date: 2024-10-26 19:40:32
tags:
  - html
  - javascript
description: 纯净简洁的数字输入框
---
```html
<input type='text' inputmode='numeric' pattern='[0-9]+'>
```

```javascript
function validateInut (el) {
  el.addEventListener("beforeinput", function (e) {
    let beforeValue = el.value;
    e.target.addEventListener(
      "input",
      function () {
        if (el.validity.patternMismatch) {
          el.value = beforeValue;
        }
      },
      { once: true }
    );
  })
}
```
#### ONLINE DEMO
<iframe height="auto" style="width: 100%;" scrolling="auto" src='/html/input-number.html' frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true" style="box-shadow: 0px 0px 20px -10px #888;">
</iframe>

> 拓展: [MDN - ValidityState](https://developer.mozilla.org/zh-CN/docs/Web/API/ValidityState)
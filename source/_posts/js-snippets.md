---
title: js-snippets
date: 2024-08-31 11:16:45
tags:
  - JavaScript
categories: 前端
description: 一些实用的JavaScript代码
cover: image/javascript.jpg
---

#### 2的n次方
```js
1 << 2 // 4
1 << 3 // 8
1 << 4 // 16
```

#### 判断n是否是2的整数幂
```js
// n & (n - 1) === 0，则n是2的整数幂
const isPowerOf2 = n => (n & (n - 1)) === 0

isPowerOf2(2) // true
isPowerOf2(3) // false
isPowerOf2(4) // true
```

#### 开关
```js
let toggle = 0;
toggle ^= 1 // toggle: 1
toggle ^= 1 // toggle: 0
toggle ^= 1 // toggle: 1
```

#### 取整
```js
let num = 3.14
console.log(~~num) // 3
console.log(num | 0) // 3
console.log(num << 0) // 3
console.log(num >> 0) // 3
// 大数慎用
```

#### 符号判断
```js
(3 ^ -5) >= 0 // false
(-3 ^ -5) >= 0 // true
(-3 ^ 5) >= 0 // false
// 此方法不适用于0, -0
(1 ^ -0) >= 0 // true
(-1 ^ -0) >= 0 // false
```

#### 评分
```js
const rate = r => '★★★★★☆☆☆☆☆'.slice(5 - r, 10 - r)

rate(0) // ☆☆☆☆☆
rate(3) // ★★★☆☆
```

#### 随机整数 [min, max)
```js
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
```

#### Hex随机色
```js
const randomHexColor = () => `#${Math.random().toString(16).slice(2, 8).padEnd(6, "0")}`;
const hexColor = randomHexColor();
console.log(`%c${hexColor}`, `color:${hexColor}`);
```

#### RGB随机色
```js
const randomRGBColor = () => `rgb(${getRandomInt(0, 256)}, ${getRandomInt(0, 256)}, ${getRandomInt(0, 256)})`;
const rgb = randomRGBColor();
console.log(`%c${rgb}`, `color:${rgb}`);
```

#### 文件大小单位转换
```js
function autoSizeUnit(byte) {
  var units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB', 'BB'];
  var unitIndex = 0;
  while (byte >= 1024 && unitIndex < units.length - 1) {
    byte /= 1024;
    unitIndex++;
  }
  return `${byte.toFixed(2)} ${units[unitIndex]}`;
}
```
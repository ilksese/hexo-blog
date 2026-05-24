'use strict'

const css = hexo.extend.helper.get("css").bind(hexo);

hexo.extend.injector.register(
  'head_end',
  () => css("/html/css/home.css"),
  "home"
);
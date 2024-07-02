'use strict'

const css = hexo.extend.helper.get("css").bind(hexo);
const js = hexo.extend.helper.get("js").bind(hexo);

hexo.extend.injector.register(
  'head_begin',
  () => js('https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js'),
  "default"
);
hexo.extend.injector.register(
  'head_end',
  () => js('https://cdn.jsdelivr.net/npm/velocity-animate@1.5.2/velocity.min.js'),
  "home"
);

hexo.extend.injector.register(
  'head_end',
  () => css("/html/css/home.css"),
  "home"
);

hexo.extend.injector.register(
  'body_end',
  () => js("/html/js/home.js"),
  "home"
);
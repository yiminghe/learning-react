原文： https://github.com/yiminghe/learning-react/blob/master/tutorial/env/setup-your-playground.md


在本文我将介绍一种快速搭建 react demo 游乐场的方法。

## 依赖的工具

* [nodejs](http://nodejs.org/) - server side javascript runtime
* [koa](https://github.com/koajs/koa) - a nodejs web framework
* [koa-jsx](https://www.npmjs.org/package/koa-jsx) - koa middleware for transforming jsx of react
* [koa-modularize](https://www.npmjs.org/package/koa-modularize) - koa middleware for transforming commonjs file into browser module format
* [react](https://www.npmjs.org/package/react) - ui library from facebook
* [react-tools](https://www.npmjs.org/package/react-tools) - provide api to transform JSX into vanilla JS

## 初始化 package.json

在项目根目录创建 package.json

``` javascript
{
  "name": "learning-react",
  "version": "1.0.0",
  "author": "yiminghe <yiminghe@gmail.com>",
  "engines": {
    "node": ">=0.11"
  },
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "http://github.com/yiminghe/learning-react.git"
  },
  "keywords": [
    "react",
    "jsx",
    "koa"
  ],
  "devDependencies": {
    "koa": "^0.13.0",
    "koa-jsx": "^1.0.0",
    "koa-modularize": "^1.0.0",
    "koa-mount": "^1.3.0",
    "koa-serve-index": "^1.0.1",
    "koa-static": "^1.4.7",
    "react": "^0.12.0",
    "react-tools": "^0.12.0"
  },
  "scripts": {
    "start": "node --harmony server"
  }
}
```

接着在根目录运行 ``npm install`` 命令

## 初始化 server.js

在项目根目录创建 server.js

```javascript
var koa = require('koa');
var serve = require('koa-static');
var app = koa();
var path = require('path');
var cwd = __dirname;
var serveIndex = require('koa-serve-index');
app.use(serveIndex(cwd, {
    hidden: true,
    view: 'details'
}));
var jsx = require('koa-jsx');
app.use(jsx(cwd, {
    reactTools: require('react-tools'),
    next:function(){
        return 1;
    }
}));
var modularize = require('koa-modularize');
var mount=require('koa-mount');
app.use(mount('/example',modularize(path.resolve(cwd,'example'))));
app.use(serve(cwd, {
    hidden: true
}));
app.listen(8000);
console.log('server start at ' + 8000);
```

## 开始 demo 代码

把你的 demo html and commonjs 格式的 javascript 文件放在 ``example`` 目录下.


### html file
例如: example/test.html

```html
<!DOCTYPE html>
<html>
<head>
    <script src="/node_modules/react/dist/react.js"></script>
    <script src="http://g.alicdn.com/kissy/k/5.0.1/modulex-debug.js"></script>
</head>
<body>
<script>
    require.config('packages',{
       test:{
           base:'./'
       }
    });
    require(['test/init']);
</script>
</body>
</html>
```

### js file
例如: example/hello.js

```javascript
/** @jsx React.DOM */

module.exports = React.createClass({
    render:function(){
        return (<div>Hello React</div>);
    }
});
```

例如: example/init.js

```javascript
/** @jsx React.DOM */

var Hello = require('./hello');

React.render(<Hello />,document.body);
```

注意：第一行必须以 ``/** @jsx React.DOM */`` 开头

## 运行 demo

首先在项目根目录运行 ``npm start`` ,
接着在浏览器中打开 [http://localhost:8000/example/test.html](http://localhost:8000/example/test.html).

恭喜! 你可以在浏览器上看到 ``Hello React``, 你可以修改 ``init.js`` 进行测试了!
# set up your playground

In this article, i will introduce a playground environment where you can test for react demos quickly.

## dependent tools

* [nodejs](http://nodejs.org/) - server side javascript runtime
* [koa](https://github.com/koajs/koa) - a nodejs web framework
* [koa-jsx](https://www.npmjs.org/package/koa-jsx) - koa middleware for transforming jsx of react
* [koa-modularize](https://www.npmjs.org/package/koa-modularize) - koa middleware for transforming commonjs file into browser module format
* [react](https://www.npmjs.org/package/react) - ui library from facebook
* [react-tools](https://www.npmjs.org/package/react-tools) - provide api to transform JSX into vanilla JS

## init package.json

Create package.json at the root of your project directory

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
    "kissy": "~5.0.1",
    "react-tools": "^0.12.0"
  },
  "scripts": {
    "start": "node --harmony server"
  }
}
```

Then run ``npm install`` at the root of your project directory.

## author your server.js

Create server.js at the root of your project directory

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

## author your demo

Place your demo html and commonjs javascript module files into ``example`` folder.


### html file
For example: example/test.html

```html
<!DOCTYPE html>
<html>
<head>
    <script src="/node_modules/react/dist/react.js"></script>
    <script src="/node_modules/kissy/build/modulex-debug.js"></script>
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
For example: example/hello.js

```javascript
/** @jsx React.DOM */

module.exports = React.createClass({
    render:function(){
        return (<div>Hello React</div>);
    }
});
```

For example: example/init.js

```javascript
/** @jsx React.DOM */

var Hello = require('./hello');

React.render(<Hello />,document.body);
```

Note: the first line must start with ``/** @jsx React.DOM */``

## run demo

First run ``npm start`` at the root of your project folder,
then open [http://localhost:8000/example/test.html](http://localhost:8000/example/test.html) with your browser.

Well done! You will see ``Hello React`` on the browser, finally you can modify ``init.js`` and make fun of react now!
# npm-based front-end development using browserify and browser loader library

原文： https://github.com/yiminghe/learning-react/blob/master/tutorial/env/modulex-browserify-npm.md

在基于浏览器的前端开发中，我们同样可以使用 npm 作为模块源.在这篇文章中我将介绍一种方法，通过该方法可以开发时在浏览器中通过一个浏览器端模块加载器（modulex）加载来自 npm 的模块，然后使用 browserify 打包后发布到线上使用.
之前你或许应该看下这篇文章: https://github.com/yiminghe/learning-react/blob/master/tutorial/zh-cn/env/setup-your-playground.md

demo 在 https://github.com/yiminghe/learning-react/tree/master/example/react-router

## dependent tools

* [nodejs](http://nodejs.org/) - server side javascript runtime
* [modulex](https://github.com/kissyteam/modulex) - browser side loader library
* [koa](https://github.com/koajs/koa) - a nodejs web framework
* [koa-jsx](https://www.npmjs.org/package/koa-jsx) - koa middleware for transforming jsx of react
* [koa-modularize](https://www.npmjs.org/package/koa-modularize) - koa middleware for transforming commonjs file into browser module format
* [node-browserify](https://github.com/substack/node-browserify) - browser-side require() the node.js way
* [bower](https://github.com/bower/bower) - A package manager for the web
* [gulp](https://github.com/gulpjs/gulp) - The streaming build system
* [react](https://www.npmjs.org/package/react) - ui library from facebook
* [react-tools](https://www.npmjs.org/package/react-tools) - provide api to transform JSX into vanilla JS

## using modulex

modulex 是一个浏览器端的模块加载器

### 创建 package.json

For example:

```javascript
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
    "gulp": "^3.8.10",
    "koa": "^0.13.0",
    "koa-jsx": "^1.0.0",
    "koa-modularize": "^1.0.0",
    "koa-mount": "^1.3.0",
    "koa-serve-index": "^1.0.1",
    "koa-static": "^1.4.7",
    "react": "^0.12.0",
    "react-router": "^0.10.2",
    "react-tools": "^0.12.0",
    "reactify": "~0.15.2"
  },
  "scripts": {
    "start": "node --harmony server"
  }
}

```

### 创建 server.js

For example:

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
app.use(modularize());
app.use(serve(cwd, {
    hidden: true
}));
app.listen(8000);
console.log('server start at ' + 8000);
```

注意 ```app.use(modularize());``,
这句话将转化 commonjs 模块的代码为 modulex 可以在浏览器端加载的格式。


### 创建 application demo

For example example/demo.html:

```html
<!DOCTYPE html>
<html>
<head>
    <script src="/bower_components/modulex/build/modulex-debug.js"></script>
</head>
<body>
<script src="/config.js"></script>
<script>
    window.process = {
        env: {

        }
    };
    require(['./init']);
</script>
</body>
</html>
```

And example/init.js

```javascript
/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Routes = Router.Routes;
var Redirect = Router.Redirect;
var Link = Router.Link;

var App = React.createClass({
    render: function() {
        return (
            <div>
                <ul>
                    <li><Link to="user" params={{userId: "123"}}>Bob</Link></li>
                    <li><Link to="user" params={{userId: "abc"}}>Sally</Link></li>
                </ul>
                <this.props.activeRouteHandler />
            </div>
            );
    }
});

var User = React.createClass({
    render: function() {
        return (
            <div className="User">
                <h1>User id: {this.props.params.userId}</h1>
                <ul>
                    <li><Link to="task" params={{userId: this.props.params.userId, taskId: "foo"}}>foo task</Link></li>
                    <li><Link to="task" params={{userId: this.props.params.userId, taskId: "bar"}}>bar task</Link></li>
                </ul>
                <this.props.activeRouteHandler />
            </div>
            );
    }
});

var Task = React.createClass({
    render: function() {
        return (
            <div className="Task">
                <h2>User id: {this.props.params.userId}</h2>
                <h3>Task id: {this.props.params.taskId}</h3>
            </div>
            );
    }
});

var routes = (
    <Route handler={App}>
        <Route name="user" path="/user/:userId" handler={User}>
            <Route name="task" path="tasks/:taskId" handler={Task}/>
            <Redirect from="todos/:taskId" to="task"/>
        </Route>
    </Route>
    );

React.renderComponent(
    <Routes children={routes}/>,
    document.body
);
```

注意源码为 ``commonjs`` 格式

## run

先运行以下命令：
```
bower install modulex  # install a browser loader library
npm install # install npm modules
npm start # start local server
```

然后打开 [http://localhost:8000/example/demo.html](http://localhost:8000/example/demo.html) 即可.


## using browserify

添加 bundle 任务

```javascript
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
gulp.task('bundle', function () {
    return browserify(['./init.js'])
        .transform(require('reactify'))
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('init.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('../../example-bundle/react-router/'));
});
```

创建 demo-bundle.html 并引入打包后的 javascript

```html
<!DOCTYPE html>
<html>
<head>
</head>
<body>
<script src="/example-bundle/init.js"></script>
</body>
</html>
```

## run

先运行 ``gulp bundle`` ，然后打开 [http://localhost:8000/example/demo-bundle.html](http://localhost:8000/example/demo-bundle.html) 即可.

### 结束

恭喜，你现在可以通过浏览器端模块加载器快速开发，然后使用 browserify 打包后上线了。最重要是你可以很容易得共享前后端代码了。
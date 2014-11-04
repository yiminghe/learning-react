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
app.use(mount('/node_modules',modularize(path.resolve(cwd,'node_modules'))));
app.use(serve(cwd, {
    hidden: true
}));
app.listen(8000);
console.log('server start at ' + 8000);
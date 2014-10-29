var koa = require('koa');
var serve = require('koa-static');
var app = koa();
var cwd = __dirname;
var serveIndex = require('koa-serve-index');
app.use(serveIndex(cwd, {
    hidden: true,
    view: 'details'
}));
var jsx = require('koa-jsx');
app.use(jsx(cwd, {
    reactTools: require('react-tools')
}));
app.use(serve(cwd, {
    hidden: true
}));
app.listen(8000);
console.log('server start at ' + 8000);
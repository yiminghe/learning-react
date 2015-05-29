require('babel/register')({
  extensions: ['.jsx']
});

var babel = require('babel');
var router = require('koa-router');
var webpack = require('webpack');
var app = require('koa')();
var fs = require('fs');
app.use(router(app));
app.use(require('koa-webpack-dev-test-server').middleware({}));
var port = 8000;
require('./example/code-share/server')(app);
app.listen(port);
console.log('server start at ' + port);
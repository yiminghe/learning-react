require('babel/register')({
  extensions: ['.jsx']
});

var babel = require('babel');
var router = require('koa-router');
var webpack = require('webpack');
var app = require('koa')();
var fs = require('fs');
app.use(router(app));
app.use(require('koa-webpack-dev-test-server').middleware({
  nodeJscover: {
    // babel modify line mapping...
    originalFileLoader: function (ctx, srcPath) {
      var code = fs.readFileSync(srcPath, {
        encoding: 'utf-8'
      });
      try {
        ctx.body = babel.transform(code).code;
      } catch (e) {
        console.log(e);
        ctx.body = e;
      }
    }
  }
}));
var port = 8000;
require('./example/code-share/server')(app);
app.listen(port);
console.log('server start at ' + port);
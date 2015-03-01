require('node-jsx').install();
var app = require('rc-server')(null, {
  modularize: {
    nowrap: function () {
      return this.url.indexOf('nowrap') != -1 || this.url.indexOf('/build/') === 0;
    }
  }
});
var port = 8000;
require('./example/code-share/server')(app);
app.listen(port);
console.log('server start at ' + port);
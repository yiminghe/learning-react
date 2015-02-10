require('node-jsx').install();
var app = require('rc-server')();
var port = 8000;
require('./example/code-share/server')(app);
app.listen(port);
console.log('server start at ' + port);
require('babel-core/register')({
  extensions: ['.jsx']
});

const serverRender = require('./serverRender');
const app = require('rc-server')();

app.get('/examples/code-share/demo.html', function *() {
  const count = 10;
  const content = serverRender.renderComponent(count);
  const appData = JSON.stringify({count: count});
  this.body = serverRender.renderPage(content, 'window.appData=' + appData + ';');
});

var port = 9001;

app.listen(port);

console.log('listening at ' + port);

'use strict';

const serverRender = require('./serverRender');

module.exports = function(app) {
  app.get('/example/code-share/demo.html', function *() {
    const count = 10;
    const content = serverRender.renderComponent(count);
    const appData = JSON.stringify({count: count});
    this.body = serverRender.renderPage(content, 'window.appData=' + appData + ';');
  });
};

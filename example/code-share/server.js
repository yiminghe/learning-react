'use strict';

var serverRender = require('./serverRender');

module.exports = function (app) {
  app.get('/example/code-share/demo.html', function *() {
    var count = 10;
    var content = serverRender.renderComponent(count);
    var appData = JSON.stringify({count: count});
    this.body = serverRender.renderPage(content, 'window.appData=' + appData + ';');
  });
};

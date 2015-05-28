'use strict';

var React = require('react');
var Component = require('./Component');
var _ = require('lodash');
var tpl = _.template(require('fs').readFileSync(require('path').join(__dirname, 'tpl.html'), {
  encoding: 'utf-8'
}));
module.exports = function (app) {
  app.get('/example/code-share/demo.html', function *(next) {
    var count = 10;
    var content = React.renderToString(<Component count={count}/>);
    var appData = JSON.stringify({count: count});
    this.body = tpl({
      content: content,
      script: `window.appData=${appData};`
    });
  });
};

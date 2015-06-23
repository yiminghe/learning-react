'use strict';

var React = require('react');
var Component = require('./Component');
var Page = require('./Page');

module.exports = function (app) {
  app.get('/example/code-share/demo.html', function *() {
    var count = 10;
    var content = React.renderToString(<Component count={count}/>);
    var appData = JSON.stringify({count: count});
    this.body = React.renderToStaticMarkup(<Page content={content} script={`window.appData=${appData};`}/>);
  });
};

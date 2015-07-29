var Component = require('./Component');
var React = require('react');
var Page = require('./Page');
module.exports = {
  renderComponent: function (count) {
    return React.renderToString(<Component count={count}/>);
  },

  renderPage: function (content, script) {
    return React.renderToStaticMarkup(<Page content={content} script={script}/>);
  }
};

const Component = require('./Component');
const React = require('react');
const Page = require('./Page');
module.exports = {
  renderComponent(count) {
    return React.renderToString(<Component count={count}/>);
  },

  renderPage(content, script) {
    return React.renderToStaticMarkup(<Page content={content} script={script}/>);
  },
};

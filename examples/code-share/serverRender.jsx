const Component = require('./Component');
const React = require('react');
const ReactDOM = require('react-dom');
const Page = require('./Page');
module.exports = {
  renderComponent(count) {
    return ReactDOM.renderToString(<Component count={count}/>);
  },

  renderPage(content, script) {
    return ReactDOM.renderToStaticMarkup(<Page content={content} script={script}/>);
  },
};

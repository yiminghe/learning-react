const React = require('react');

class Page extends React.Component {
  render() {
    return (<html>
    <head>
      <script src="/node_modules/es5-shim/es5-shim.js"></script>
      <script src="/node_modules/es5-shim/es5-sham.js"></script>
      <script src="/node_modules/console-polyfill/index.js"></script>
    </head>
    <body>
    <div id="__react-content" dangerouslySetInnerHTML={{__html: this.props.content}}/>
    <script dangerouslySetInnerHTML={{__html: this.props.script}}/>
    <script src="./index.js"></script>
    </body>
    </html>);
  }
}

Page.propTypes = {
  content: React.PropTypes.string,
  script: React.PropTypes.string,
};

module.exports = Page;

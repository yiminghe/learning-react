const Component = require('./Component');
const React = require('react');
const appData = window.appData;
React.render(<Component {...appData}/>, document.body);

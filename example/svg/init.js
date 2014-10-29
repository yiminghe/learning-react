/** @jsx React.DOM */

var Line  = require('./line');
React.renderComponent(<Line start={{x: 20, y: 0}} end={{x: 300, y: 300}}/>, document.body);
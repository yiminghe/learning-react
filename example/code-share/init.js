/** @jsx React.DOM */

var Component = require('./component');
var React = require('react');
module.exports = function (count) {
    React.render(<Component count={count}/>, document.body);
};
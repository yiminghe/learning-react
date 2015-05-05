/** @jsx React.DOM */

var Component = require('./Component');
var React = require('react');
var appData = require('appData');
React.render(<Component {...appData}/>, document.body);
/** @jsx React.DOM */

var React = require('react');
var Dash = require('./strike-dash');
var Clip = require('./clip-path');
React.render(<div>
    <Clip start={{x: 200, y: 200}} end={{x: 300, y: 300}} duration={2}/>
    <Dash start={{x: 200, y: 200}} end={{x: 300, y: 300}} duration={2}/>
</div>, document.body);
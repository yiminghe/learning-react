/** @jsx React.DOM */

var Line = require('./line');
var Dash = require('./strike-dash');
React.render(<div>
    <Line start={{x: 20, y: 20}} end={{x: 300, y: 300}} duration={2}/>
    <Dash start={{x: 200, y: 200}} end={{x: 300, y: 300}} duration={2}/>
</div>, document.body);
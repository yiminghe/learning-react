/** @jsx React.DOM */

require('./index.css');
var React = require('react');
function load() {
  require(['./async'], function (Async) {
    Async.show();
  });
}
React.render(<button onClick={load} className='my-button'>load</button>, document.getElementById('react-content-input'));
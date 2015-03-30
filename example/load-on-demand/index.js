/** @jsx React.DOM */

require('./index.css');
// dynamic set __webpack_public_path__
//__webpack_public_path__ = '/build/example/';
var React = require('react');
function load() {
  require(['./async'], function (Async) {
    Async.show();
  });
}
React.render(<button onClick={load} className='my-button'>load</button>, document.getElementById('react-content-input'));
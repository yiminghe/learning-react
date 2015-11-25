import '../../assets/load-on-demand/index.css';
// dynamic set __webpack_public_path__
// __webpack_public_path__ = '/build/example/';
import React from 'react';
import ReactDOM from 'react-dom';
function load() {
  require(['./async'], (Async) => {
    Async.show();
  });
}
ReactDOM.render(<button onClick={load} className="my-button">load</button>, document.getElementById('__react-content'));

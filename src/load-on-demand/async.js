let container;
import '../../assets/load-on-demand/async.css';
import 'rc-dialog/assets/index.css';
import Dialog from 'rc-dialog';
import React from 'react';
import ReactDOM from 'react-dom';
exports.show = () => {
  if (!container) {
    container = document.createElement('div');
    document.getElementById('__react-content').appendChild(container);
  }
  ReactDOM.render(<Dialog style={{ width: 400 }} title="test dialog" visible closable={false}>
    <div className="my-content">loaded</div>
  </Dialog>, container);
};

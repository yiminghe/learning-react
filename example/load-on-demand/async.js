/** @jsx React.DOM */
var container;
require('./async.css');
var Dialog = require('rc-dialog');
require('rc-dialog/assets/bootstrap.css');
var React = require('react');
exports.show = function () {
  if (!container) {
    container = document.createElement('div');
    document.body.appendChild(container);
  }
  React.render(<Dialog style={{width:400}}>
    <div className="my-content">loaded</div>
  </Dialog>, container).show();
};
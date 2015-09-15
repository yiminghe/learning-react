
let container;
require('../../assets/load-on-demand/async.css');
const Dialog = require('rc-dialog');
require('rc-dialog/assets/bootstrap.css');
const React = require('react');
exports.show = () => {
  if (!container) {
    container = document.createElement('div');
    document.body.appendChild(container);
  }
  React.render(<Dialog style={{width: 400}}>
    <div className="my-content">loaded</div>
  </Dialog>, container).show();
};

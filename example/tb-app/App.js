import React from 'react';

const App = React.createClass({
  propTypes: {
    children: React.PropTypes.any,
  },

  render() {
    return (<div>
      <h1>淘宝网</h1>
      <div>
        {this.props.children}
      </div>
    </div>);
  },
});

export default App;

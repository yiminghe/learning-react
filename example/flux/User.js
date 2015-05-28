'use strict';

var React = require('react');
var UserAction = require('./UserAction');

var User = React.createClass({
  getInitialState: function () {
    return {};
  },
  componentWillReceiveProps: function () {
    this.setState({
      loading: 0
    });
  },
  onClick: function () {
    this.setState({
      loading: 1
    });
    UserAction.change();
  },
  render: function () {
    return this.state.loading ? (<div>loading</div>) : (<div>
      <p>name: {this.props.name}</p>
      <button onClick={this.onClick}>change</button>
    </div>);
  }
});

module.exports = User;

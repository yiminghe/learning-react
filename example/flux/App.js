'use strict';

var React = require('react');
var User = require('./User');
var UserStore = require('./UserStore');
module.exports = React.createClass({
  getInitialState: function () {
    return {
      user: UserStore.getUser()
    };
  },
  onUserChange: function () {
    this.setState({
      user: UserStore.getUser()
    });
  },
  componentDidMount: function () {
    UserStore.addChangeListener(this.onUserChange);
  },
  render: function () {
    return (<User {...this.state.user}/>);
  }
});

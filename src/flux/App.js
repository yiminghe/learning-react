

const React = require('react');
const User = require('./User');
const UserStore = require('./UserStore');
module.exports = React.createClass({
  getInitialState() {
    return {
      user: UserStore.getUser(),
    };
  },
  componentDidMount() {
    UserStore.addChangeListener(this.onUserChange);
  },
  onUserChange() {
    this.setState({
      user: UserStore.getUser(),
    });
  },
  render() {
    return (<User {...this.state.user}/>);
  },
});

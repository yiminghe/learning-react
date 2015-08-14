const React = require('react');
const UserAction = require('./UserAction');

const User = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
  },
  getInitialState() {
    return {};
  },
  componentWillReceiveProps() {
    this.setState({
      loading: 0,
    });
  },
  onClick() {
    this.setState({
      loading: 1,
    });
    UserAction.change();
  },
  render() {
    return this.state.loading ? (<div>loading</div>) : (<div>
      <p>name: {this.props.name}</p>
      <button onClick={this.onClick}>change</button>
    </div>);
  },
});

module.exports = User;

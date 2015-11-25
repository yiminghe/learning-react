import React from 'react';
import User from './User';
import UserStore from './UserStore';

const App = React.createClass({
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

export default App;

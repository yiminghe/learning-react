require('../../assets/react-router/index.css');

import React from 'react';
import {Link} from 'react-router';
import {findStates} from './util';

const App = React.createClass({
  propTypes: {
    children: React.PropTypes.any,
  },

  getInitialState() {
    return {states: findStates()};
  },

  render() {
    const links = this.state.states.map((state) => {
      return (
        <li key={state.abbr}>
          <Link
            to={`/state/${state.abbr}`}
            >{state.name}</Link>
        </li>
      );
    });
    return (
      <div className="App">
        <ul className="Master">
          {links}
        </ul>
        <div className="Detail">
          {this.props.children}
        </div>
      </div>
    );
  },
});

export default App;

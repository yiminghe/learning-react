// https://github.com/rackt/react-router/tree/master/examples/simple-master-detail

import './index.css';

import React from 'react';
import { Router, Link } from 'react-router';
import HashHistory from 'react-router/lib/HashHistory';

function underscore(str) {
  return str.toLowerCase().replace(/ /, '_');
}

function findStates() {
  return [
    {abbr: 'AL', name: 'Alabama'},
    {abbr: 'AK', name: 'Alaska'},
    {abbr: 'AZ', name: 'Arizona'},
    {abbr: 'AR', name: 'Arkansas'},
    {abbr: 'CA', name: 'California'},
    {abbr: 'CO', name: 'Colorado'},
    {abbr: 'CT', name: 'Connecticut'},
    {abbr: 'DE', name: 'Delaware'},
    {abbr: 'FL', name: 'Florida'},
    {abbr: 'GA', name: 'Georgia'},
    {abbr: 'HI', name: 'Hawaii'},
    {abbr: 'ID', name: 'Idaho'},
    {abbr: 'IL', name: 'Illinois'},
    {abbr: 'IN', name: 'Indiana'},
    {abbr: 'IA', name: 'Iowa'},
    {abbr: 'KS', name: 'Kansas'},
    {abbr: 'KY', name: 'Kentucky'},
    {abbr: 'LA', name: 'Louisiana'},
    {abbr: 'ME', name: 'Maine'},
    {abbr: 'MD', name: 'Maryland'},
    {abbr: 'MA', name: 'Massachusetts'},
    {abbr: 'MI', name: 'Michigan'},
    {abbr: 'MN', name: 'Minnesota'},
    {abbr: 'MS', name: 'Mississippi'},
    {abbr: 'MO', name: 'Missouri'},
    {abbr: 'MT', name: 'Montana'},
    {abbr: 'NE', name: 'Nebraska'},
    {abbr: 'NV', name: 'Nevada'},
    {abbr: 'NH', name: 'New Hampshire'},
    {abbr: 'NJ', name: 'New Jersey'},
    {abbr: 'NM', name: 'New Mexico'},
    {abbr: 'NY', name: 'New York'},
    {abbr: 'NC', name: 'North Carolina'},
    {abbr: 'ND', name: 'North Dakota'},
    {abbr: 'OH', name: 'Ohio'},
    {abbr: 'OK', name: 'Oklahoma'},
    {abbr: 'OR', name: 'Oregon'},
    {abbr: 'PA', name: 'Pennsylvania'},
    {abbr: 'RI', name: 'Rhode Island'},
    {abbr: 'SC', name: 'South Carolina'},
    {abbr: 'SD', name: 'South Dakota'},
    {abbr: 'TN', name: 'Tennessee'},
    {abbr: 'TX', name: 'Texas'},
    {abbr: 'UT', name: 'Utah'},
    {abbr: 'VT', name: 'Vermont'},
    {abbr: 'VA', name: 'Virginia'},
    {abbr: 'WA', name: 'Washington'},
    {abbr: 'WV', name: 'West Virginia'},
    {abbr: 'WI', name: 'Wisconsin'},
    {abbr: 'WY', name: 'Wyoming'},
  ];
}

function findState(abbr) {
  const states = findStates();
  for (let i = 0, l = states.length; i < l; i++) {
    if (states[i].abbr === abbr) {
      return states[i];
    }
  }
}

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
            to={`state/${state.abbr}`}
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

const Index = React.createClass({
  render() {
    return <p>Select a state from the left</p>;
  },
});

const State = React.createClass({
  propTypes: {
    params: React.PropTypes.object,
  },

  imageUrl(name) {
    return 'http://www.50states.com/maps/' + underscore(name) + '.gif';
  },

  render() {
    const unitedState = findState(this.props.params.abbr);
    return unitedState ? (
      <div className="State">
        <h1>{unitedState.name}</h1>
        <img className="state-image" src={this.imageUrl(unitedState.name)}/>
      </div>
    ) : <Index />;
  },
});


const rootRoute = {
  component: App,
  childRoutes: [
    {
      path: '/',
      component: Index,
    },
    {
      path: 'state/:abbr',
      component: State,
    },
    {
      path: '*',
      component: Index,
    },
  ],
};

let instance;

exports.getInstance = () => {
  return instance;
};

instance = React.render(<Router history={new HashHistory()}>{rootRoute}</Router>,
  document.getElementById('__react-content'));

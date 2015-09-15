require('../../assets/react-router/index.css');

import React from 'react';
import App from './App';
import Index from './IndexPage';
import State from './State';
import {Router} from 'react-router';

const rootRoute = [{
  path: '/',
  component: App,
  indexRoute: {component: Index},
  childRoutes: [
    {
      path: 'state/:abbr',
      component: State,
    },
    {
      path: '*',
      component: Index,
    },
  ],
}];

const Main = React.createClass({
  render() {
    return <Router>{rootRoute}</Router>;
  },
});

export default Main;

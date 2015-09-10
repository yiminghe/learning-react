import { Router } from 'react-router';
import 'antd/lib/index.css';
import Search from './Search';
import List from './List';
import App from './App';
import React from 'react';

const rootRoute = [{
  path: '/',
  indexRoute: {component: Search},
  component: App,
  childRoutes: [
    {
      path: '/list/:q',
      component: List,
    },
  ],
}];

React.render((
  <Router>{rootRoute}</Router>
), document.getElementById('react-content'));

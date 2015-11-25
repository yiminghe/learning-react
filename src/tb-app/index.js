import { Router } from 'react-router';
import 'antd/lib/index.css';
import Search from './Search';
import List from './List';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

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

ReactDOM.render((
  <Router>{rootRoute}</Router>
), document.getElementById('__react-content'));

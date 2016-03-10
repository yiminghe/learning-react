import React from 'react';
import ReactDOM from 'react-dom';
import Component from './Component';
const appData = window.appData;
ReactDOM.render(<Component {...appData}/>, document.body);

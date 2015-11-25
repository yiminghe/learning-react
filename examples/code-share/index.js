import React from 'react';
import Component from './Component';
const appData = window.appData;
React.render(<Component {...appData}/>, document.body);

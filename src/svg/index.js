import 'normalize.css';
import React from 'react';
import Line from './Line';
import Dash from './StrikeDash';
import Clip from './ClipPath';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div>
    <Clip start={{ x: 200, y: 200 }} end={{ x: 300, y: 300 }} duration={2}/>
    <Line start={{ x: 20, y: 20 }} end={{ x: 300, y: 300 }} duration={2}/>
    <Dash start={{ x: 200, y: 200 }} end={{ x: 300, y: 300 }} duration={2}/>
  </div>, document.getElementById('__react-content'));

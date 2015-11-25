import React from 'react';
import Component from './Component';
import ReactDOM from 'react-dom';
const Test = React.createClass({
  render() {
    const props = this.props;
    return (<div>
      <Component key={props.key1} id={props.id1}/>
      <Component key={props.key2} id={props.id2}/>
    </div>);
  },
});

ReactDOM.render(<Test id1="id1" id2="id2" key1="key1" key2="key2"/>, document.getElementById('__react-content'));

setTimeout(() => {
  console.log('*******************************');
  ReactDOM.render(<Test id1="id1" id2="id2" key1="key11" key2="key2"/>, document.getElementById('__react-content'));
}, 1000);

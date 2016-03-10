/* eslint no-alert:0 */

import '../../assets/animate/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Animate from 'rc-animate';

const TodoList = React.createClass({
  getInitialState() {
    return {
      items: ['hello', 'world', 'click', 'me'],
    };
  },
  onAdd() {
    const newItems =
      this.state.items.concat([window.prompt('Enter some text')]);
    this.setState({
      items: newItems,
    });
  },
  onRemove(i) {
    const newItems = this.state.items;
    newItems.splice(i, 1);
    this.setState({
      items: newItems,
    });
  },
  render() {
    const items = this.state.items.map((item, i) => {
      const remove = this.onRemove.bind(this, i);
      return (
        <div key={item} onClick={remove}>
          {item}
        </div>
      );
    });
    return (
      <div>
        <button onClick={this.onAdd}>Add Item</button>
        <Animate transitionName="example">
          {items}
        </Animate>
      </div>
    );
  },
});

ReactDOM.render(<TodoList />, document.getElementById('__react-content'));

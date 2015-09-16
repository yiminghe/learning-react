require('../../assets/css-transition-group/index.css');

const React = require('react/addons');
const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

const TodoList = React.createClass({
  getInitialState() {
    return {items: ['hello', 'world', 'click', 'me']};
  },
  onAdd() {
    const newItems =
      this.state.items.concat([window.prompt('Enter some text')]);
    this.setState({items: newItems});
  },
  onRemove(i) {
    const newItems = this.state.items;
    newItems.splice(i, 1);
    this.setState({items: newItems});
  },
  render() {
    const items = this.state.items.map((item, i) => {
      return (
        <div key={item} onClick={this.onRemove.bind(this, i)}>
          {item}
        </div>
      );
    });
    return (
      <div>
        <button onClick={this.onAdd}>Add Item</button>
        <ReactCSSTransitionGroup transitionName="example">
          {items}
        </ReactCSSTransitionGroup>
      </div>
    );
  },
});

React.render(<TodoList />, document.getElementById('__react-content'));

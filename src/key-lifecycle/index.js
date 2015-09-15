const React = require('react');
const Component = require('./Component');

const Test = React.createClass({
  render() {
    const props = this.props;
    return (<div>
      <Component key={props.key1} id={props.id1}/>
      <Component key={props.key2} id={props.id2}/>
    </div>);
  },
});

const test = React.render(<Test id1="id1" id2="id2" key1="key1" key2="key2"/>, document.body);

setTimeout(() => {
  console.log('*******************************');
  test.setProps({
    id1: 'id11',
    id2: 'id2',
    key1: 'key11',
    key2: 'key2',
  });
}, 1000);

const React = require('react');

const Component = React.createClass({
  propTypes: {
    id: React.PropTypes.string,
  },

  getInitialState() {
    console.log(this.props.id + ' getInitialState');
    return {};
  },

  componentWillMount() {
    console.log(this.props.id + ' componentWillMount');
  },

  componentDidMount() {
    console.log(this.props.id + ' componentDidMount');
  },

  componentWillReceiveProps(nextProps) {
    console.log(this.props.id + ' componentWillReceiveProps ' + nextProps.id);
  },

  shouldComponentUpdate() {
    console.log(this.props.id + ' shouldComponentUpdate');
    return 1;
  },

  componentWillUpdate() {
    console.log(this.props.id + ' componentWillUpdate');
  },

  componentDidUpdate() {
    console.log(this.props.id + ' componentDidUpdate');
  },

  componentWillUnmount() {
    console.log(this.props.id + ' componentWillUnmount');
  },

  render() {
    console.log(this.props.id + ' render');
    return <div {...this.props}></div>;
  },
});

const Test = React.createClass({
  render() {
    const props = this.props;
    return (<div>
      <Component key={props.key1} id={props.id1}/>
      <Component key={props.key2} id={props.id2}/>
    </div>);
  },
});
const div = document.createElement('div');
document.body.appendChild(div);
const test = React.render(<Test id1="id1" id2="id2" key1="key1" key2="key2"/>, div);

setTimeout(() => {
  console.log('*******************************');
  test.setProps({
    id1: 'id11',
    id2: 'id2',
    key1: 'key11',
    key2: 'key2',
  });
}, 1000);

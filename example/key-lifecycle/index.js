/** @jsx React.DOM */

var React = require('react');

var Component = React.createClass({
  getInitialState: function () {
    console.log(this.props.id + ' getInitialState');
    return {};
  },

  componentDidMount: function () {
    console.log(this.props.id + ' componentDidMount');
  },

  componentWillMount: function () {
    console.log(this.props.id + ' componentWillMount');
  },

  componentWillReceiveProps: function (nextProps) {
    console.log(this.props.id + ' componentWillReceiveProps ' + nextProps.id);
  },

  shouldComponentUpdate: function () {
    console.log(this.props.id + ' shouldComponentUpdate');
    return 1;
  },

  componentWillUpdate: function () {
    console.log(this.props.id + ' componentWillUpdate');
  },

  componentDidUpdate: function () {
    console.log(this.props.id + ' componentDidUpdate');
  },

  componentWillUnmount: function () {
    console.log(this.props.id + ' componentWillUnmount');
  },

  render: function () {
    console.log(this.props.id + ' render');
    return <div {...this.props}></div>;
  }
});

var Test = React.createClass({
  render: function () {
    var props = this.props;
    return <div>
      <Component key={props.key1} id={props.id1}/>
      <Component key={props.key2} id={props.id2}/>
    </div>;
  }
});
var div = document.createElement('div');
document.body.appendChild(div);
var test = React.render(<Test id1="id1" id2="id2" key1="key1" key2="key2" />, div);

setTimeout(function () {
  console.log('*******************************');
  test.setProps({
    id1: "id11",
    id2: "id2",
    key1: "key11",
    key2: "key2"
  });
}, 1000);
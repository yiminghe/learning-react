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

module.exports = Component;

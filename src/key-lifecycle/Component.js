import React from 'react';

const Component = React.createClass({
  propTypes: {
    id: React.PropTypes.string,
  },

  getInitialState() {
    this.log(' getInitialState');
    return {};
  },

  componentWillMount() {
    this.log(' componentWillMount');
  },

  componentDidMount() {
    this.log(' componentDidMount');
  },

  componentWillReceiveProps(nextProps) {
    console.log(`componentWillReceiveProps ${nextProps.id}`);
  },

  shouldComponentUpdate() {
    this.log(' shouldComponentUpdate');
    return 1;
  },

  componentWillUpdate() {
    this.log(' componentWillUpdate');
  },

  componentDidUpdate() {
    this.log(' componentDidUpdate');
  },

  componentWillUnmount() {
    this.log(' componentWillUnmount');
  },

  log(str) {
    console.log(`${this.props.id} ${str}`);
  },

  render() {
    this.log(' render');
    return <div {...this.props}></div>;
  },
});

export default Component;

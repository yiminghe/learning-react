import React from 'react';

const Component = React.createClass({
  propTypes: {
    count: React.PropTypes.number,
  },
  getDefaultProps() {
    return {
      count: 0,
      disabled: true,
    };
  },
  getInitialState() {
    return {
      count: this.props.count,
    };
  },
  componentDidMount() {
    this.turnOn();
  },
  componentWillReceiveProps(nextProps) {
    this.setState({
      count: nextProps.count,
    });
  },
  turnOn() {
    this.setState({
      disabled: false,
    });
  },
  increase() {
    this.setState({
      count: this.state.count + 1,
    });
  },
  render() {
    return (
      <div>
        <h2>count</h2>

        <div>
          <p>{this.state.count}</p>
          <button onClick={this.increase} disabled={this.state.disabled}>increase</button>
        </div>
      </div>
    );
  },
});

export default Component;
